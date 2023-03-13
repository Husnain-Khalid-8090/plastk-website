/* eslint-disable no-underscore-dangle */
import { Fetch } from '../helpers/fetchWrapper';

const ApplicationService = {
  _url: process.env.GATSBY_API_BASE_URL,
  businessUrl: process.env.GATSBY_API_BASE_URL_BUSINESS,
  freeUserUrl: process.env.GATSBY_API_BASE_URL_FREE,
  auth_login: process.env.GATSBY_BASE_URL,

  async signup(formValues) {
    const res = await Fetch.post(`${this._url}/application/signup`, formValues);
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    const { message } = await res.json();
    throw Error(message ?? 'Something went wrong');
  },
  async businessContact(values) {
    const res = await Fetch.post(`${this.businessUrl}/bpuser/contact-us`, values);
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    const { message } = await res.json();
    throw Error(message ?? 'Something went wrong');
  },
  async createAccount({ values }) {
    const res = await Fetch.post(`${this.freeUserUrl}/free-users/register`, values);
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    const { message } = await res.json();
    throw Error(message ?? 'Something went wrong');
  },
};

export default ApplicationService;
