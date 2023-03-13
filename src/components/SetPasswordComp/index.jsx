import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { clearCookie } from '../../helpers/common';
import embossList from '../../helpers/embossList';
import SetPasswordService from '../../services/setPasswordService';
import Button from '../Button';
import Field from '../Field';
import Form, { useForm } from '../Form';
import Loader from '../Loader';
import Select from '../Select';
import Toast from '../Toast';
import { threeCols } from './SetPasswordComp.styles';

function CreateProfile() {
  const [form] = useForm();
  const [embossOptions, setEmbossOptions] = React.useState([]);

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const getEmbossOptions = (first_name, last_name, middle_name) => {
    const options = embossList(first_name, middle_name, last_name);
    options.forEach((opt, index) => {
      options[index] = { value: opt, label: opt };
    });
    setEmbossOptions(() => options);
  };

  React.useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) {
      const { emboss } = userInfo;
      if (embossOptions.length > 0) {
        form.setFieldsValue({
          emboss: embossOptions.filter(val => val.value === emboss)[0],
        });
      }
    }
  }, [embossOptions]);

  React.useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) {
      const { first_name, last_name, middle_name, email, phone_number } = userInfo;

      setUser(userInfo);
      getEmbossOptions(first_name, last_name, middle_name);

      form.setFieldsValue({
        first_name,
        middle_name,
        last_name,
        email,
        phone_number,
      });

      if (window) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'form_complete',
          enhanced_conversion_data: {
            email,
          },
        });
      }
    } else {
      localStorage.removeItem('user');
      setUser(undefined);
    }
  }, []);

  const handleSubmit = async e => {
    setLoading(true);
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      const res = user
        ? await SetPasswordService.updatePasswordV2(
            token,
            e.email,
            e.password,
            e.first_name,
            e.middle_name,
            e.last_name,
            e.phone_number,
            user.email,
            e.emboss.value,
          )
        : await SetPasswordService.updatePassword(token, e.email, e.password);
      if (res?.success) {
        Toast({ type: 'success', message: res.message });

        const CURRTIME = new Date().toUTCString();
        moengage.accountSignUpSuccess(true);
        moengage.accountSignUpSuccessDate(CURRTIME);

        localStorage.removeItem('user');
        clearCookie('account_plastk_token');
        clearCookie('account_plastk_label');
        clearCookie('account_plastk_status');

        clearCookie('free_plastk_token');
        clearCookie('free_plastk_status');
        clearCookie('free_plastk_is_free');
        clearCookie('plastk_redirect');
        setTimeout(() => {
          window.location.href = `${process.env.GATSBY_API_BASE_URL_ACCOUNT}/`;
        }, 1000);
      }
    } catch (ex) {
      setLoading(false);
      Toast({ type: 'error', message: ex.message });
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <Form
      form={form}
      onSubmit={handleSubmit}
      onTouched={e => {
        if (['first_name', 'last_name', 'middle_name'].includes(Object.keys(e)[0]) && user) {
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
      }}
      onError={() =>
        Toast({
          type: 'error',
          message: 'Kindly resolve the errors to proceed',
        })
      }>
      <h2 className="center no-border">{user ? 'Create Profile' : 'Update Password'}</h2>
      {user ? (
        <>
          <div className={cx(threeCols)}>
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

          <div className={cx(threeCols)}>
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
            {embossOptions.length > 0 && (
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
            )}
          </div>
        </>
      ) : (
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
      )}

      <Form.Item
        type="password"
        label="New password"
        name="password"
        placeholder="New password"
        rules={[{ password: true }, { required: true }]}>
        <Field />
      </Form.Item>
      <Form.Item
        type="password"
        label="Confirm password"
        name="confirm_password"
        placeholder="Confirm password"
        rules={[
          { required: true, message: 'Please Confirm your password again' },
          {
            transform: value => value !== form.getFieldValue('password'),
            message: 'Passwords do not match',
          },
        ]}>
        <Field />
      </Form.Item>

      <Button htmlType="submit" type="pushable" width={210}>
        {user ? 'Create Profile' : 'Update Password'}
      </Button>
    </Form>
  );
}

export default CreateProfile;
