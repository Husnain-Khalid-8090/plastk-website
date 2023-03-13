import axios from 'axios';
import { css, cx } from 'linaria';
import * as React from 'react';

import ForgotPassword from '../components/ForgotPassword';
import Loader from '../components/Loader';
import Seo from '../components/Seo';
import SetPasswordComp from '../components/SetPasswordComp';
import { container, containerSm } from '../styles/common';

const signUpContainer = css`
  padding-top: 50px;
  padding-bottom: 50px;
`;

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

function SetPassword({ location }) {
  const [isTokenNullOrValid, setIsTokenNullOrValid] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function checkTokenValidity() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('token') !== null) {
          const token = urlParams.get('token');
          const res = await axios.get(`${process.env.GATSBY_API_BASE_URL_AUTH}/auth/verify_otp/${token}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (res.status === 200) {
            setLoading(false);
            setIsTokenNullOrValid(true);
          }
        } else if (urlParams.get('checkToken') !== null) {
          const checkToken = urlParams.get('checkToken');
          setLoading(true);
          const res = await axios.get(`${process.env.GATSBY_API_BASE_URL_AUTH}/auth/verify_otp_email/${checkToken}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (res) {
            setLoading(false);
            document.getElementById('main').innerHTML =
              "<h2 style='margin-top:50px'>Thank you for verifying your email</h2>";
            setTimeout(window.close, 3000);
          }
        } else {
          setLoading(false);
          localStorage.removeItem('user');
          setIsTokenNullOrValid(false);
        }
      } catch (err) {
        setLoading(false);
        localStorage.removeItem('user');
        setIsTokenNullOrValid(false);
      }
    }
    checkTokenValidity();
    if (location.state) {
      setIsTokenNullOrValid(true);
    }
  }, []);

  return (
    <div className={cx(container, containerSm, signUpContainer)}>
      <div className={cx(formCard)}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {!isTokenNullOrValid && <ForgotPassword />}
            {isTokenNullOrValid && <SetPasswordComp />}
          </>
        )}
      </div>
    </div>
  );
}

export default SetPassword;

export function Head() {
  return <Seo title="Set Password" />;
}
