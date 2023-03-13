import { css } from 'linaria';

export const bapVisualBlock = css`
  position: relative;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  background: 0 0;

  @media (min-width: 500px) {
    background: #70bc29;
  }

  @media (min-width: 992px) {
    background: url('https://d2ef97fwq3c8g5.cloudfront.net/web_images/bap-visual-bg2.jpg') no-repeat;
    background-size: cover;
    background-position: 185px 50%;
  }

  @media screen and (min-width: 1200px) {
    background-position: 300px 50%;
  }

  @media screen and (min-width: 1366px) {
    background-position: 350px 50%;
  }

  @media screen and (min-width: 1440px) {
    background-position: 390px 50%;
  }

  @media screen and (min-width: 1680px) {
    background-position: 450px 34%;
  }

  .business-signup-btn {
    display: inline-block;
    background: #0f203a;
    border-radius: 113px;
    text-align: center;
    color: #fff;
    max-width: 200px;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    margin-bottom: 12px;

    @media (min-width: 992px) {
      .business-signup-btn {
        max-width: 230px;
        font-size: 20px;
        line-height: 32px;
        padding: 12px;
        font-weight: 700;
      }
    }
  }

  .visual-bg-img {
    width: 100%;
    min-height: 450px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: 992px) {
      display: none;
    }
  }

  .bap-logo {
    width: 100px;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: 992px) {
      display: none;
    }
  }

  .inner-holder {
    max-width: 350px;
    padding: 155px 0;
    line-height: 25px;
    margin: 0 auto;

    @media (min-width: 500px) {
      padding: 50px 0;
    }

    @media (min-width: 992px) {
      max-width: 729px;
      padding-top: 110px;
      padding-bottom: 50px;
    }
  }

  .text-holder {
    position: relative;
    width: 100%;
    min-height: 430px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media (min-width: 992px) {
      min-height: calc(100vh - 75px);
      width: 65%;
      min-height: 600px;
      text-align: left;

      &:before {
        content: '';
        background: url('https://d2ef97fwq3c8g5.cloudfront.net/web_images/bg-shape.png') no-repeat;
        background-position: 0 50%;
        background-size: cover;
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: -51%;
        right: -145px;
      }
    }

    @media (min-width: 992px) and (min-width: 1200px) {
      .text-holder:before {
        left: -150px;
        right: -160px;
      }
    }

    @media (min-width: 992px) and (min-width: 1400px) {
      .text-holder:before {
        left: calc((100vw - 1160px) / -2);
      }
    }

    @media (min-width: 1680px) {
      .text-holder:before {
        /* left: -120px; */
        right: -160px;
      }
    }
  }

  .title {
    font-size: 16px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 25px;
    display: block;

    @media (min-width: 992px) {
      font-size: 25px;
      line-height: 32px;

      br {
        display: none;
      }
    }
  }

  .logo-heading {
    margin-bottom: 25px;
    font-size: 34px;
    line-height: 40px;
    font-weight: 700;

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      font-size: 36px;
    }
    @media (min-width: 1200px) {
      font-size: 42px;
      line-height: 46px;
    }

    .img {
      display: none;
      flex-shrink: 0;
      width: 100px;
      margin: 0 5px 0 0;

      @media (min-width: 992px) {
        display: block;
      }
    }
  }

  .bap-feature-list {
    display: none;
    gap: 20px;
    margin-bottom: 40px;

    @media (min-width: 992px) {
      display: flex;
      gap: 50px;
    }
  }

  .bap-feature-list .feature-title {
    font-size: 25px;
    line-height: 30px;
    font-weight: 700;
    display: block;
    margin-bottom: 10px;

    @media (min-width: 992px) {
      font-size: 42px;
      line-height: 45px;
    }
  }

  p {
    margin-bottom: 40px;

    @media (min-width: 992px) {
      margin-bottom: 50px;
    }

    &.business-signup-text {
      font-size: 14px;
      font-weight: 300;
      padding-top: 12px;
    }

    a {
      font-weight: 400;
      color: var(--white);
    }
  }
`;

export const holder = css`
  margin-top: -160px;
  background-image: url('../../images/bg-caption-img.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 500px) {
    margin-top: 0;
    background-image: none;
  }
`;
