import { css } from 'linaria';

export const benefitSection = css`
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #75808a;
  margin-bottom: 50px;

  .holder {
    max-width: 400px;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: 600px;
    }
  }

  .subtitle {
    display: block;
    font-weight: 500;
    margin-bottom: 15px;

    @media (min-width: 768px) {
      margin-bottom: 25px;
    }
  }

  h2 {
    display: block;
    font-size: 25px;
    line-height: 32px;
    font-weight: 700;
    color: #022242;
    margin: 0 0 20px;

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 38px;
    }
    @media (min-width: 992px) {
      font-size: 38px;
      line-height: 42px;
      margin: 0 0 25px;
    }
  }

  .btn-blue {
    margin: 0 auto 50px;
    max-width: 200px;
    display: block;
    @media (min-width: 768px) {
      margin: 0 auto 75px;
      max-width: 300px;
    }
  }
`;
