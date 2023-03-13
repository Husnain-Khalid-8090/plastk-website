import * as React from 'react';
import { cx } from 'linaria';
import Form, { useForm } from '../Form';
import Application from '../../services/applicationService';
import Toast from '../Toast';
import Feild from '../Field';
import Button from '../Button';
import { bapContactForm, btnHolder } from './BapContactForm.styles';
import { container } from '../../styles/common';

function BapContactForm() {
  const [form] = useForm();
  const onSubmit = values => {
    Application.businessContact(values)
      .then(res => {
        Toast({ type: 'success', message: res.message });
      })
      .catch(err => {
        Toast({ type: 'error', message: err.message });
      });
  };
  return (
    <div className={cx(bapContactForm)}>
      <div className={cx(container)}>
        <h2 className="no-border center">Fill Out This Form & We will get in touch!</h2>
        <div className="form-wrap">
          <Form form={form} onSubmit={e => onSubmit(e)}>
            <Form.Item
              type="text"
              label="Business Name"
              name="business_name"
              rules={[
                { required: true, message: 'Business Name is required' },
                {
                  pattern: /^[a-zA-Z0-9\s`!@#$%^&*()_+-=:";'<>,.]*$/,
                  message: 'Enter a valid business name',
                },
                {
                  pattern: /^[a-zA-Z0-9\s`!@#$%^&*()_+-=:";'<>,.]{3,}$/,
                  message: 'business name must be minimum 3 characters',
                },
                {
                  pattern: /^[a-zA-Z0-9\s`!@#$%^&*()_+-=:";'<>,.]{2,100}$/,
                  message: 'business name must be maximum 100 characters',
                },
              ]}>
              <Feild />
            </Form.Item>
            <Form.Item
              type="text"
              label="Business Contact Person"
              name="primary_contact_name"
              rules={[
                { required: true, message: 'Business Contact Person is required' },
                {
                  pattern: /^[a-zA-Z ]*$/,
                  message: 'Business Contact Person Enter a valid Name',
                },
                {
                  pattern: /^[a-zA-Z ]{3,}$/,
                  message: 'Business Contact Person Name must be minimum 3 characters',
                },
                {
                  pattern: /^[a-zA-Z ]{3,40}$/,
                  message: 'Business Contact Person Name must be maximum 40 characters',
                },
              ]}>
              <Feild />
            </Form.Item>
            <Form.Item
              type="text"
              label="Phone Number"
              name="phone_num"
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
              <Feild />
            </Form.Item>
            <Form.Item
              type="email"
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: 'Please enter email address' },
                { email: true, message: 'Please enter a valid email' },
                { max: 40, message: 'Email should be at max 40 characters!' },
              ]}>
              <Feild />
            </Form.Item>
            <Form.Item
              type="text"
              label="Postal Code"
              name="business_postal_code"
              rules={[
                { required: true, message: 'Postal code is required' },
                {
                  pattern: /^[ABCEGHJKLMNPQRSTVXY]\d[ABCEGHJKLMNPQRSTVWXYZ]( )?\d[ABCEGHJKLMNPQRSTVWXYZ]\d$/i,
                  message: 'Postal Code is invalid',
                },
              ]}>
              <Feild />
            </Form.Item>
            <Form.Item
              type="text"
              label="Website"
              name="business_website"
              rules={[
                { required: true, message: 'Postal code is required' },
                {
                  // eslint-disable-next-line no-useless-escape
                  pattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                  message: 'Website URL is invalid',
                },
              ]}>
              <Feild />
            </Form.Item>
            <Form.Item
              type="textarea"
              label="Is there anything else you would like to know about the Plastk Business Accelerator?"
              name="other_info"
              rules={[
                {
                  pattern: /^[a-zA-Z0-9,!-.'+@#$^&/:|{}_";*()_ ]{2,}$/,
                  message: 'Other Information must be minimum 2 characters.',
                },
                {
                  pattern: /^[a-zA-Z0-9,!-.'+@#$^&/:|{}_";*()_ ]{2,40}$/,
                  message: 'Other Information must be maximum 40 characters.',
                },
              ]}>
              <Feild />
            </Form.Item>
            <div className={cx(btnHolder)}>
              <Button type="primary" htmlType="submit" rounded width="200">
                Send Form
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default BapContactForm;
