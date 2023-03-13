import { Fetch } from '../helpers/fetchWrapper';

const FreeUSerService = {
  freeUserUrl: process.env.GATSBY_API_BASE_URL_FREE,

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

export default FreeUSerService;
