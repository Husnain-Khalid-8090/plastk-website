/* eslint-disable no-unused-vars */
import * as React from 'react';
import { cx } from 'linaria';
import axios from 'axios';
import Form, { useForm } from '../Form';
import Feild from '../Field';
import Button from '../Button';
import Toast from '../Toast';
import { getCookie, clearCookie, setCookie } from '../../helpers/common';
import { createAccountModal } from './CreateAccountModal.styles';
import AuthService from '../../services/authService';
import FreeUserService from '../../services/FreeUserService';
import { moengage } from '../../../utils/moengageEvents';

function CreateAccountModal({ setIsOpen }) {
  const [form] = useForm();
  const [ip, setIp] = React.useState('');
  React.useEffect(() => {
    axios.get('https://api.ipify.org?callback=getIP').then(res => setIp(res.data));
  }, []);
  const onSubmit = e => {
    FreeUserService.createAccount({
      values: {
        email: e.email,
        password: e.password,
        ip: ip || '',
        hutk: getCookie('hubspotutk') || '',
        non_card_sentinel: true,
      },
    })
      .then(res => {
        if (res?.code === 200) {
          Toast({ type: 'success', message: res.message });
          setTimeout(() => {
            window.location.href = `${process.env.GATSBY_API_BASE_URL_ACCOUNT}/plastk-home`;
          }, 3000);
        }
      })
      .catch(err => {
        Toast({ type: 'error', message: err.message });
      });
  };
  return (
    <div className={cx(createAccountModal)}>
      <Form form={form} onSubmit={e => onSubmit(e)}>
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
          type="password"
          label="Create Password"
          name="password"
          rules={[{ password: true }, { required: true }]}>
          <Feild />
        </Form.Item>
        <Form.Item
          type="password"
          label="Confirm Password"
          name="confirm-password"
          rules={[
            { required: true, message: 'Please Confirm your password again' },
            {
              transform: value => value !== form.getFieldValue('password'),
              message: 'passwords do not match',
            },
          ]}>
          <Feild />
        </Form.Item>
        <div className="btn-holder">
          <Button
            type="primary"
            htmlType="submit"
            sm
            width="150"
            onClick={() => {
              moengage.creatAccModalCreateAcc();
            }}>
            Create Account
          </Button>
        </div>
      </Form>
      <span className="text-center">
        Already have an account?{' '}
        <a
          href={process.env.GATSBY_API_BASE_URL_ACCOUNT}
          className="text-primary"
          onClick={() => {
            moengage.creatAccModalLOGIN();
          }}>
          Log in
        </a>
      </span>
    </div>
  );
}

export default CreateAccountModal;
