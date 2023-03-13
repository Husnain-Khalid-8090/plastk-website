/* eslint-disable no-underscore-dangle */
import { Fetch } from '../helpers/fetchWrapper';

const SetPasswordService = {
  _url: process.env.GATSBY_API_BASE_URL,

  async forgetPassword(email) {
    const res = await Fetch.post(`${this._url}/auth/forget_password`, {
      email,
    });
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    const { message } = await res.json();
    throw Error(message ?? 'Something went wrong');
  },
  async updatePassword(token, email, password) {
    const res = await Fetch.post(`${this._url}/auth/reset_password`, {
      token,
      email,
      password,
    });

    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    const { message } = await res.json();
    throw Error(message ?? 'Something went wrong');
  },

  async updatePasswordV2(token, email, password, first_name, middle_name, last_name, phone_number, prev_email, emboss) {
    const res = await Fetch.post(`${this._url}/auth/v2/reset_password`, {
      token,
      email,
      password,
      first_name,
      middle_name,
      last_name,
      phone_number,
      prev_email,
      emboss,
    });

    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    const { message } = await res.json();
    throw Error(message ?? 'Something went wrong');
  },
};

export default SetPasswordService;
