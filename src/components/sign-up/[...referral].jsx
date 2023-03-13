import { StaticImage } from 'gatsby-plugin-image';
import { css, cx } from 'linaria';
import * as React from 'react';
import { navigate } from 'gatsby';
import { publicIpv4 } from 'public-ip';
import axios from 'axios';
import { useForm } from '../Form';
import PlastkFeature from '../PlastkFeatures';
import SignUpStep1 from '../SignUpStep1';
import Application from '../../services/applicationService';
import SignUpStep2 from '../SignUpStep2';
import { plastkFeatures } from '../../data/PlastkFeatures';
import { container, containerSm } from '../../styles/common';
import Toast from '../Toast';
import findGetParameter from '../../helpers/findGetParameter';
import Seo from '../Seo';
import Loader from '../Loader';

const initialValues = {
  first_name: '',
  middle_name: '',
  last_name: '',
  emboss: null,
  email: '',
  phone_number: '',
  gender: null,
  dob: '',
  sin: '',
  how_did_you_hear_about_us: null,
  street_address: '',
  suite_number: '',
  city: '',
  province: '',
  postal_code: '',
  annual_salary_before_tax: '',
  other_house_income: '',
  mortgage: null,
  rent_on_mortgage: '',
};

const formCard = css`
  background: var(-white);
  box-shadow: 0px 20px 61px rgba(65, 62, 101, 0.139969);
  border-radius: 26px;
  padding: 30px 15px 30px;
  @media (min-width: 768px) {
    padding: 50px 40px 50px;
  }
  h2 {
    color: var(--black);
    font-weight: 500;
  }
`;

const signUpContainer = css`
  padding-bottom: 50px;
`;

const getCookie = key => {
  const b = document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`);
  return b ? b.pop() : '';
};

function SignUpPage() {
  const [form] = useForm();
  const [state, setState] = React.useState(initialValues);
  const [step, setStep] = React.useState(0);
  const [referred_by, setReferred_by] = React.useState('');
  const [affiliate_id, setAffiliate_id] = React.useState('');
  const [ip, setIp] = React.useState('');
  const [referralNotValid, setReferralNotValid] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onChange = __ => setState(_ => ({ ..._, ...__ }));

  const getIp = async () => {
    setIp(await publicIpv4({ timeout: 5000 }));
  };

  const fetchReferralCodes = async code => {
    const codes = await axios.get(`${process.env.GATSBY_API_BASE_URL_USER}/users/get-referrals${code}`);
    if (codes.data.data.length === 0) {
      setReferralNotValid(true);
      setReferred_by(code);
    }
    if (codes.data.data.length > 0) {
      setReferralNotValid(false);
      setReferred_by(code);
    }
    if (!code) {
      setReferralNotValid(false);
    }
  };

  const fetchReferralCodesSignUp = async code => {
    if (code.length === 6) {
      const codes = await axios.get(`${process.env.GATSBY_API_BASE_URL_USER}/users/get-referrals${code}`);
      if (codes.data.data.length === 0) {
        setReferralNotValid(true);
      }
      if (codes.data.data.length > 0) {
        setReferralNotValid(false);
        setReferred_by(code);
      }
      if (!code) {
        setReferralNotValid(false);
      }
    }
  };

  React.useEffect(() => {
    let referredBy = findGetParameter('referredBy');
    const affiliateId = findGetParameter('affiliate');
    if (referredBy) {
      // eslint-disable-next-line prefer-destructuring
      referredBy = referredBy.split('=')[1];
      fetchReferralCodes(referredBy);
    }

    getIp();

    setAffiliate_id(affiliateId);

    // if (props?.location?.query?.isStudent) {
    //   setStudent('Student');
    // }
  }, []);

  const onSubmit = () => {
    setLoading(true);
    const formValues = {
      ...state,
      emboss: state?.emboss?.value,
      gender: state?.gender?.label === 'Ms.' ? 'F' : state?.gender?.value,
      why_do_you_want_the_card: state?.why_do_you_want_the_card?.value,
      how_did_you_hear_about_us:
        state?.how_did_you_hear_about_us?.value !== 'other' ? state?.how_did_you_hear_about_us?.value : state?.other,
      employment_status: state?.employment_status?.value,
      industry: state?.industry?.value,
      job_description: state?.job_description?.value,
      employment_year: state?.employment_year?.value,
      employment_month: state?.employment_month?.value,
      mortgage: state?.mortgage?.value,
      province: state?.province?.value,
      phone_number: state.phone_number,
      school_name: state?.school_name,
      hutk: getCookie('hubspotutk'),
      ip: ip || '',
      referred_by: referred_by !== null && referralNotValid === false ? referred_by : '',
      affiliate_id: affiliate_id !== null ? affiliate_id : '',
    };
    delete formValues.other;
    delete formValues.card_type;

    Application.signup(formValues)
      .then(res => {
        Toast({ type: 'success', message: res.message });
        localStorage.setItem('user', JSON.stringify(res.user));
        setTimeout(() => {
          navigate(`/set-password?token=${res.totp}`);
        }, 3000);
      })
      .catch(err => {
        setLoading(false);
        Toast({ type: 'error', message: err.message });
      });
  };
  const style = {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div className={cx(container, containerSm, signUpContainer)}>
      <PlastkFeature
        title={false}
        img={<StaticImage loading="eager" src="../../images/plastk-card.png" alt="plastk card" />}
        features={plastkFeatures}
        sm
      />
      <div className={cx(formCard)}>
        {!loading ? (
          <>
            {step === 0 && <SignUpStep1 form={form} formValues={state} onChange={onChange} setStep={setStep} />}
            {step === 1 && (
              <SignUpStep2
                form={form}
                formValues={state}
                onChange={onChange}
                onSubmit={onSubmit}
                setStep={setStep}
                fetchReferralCodesSignUp={fetchReferralCodesSignUp}
                referredBy={referred_by}
                referralNotValid={referralNotValid}
              />
            )}
          </>
        ) : (
          <div style={style}>
            <h3 className="text-center">Kindly wait while we create an account for you...</h3>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUpPage;

export function Head() {
  return (
    <Seo
      title="Sign up | Secured Credit Card"
      metaDescription="Sign up now and register to get your secured credit card and get access to insights. By creating an account, you will receive a BONUS of 5,000 points towards Canada’s first secured credit card with premium rewards."
      ogMetaTitle="Sign up | Secured Credit Card | Plastk"
      ogMetaDescription="Sign up now and register to get your secured credit card and get access to insights. By creating an account, you will receive a BONUS of 5,000 points towards Canada’s first secured credit card with premium rewards."
      pathname="/sign-up">
      <script
        async
        key="google-places"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkGJwtMlWROyJjLXDEMPH2crEIzlSvAWM&libraries=places"
      />
    </Seo>
  );
}
