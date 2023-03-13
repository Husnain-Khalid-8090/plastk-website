import { css } from 'linaria';

export const bapContactForm = css`
  position: relative;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    padding-bottom: 80px;
  }

  h2 {
    font-size: 28px;
    line-height: 32px;
    font-weight: 500;
    color: var(--dark-black1);
    margin-bottom: 30px;
    padding: 0 10px;

    @media (min-width: 768px) {
      font-size: 33px;
      line-height: 40px;
      padding: 0;
    }
    @media (min-width: 992px) {
      font-size: 40px;
      line-height: 45px;
      margin-bottom: 50px;
    }
  }

  .form-wrap {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
    padding: 50px 25px 40px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    background: var(--white);

    @media (min-width: 768px) {
      padding: 50px;
    }
    @media (min-width: 992px) {
      padding: 75px 85px;
      max-width: 800px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      background: url('https://d2ef97fwq3c8g5.cloudfront.net/web_images/contact-us.png') no-repeat;
      background-size: cover;
      width: 100px;
      height: 100px;

      @media (min-width: 992px) {
        width: 168px;
        height: 168px;
        background-size: auto;
      }
    }
  }
`;

export const btnHolder = css`
  width: 100%;
  padding-top: 10px;
  text-align: center;
`;
