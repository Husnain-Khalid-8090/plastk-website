// import { addYears } from 'date-fns';
import { addYears } from 'date-fns';
import { cx } from 'linaria';
import * as React from 'react';

import { moAttr } from '../../../utils/moattr';
import { moengage } from '../../../utils/moengageEvents';
import { CardTypes, SurveyOptions, Title, WhyWantCardOptions } from '../../data/FormData';
import { getDateObject } from '../../helpers/common';
import embossList from '../../helpers/embossList';
import Button from '../Button';
// import DateOfBirthPicker from '../DateOfBirthPicker';
import DateBirthPicker from '../DateOfBirthPicker';
// import { getDateObject } from '../../helpers/common';
import Field from '../Field';
import Form from '../Form';
// import DatePicker from '../DatePicker';
import Icon from '../Icon';
import Select from '../Select';
import Toast from '../Toast';
import { fourCols, subTitle, twoCols } from './SignUpStep1.styles';

function SignUpStep1({ form, setStep, formValues, onChange = () => {} }) {
  const [refresh, setRefresh] = React.useState(false);
  const [embossOptions, setEmbossOptions] = React.useState([]);
  const [dateOfBirth, setDatOfBirth] = React.useState({});

  React.useEffect(() => {
    form.setFieldsValue(
      {
        card_type: { value: '1', label: 'Original Plastk Card' },
        ...formValues,
      },
      true,
    );
  }, []);

  const onSubmit = () => {
    setStep(1);
    moAttr.selectAttr('dob', dateOfBirth);
  };

  const getEmbossOptions = (first_name, last_name, middle_name) => {
    const options = embossList(first_name, middle_name, last_name);
    options.forEach((opt, index) => {
      options[index] = { value: opt, label: opt };
    });
    setEmbossOptions(() => options);
  };

  React.useEffect(() => {
    getEmbossOptions(formValues?.first_name, formValues?.last_name, formValues?.middle_name);
  }, []);

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      initialValues={formValues}
      onTouched={e => {
        if (['first_name', 'last_name', 'middle_name'].includes(Object.keys(e)[0])) {
          form.setFieldsValue({ emboss: { value: '', label: '' } });
          const { first_name, middle_name, last_name, emboss } = form.getFieldsValue();
          const options = embossList(first_name, middle_name, last_name);
          options.forEach((opt, index) => {
            options[index] = { value: opt, label: opt };
          });
          if (options.filter(({ value }) => value === emboss?.value)[0] === undefined) {
            form.setFieldsValue({
              emboss: { value: undefined, label: undefined },
            });
            form.setFieldsError({ emboss: undefined });
          }
          setEmbossOptions(() => options);
        }
        setRefresh(!refresh);
        onChange(e);
      }}
      onError={() =>
        Toast({
          type: 'error',
          message: 'Kindly resolve the errors to proceed',
        })
      }>
      <h2 className="center no-border">Sign Up</h2>

      <span className={cx(subTitle)}>Personal Information</span>

      <Form.Item
        id="dropdown"
        disabled
        options={CardTypes}
        isSearchable
        label="Card Type"
        placeholder="Card Type"
        name="card_type">
        <Select />
      </Form.Item>
      <div className={cx(fourCols)}>
        <div className="title-col">
          <Form.Item
            id="dropdown"
            options={Title}
            isSearchable
            label="Title"
            placeholder="Title"
            name="gender"
            rules={[{ required: true, message: 'Please select gender' }]}>
            <Select />
          </Form.Item>
        </div>
        <div className="name-col">
          <Form.Item
            type="text"
            label="First Name"
            name="first_name"
            placeholder="First Name"
            rules={[
              { required: true, message: 'Please enter first name' },
              {
                pattern: /^[a-zA-Z\s]*$/,
                message: 'First name should be alphabets!',
              },
              {
                pattern: /^[a-zA-Z_ ]{2,}$/,
                message: 'First Name must be minimum 2 characters.',
              },
              {
                pattern: /^[a-zA-Z_ ]{2,40}$/,
                message: 'First Name must be maximum 40 characters.',
              },
            ]}>
            <Field />
          </Form.Item>
        </div>
        <div className="name-col">
          <Form.Item
            type="text"
            label="Middle Name"
            name="middle_name"
            placeholder="Middle Name"
            rules={[
              {
                pattern: /^[a-zA-Z\s]*$/,
                message: 'Middle name should be alphabets!',
              },
              {
                pattern: /^[a-zA-Z_ ]{2,}$/,
                message: 'Middle Name must be minimum 2 characters.',
              },
              {
                pattern: /^[a-zA-Z_ ]{2,40}$/,
                message: 'Middle Name must be maximum 40 characters.',
              },
            ]}>
            <Field />
          </Form.Item>
        </div>
        <div className="name-col">
          <Form.Item
            type="text"
            label="Last Name"
            name="last_name"
            placeholder="Last Name"
            rules={[
              { required: true, message: 'Please input your last name' },
              {
                pattern: /^[a-zA-Z\s]*$/,
                message: 'Last name should be alphabets!',
              },
              {
                pattern: /^[a-zA-Z_ ]{2,}$/,
                message: 'Last Name must be minimum 2 characters.',
              },
              {
                pattern: /^[a-zA-Z_ ]{2,40}$/,
                message: 'Last Name must be maximum 40 characters.',
              },
            ]}>
            <Field />
          </Form.Item>
        </div>
        <div className="emboss-col">
          <Form.Item
            id="dropdown"
            options={embossOptions}
            isSearchable
            name="emboss"
            label="Emboss"
            placeholder="Select Emboss Name"
            rules={[
              {
                required: true,
                message: 'Name that should be on the card should be selected',
              },
            ]}>
            <Select />
          </Form.Item>
        </div>
      </div>

      <div className={cx(twoCols)}>
        <Form.Item
          type="email"
          label="Email"
          name="email"
          placeholder="Email"
          rules={[
            { required: true, message: 'Please enter email address' },
            { email: true, message: 'Please enter a valid email' },
            { max: 40, message: 'Email should be at max 40 characters!' },
          ]}>
          <Field />
        </Form.Item>
        <Form.Item
          type="text"
          label="Phone Number"
          name="phone_number"
          placeholder="(123) 345-6789"
          rules={[
            { required: true, message: 'Please input your phone number!' },
            {
              pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
              message: 'Phone number should be 10 digits!',
            },
            {
              changeRegex: 'phone_number',
            },
          ]}>
          <Field />
        </Form.Item>
        {/* <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[
            { required: true, message: 'Please select your date of birth' },
            {
              transform: value => {
                if (getDateObject(value).getTime() > addYears(getDateObject(), -18).getTime()) {
                  return true;
                }
                return false;
              },
              message: 'You must be 18 years or older to use this service',
            },
            {
              transform: value => {
                if (getDateObject(value).getTime() < addYears(getDateObject(), -150).getTime()) {
                  return true;
                }
                return false;
              },
              message: 'You must be 150 years or younger to use this service',
            },
          ]}>
          <DatePicker />
        </Form.Item> */}
      </div>
      <Form.Item
        name="dob"
        label="Date of Birth"
        rules={[
          { required: true, message: 'Please select your date of birth' },
          {
            transform: value => {
              if (getDateObject(value).getTime() > addYears(getDateObject(), -18).getTime()) {
                return true;
              }
              return false;
            },
            message: 'You must be 18 years or older to use this service',
          },
          {
            transform: value => {
              if (getDateObject(value).getTime() < addYears(getDateObject(), -122).getTime()) {
                return true;
              }
              return false;
            },
            message: 'You must be 122 years or younger to use this service',
          },
        ]}>
        <DateBirthPicker name="dob" onSetDateOfBirth={setDatOfBirth} />
      </Form.Item>
      <div className={cx(twoCols)}>
        <Form.Item
          type="text"
          labelIcon={
            <Icon
              size="14px"
              showTooltip
              tooltipWidth={150}
              toolTipContent="An SIN is optional but can help us get your file quickly."
              iconName="help_outline"
            />
          }
          label="Social insurance number"
          name="sin"
          placeholder="111-111-111"
          rules={[
            {
              pattern: /^\d{3}-\d{3}-\d{3}$/,
              message: 'Social Insurance Number must be 9 characters long!',
            },
            {
              changeRegex: 'sin',
            },
          ]}>
          <Field />
        </Form.Item>
        <Form.Item
          id="dropdown"
          options={WhyWantCardOptions}
          isSearchable
          name="why_do_you_want_the_card"
          label="Why Do You Want The Card"
          placeholder="Why Do You Want The Card?"
          rules={[{ required: true, message: 'Please select an option!' }]}>
          <Select />
        </Form.Item>
      </div>
      <Form.Item
        id="dropdown"
        menuPlacement="top"
        options={SurveyOptions}
        isSearchable
        name="how_did_you_hear_about_us"
        label="How Did You Hear About Us?"
        placeholder="How Did You Hear About Us?">
        <Select />
      </Form.Item>
      {form.getFieldValue('how_did_you_hear_about_us')?.value?.toLowerCase() === 'other' && (
        <Form.Item
          name="other"
          label="Other Source"
          rules={[
            {
              pattern: /^[a-zA-Z0-9,!-.'+@#$^&/:|{}_";*()_ ]{2,}$/,
              message: 'Other Source must be minimum 2 characters.',
            },
            {
              pattern: /^[a-zA-Z0-9,!-.'+@#$^&/:|{}_";*()_ ]{2,40}$/,
              message: 'Other Source must be maximum 40 characters.',
            },
          ]}>
          <Field />
        </Form.Item>
      )}

      <Button htmlType="submit" type="pushable" width={210} onClick={() => moengage.signUpNext()}>
        Next
      </Button>
    </Form>
  );
}

export default SignUpStep1;
