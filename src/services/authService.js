import { Fetch } from '../helpers/fetchWrapper';

const AuthService = {
  auth_login: process.env.GATSBY_BASE_URL,

  async UserLogin(values) {
    const res = await Fetch.post(`${this.auth_login}/auth/v2/login`, values);
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    const { message } = await res.json();
    throw Error(message ?? 'Something went wrong');
  },
};

export default AuthService;
