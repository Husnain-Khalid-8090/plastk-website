import * as React from 'react';

import SetPasswordService from '../../services/setPasswordService';
import Button from '../Button';
import Field from '../Field';
import Form, { useForm } from '../Form';
import Toast from '../Toast';

function ForgotPassword() {
  const [form] = useForm();

  const handleSubmit = async e => {
    try {
      const res = await SetPasswordService.forgetPassword(e.email);
      if (res?.success) {
        Toast({ type: 'success', message: res.message });
      }
    } catch (ex) {
      Toast({ type: 'error', message: ex.message });
    }
  };

  return (
    <Form
      form={form}
      onSubmit={handleSubmit}
      onError={() =>
        Toast({
          type: 'error',
          message: 'Kindly resolve the errors to proceed',
        })
      }>
      <h2 className="center no-border">Forgot Password</h2>
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
      <Button type="pushable" htmlType="submit" width={210}>
        Submit
      </Button>
    </Form>
  );
}

export default ForgotPassword;
