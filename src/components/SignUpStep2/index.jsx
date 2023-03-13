/* eslint-disable prettier/prettier */
import { cx } from 'linaria';
import * as React from 'react';
import Form from '../Form';
import Select from '../Select';
import { subTitle, twoCols } from '../SignUpStep1/SignUpStep1.styles';
import Icon from '../Icon';
import Toast from '../Toast';
import { JD, industries, employment_status } from '../../data/FormData';
import Field from '../Field';
import GoogleAutoComplete from '../GoogleAutoComplete';
import Button from '../Button';
import { headingHolder } from './SignUpStep2.styles';
import ViewAgreement from '../ViewAgreement';
import { Error } from '../Field/Field.styles';
import { moengage } from '../../../utils/moengageEvents';

function SignUpStep2({
  form,
  onSubmit,
  onChange,
  setStep,
  formValues,
  fetchReferralCodesSignUp,
  referredBy,
  referralNotValid,
}) {
  const [showEmploymentFields, setShowEmploymentFields] = React.useState(false);
  const [showSchoolNameField, setShowSchoolNameField] = React.useState(false);
  const [industrySelectedState, setIndustrySelectedState] = React.useState([]);
  const [jobDescription, setJobDescription] = React.useState([]);
  const provinceOptions = [
    { value: 'AB', label: 'Alberta' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NB', label: 'New Brunswick' },
    { value: 'NL', label: 'Newfoundland and Labrador' },
    { value: 'NS', label: 'Northwest Territories' },
    { value: 'NT', label: 'Nova Scotia' },
    { value: 'NU', label: 'Nunavut' },
    { value: 'ON', label: 'Ontario' },
    { value: 'PE', label: 'Prince Edward Island' },
    { value: 'SK', label: 'Saskatchewan' },
    { value: 'YT', label: 'Yukon' },
  ];

  const init = () => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById('google-places-autocomplete-input'),
      {
        types: ['address'],
        componentRestrictions: { country: 'ca' },
      },
    );

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const state = {
        street_address: '',
        suite_number: '',
        city: '',
        province: '',
        postal_code: '',
      };
      for (let i = 0; i < place.address_components.length; i += 1) {
        for (let j = 0; j < place.address_components[i].types.length; j += 1) {
          if (place.address_components[i].types[j] === 'postal_code') {
            state.postal_code = place.address_components[i].long_name.split(' ').join('');
          } else if (place.address_components[i].types[j] === 'locality') {
            state.city = place.address_components[i].long_name;
          } else if (place.address_components[i].types[j] === 'administrative_area_level_1') {
            state.province = place.address_components[i].short_name;
          } else if (place.address_components[i].types[j] === 'street_number') {
            state.suite_number = '';
            state.street_address += `${place.address_components[i].long_name} `;
          } else if (place.address_components[i].types[j] === 'route') {
            state.street_address += place.address_components[i].long_name;
          }
        }
      }
      state.street_address = place.formatted_address;
      const { street_address, suite_number, city, province, postal_code } = state;
      form.setFieldsValue({
        street_address,
        suite_number,
        city,
        province: { value: province, label: provinceOptions.filter(({ value }) => value === province)[0]?.label },
        postal_code,
      });
    });
  };

  React.useEffect(() => {
    form.setFieldsValue(
      {
        ...formValues,
        referred_by: referredBy,
      },
      true,
    );
    init();
    return () => {
      if (document.getElementById('google-places-autocomplete-input'))
        window?.google?.maps?.event?.clearInstanceListeners?.(
          document.getElementById('google-places-autocomplete-input'),
        );
    };
  }, []);

  React.useEffect(() => {
    if (
      formValues?.employment_status?.value === 'Employed' ||
      formValues?.employment_status?.value === 'Self-Employed'
    ) {
      setShowEmploymentFields(true);
    } else {
      setShowEmploymentFields(false);
    }
    if (formValues?.employment_status?.value === 'Student') {
      setShowSchoolNameField(true);
    } else {
      setShowSchoolNameField(false);
    }
  }, [formValues]);

  const employment_year = React.useMemo(
    () => Array.from(new Array(50), (_, i) => ({ value: i + 1, label: i + 1 })),
    [],
  );
  const employment_month = React.useMemo(
    () => Array.from(new Array(11), (_, i) => ({ value: i + 1, label: i + 1 })),
    [],
  );

  const onBackClick = () => {
    moengage.signUpGoBack();
    setStep(0);
  };

  const onFieldChange = e => {
    if (e.referred_by) {
      fetchReferralCodesSignUp(e.referred_by);
    }

    if (e) {
      form.setFieldsError(__ => ({ ...__, province: 'fake error' }));
      const keys = Object.keys(e);
      if (keys[0] === 'employment_status') {
        if (e.employment_status.value === 'Employed' || e.employment_status.value === 'Self-Employed') {
          setShowEmploymentFields(true);
          form.setFieldsValue({
            job_description: { value: '', label: '' },
            industry: { value: '', label: '' },
            employment_month: { value: '', label: '' },
            employment_year: { value: '', label: '' },
            current_employer: '',
          });
          form.setFieldsError({
            job_description: undefined,
            industry: undefined,
            employment_month: undefined,
            employment_year: undefined,
            current_employer: undefined,
          });
        } else {
          setShowEmploymentFields(false);
        }

        if (e.employment_status.value === 'Student') {
          setShowSchoolNameField(true);
        } else {
          setShowSchoolNameField(false);
        }
      } else if (keys[0] === 'industry') {
        const industrySelected = e.industry.value;

        if (industrySelected !== industrySelectedState) {
          form.setFieldsValue({ job_description: { value: '', label: '' } });
          form.setFieldsError({
            job_description: undefined,
          });
        }

        const relevantJDs = JD[industrySelected];

        const selectedJDs = [];
        relevantJDs.forEach(jd => {
          selectedJDs.push({ value: jd, label: jd });
        });

        setIndustrySelectedState(industrySelected);
        setJobDescription(selectedJDs);
      }
    }

    onChange(e);
  };

  const onCustomStreetAddressChange = customStreetAddr => {
    form.setFieldsValue({ street_address: customStreetAddr });
    onChange({ street_address: customStreetAddr });
  };

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      initialValues={formValues}
      onTouched={onFieldChange}
      onError={() => {
        Toast({
          type: 'error',
          message: 'Kindly resolve the errors to proceed',
        });
      }}>
      <div className={headingHolder}>
        <Button width={100} sm onClick={onBackClick}>
          Go back
        </Button>
        <h2 className="center no-border">Sign Up</h2>
      </div>
      <span className={cx(subTitle)}>Address</span>

      <Form.Item
        type="text"
        label="Street Address"
        labelIcon={
          <Icon
            size="1rem"
            tooltipWidth={120}
            showTooltip
            toolTipContent="Enter your street address"
            iconName="help_outline"
          />
        }
        name="street_address"
        placeholder="Street Address"
        id="google-places-autocomplete-input"
        rules={[{ required: true, message: 'Street Address is required' }]}>
        <GoogleAutoComplete
          customStreetAddress={formValues.street_address}
          onCustomStreetAddressChange={onCustomStreetAddressChange}
        />
      </Form.Item>
      <div className={cx(twoCols)}>
        <Form.Item
          type="text"
          label="Suite Number"
          name="suite_number"
          placeholder="Suite Number"
          rules={[
            {
              pattern: /^[a-zA-Z0-9-.,_ ]{0,46}$/,
              message: 'Suit number should be at max 64 characters!',
            },
          ]}>
          <Field />
        </Form.Item>

        <Form.Item
          type="text"
          label="City"
          name="city"
          placeholder="City"
          rules={[
            { required: true, message: 'City is required' },
            {
              transform: value => !(String(value).length > 2 && String(value).length < 50),
              message: 'City should be between 3 to 50 characters!',
            },
          ]}>
          <Field />
        </Form.Item>

        <Form.Item
          options={provinceOptions}
          isSearchable
          label="Province"
          name="province"
          placeholder="Province"
          rules={[
            { required: true, message: 'Province is required' },
            {
              transform: value => {
                if (value === 'QC') return true;
                return false;
              },
              message: 'Plastk Secured Credit Card service is not available in Quebec at this time',
            },
          ]}>
          <Select />
        </Form.Item>
        <Form.Item
          type="text"
          label="Postal Code"
          name="postal_code"
          placeholder="Postal Code"
          max
          rules={[
            { required: true, message: 'Postal code is required' },
            {
              changeRegex: 'postal_code',
            },
          ]}>
          <Field />
        </Form.Item>
      </div>
      <span className={cx(subTitle)}>Employment Information</span>
      <Form.Item
        options={employment_status}
        isSearchable
        label="Employment Status"
        name="employment_status"
        placeholder="Employment Status"
        rules={[{ required: true, message: 'Employment Status is Required' }]}>
        <Select />
      </Form.Item>

      {showEmploymentFields ? (
        <>
          <div className={cx(twoCols)}>
            <Form.Item
              options={industries}
              isSearchable
              label="Industry"
              name="industry"
              placeholder="Industry"
              rules={[
                { required: true, message: 'Industry is Required' },
                {
                  transform: value => !value?.length,
                  message: 'Please select an industry',
                },
              ]}>
              <Select
                rules={[
                  { required: true, message: 'Industry is Required' },
                  {
                    transform: value => !value?.length,
                    message: 'Please select an industry',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              options={jobDescription}
              label="Job Description"
              name="job_description"
              placeholder="Job Description"
              rules={[
                { required: true, message: 'Job Description is required' },
                {
                  transform: value => !value?.length,
                  message: 'Please select Job Description',
                },
              ]}>
              <Select
                rules={[
                  { required: true, message: 'Job Description is required' },
                  {
                    transform: value => !value?.length,
                    message: 'Please select Job Description',
                  },
                ]}
              />
            </Form.Item>
          </div>
          <Form.Item
            label="Current Employer"
            name="current_employer"
            placeholder="Current Employer"
            rules={[
              { required: true, message: 'Current Employer is required' },
              {
                pattern: /^[a-zA-Z\s]*$/,
                message: 'Please enter alphabets only',
              },
              {
                pattern: /^[a-zA-Z_ ]{2,}$/,
                message: 'Current Employer must be minimum 2 characters.',
              },
              {
                pattern: /^[a-zA-Z_ ]{2,40}$/,
                message: 'Current Employer must be maximum 40 characters.',
              },
            ]}>
            <Field />
          </Form.Item>
          <div className={cx(twoCols)}>
            <Form.Item
              options={employment_year}
              isSearchable
              label="Years (Optional)"
              name="employment_year"
              placeholder="Years">
              <Select />
            </Form.Item>
            <Form.Item
              options={employment_month}
              isSearchable
              label="Months (Optional)"
              name="employment_month"
              placeholder="Months">
              <Select />
            </Form.Item>
          </div>
        </>
      ) : null}

      {showSchoolNameField ? (
        <Form.Item
          label="School Name"
          name="school_name"
          placeholder="Enter School Name"
          rules={[
            {
              pattern: /^[a-zA-Z0-9,!-.'+@#$^&/:|{}_";*()_ ]{3,}$/,
              message: 'School Name must be minimum 3 characters.',
            },
            {
              pattern: /^[a-zA-Z0-9,!-.'+@#$^&/:|{}_";*()_ ]{3,80}$/,
              message: 'School Name must be maximum 80 characters.',
            },
          ]}>
          <Field />
        </Form.Item>
      ) : null}

      <span className={cx(subTitle)}>Financial Information</span>

      <Form.Item
        type="number"
        name="credit_limit"
        labelIcon={
          <Icon
            size="1rem"
            showTooltip
            tooltipWidth={300}
            toolTipContent="You requested credit limit what you are required to submit as a security deposit to get a secured credit card"
            iconName="help_outline"
          />
        }
        label="Credit Limit"
        placeholder="Requested Credit Limit"
        rules={[
          {
            required: true,
            message: 'Please enter your credit limit',
          },
          { min: 300, message: 'Minimum credit limit is $300' },
          { max: 10000, message: 'Maximum credit Limit is $10,000' },
          { pattern: /^\d+$/, message: 'Only Whole Numbers Are Allowed' },
        ]}>
        <Field />
      </Form.Item>
      <div className={cx(twoCols)}>
        <Form.Item
          type="number"
          name="annual_salary_before_tax"
          labelIcon={
            <Icon
              size="1rem"
              showTooltip
              tooltipWidth={200}
              toolTipContent="We'll use this to give you more accurate financial suggestions"
              iconName="help_outline"
            />
          }
          label="Annual Income Before Taxes"
          placeholder="Annual Income Before Taxes"
          rules={[
            {
              required: true,
              message: 'Please Specify Annual Salary Before Taxes',
            },
            {
              pattern: /^\d+$/,
              message: 'Only Whole Numbers Are Allowed without decimal',
            },
            {
              pattern: /^.{0,20}$/i,
              message: 'Maximum Character Length is 20',
            },
          ]}>
          <Field />
        </Form.Item>

        <Form.Item
          type="number"
          name="other_house_income"
          label="Other Household Income Before Taxes"
          placeholder="Other Household Income Before Taxes"
          rules={[
            { min: 1, message: 'Please enter a positive value' },
            {
              pattern: /^\d+$/,
              message: 'Only Whole Numbers Are Allowed without decimal',
            },
            {
              pattern: /^.{0,20}$/i,
              message: 'Maximum Character Length is 20',
            },
          ]}>
          <Field />
        </Form.Item>
      </div>
      <div className={cx(twoCols)}>
        <Form.Item
          options={[
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
          ]}
          isSearchable
          label="Mortgage"
          name="mortgage"
          placeholder="Mortgage">
          <Select />
        </Form.Item>

        <Form.Item
          type="number"
          name="rent_on_mortgage"
          label="Monthly Rent/Mortgage (Optional)"
          placeholder="Monthly Rent/Mortgage"
          rules={[
            { min: 1, message: 'Please enter a positive value' },
            {
              pattern: /^\d+$/,
              message: 'Only Whole Numbers Are Allowed without decimal',
            },
            {
              pattern: /^.{0,20}$/i,
              message: 'Maximum Character Length is 20',
            },
          ]}>
          <Field />
        </Form.Item>
      </div>

      {referredBy && (
        <>
          <Form.Item
            type="text"
            name="referred_by"
            label="Referral Code"
            placeholder="Referral Code"
            rules={[
              {
                pattern: /^.{0,8}$/i,
                message: 'Maximum Character Length is 8',
              },
            ]}>
            <Field />
          </Form.Item>
          {referralNotValid && (
            <Error>
              Your referral code is not valid! You can still continue with your application, but you will not qualify
              for referral program.
            </Error>
          )}
        </>
      )}

      {!referredBy && (
        <>
          <Form.Item
            type="text"
            name="referred_by"
            label="Referral Code"
            placeholder="Referral Code"
            rules={[
              {
                pattern: /^.{0,8}$/i,
                message: 'Maximum Character Length is 8',
              },
            ]}>
            <Field />
          </Form.Item>
          {referralNotValid && (
            <Error>
              Your referral code is not valid! You can still continue with your application, but you will not qualify
              for referral program.
            </Error>
          )}
        </>
      )}

      <ViewAgreement />

      <Button htmlType="submit" type="pushable" width={250} onClick={() => moengage.signUpSubmit()}>
        Submit Application
      </Button>
    </Form>
  );
}

export default SignUpStep2;
