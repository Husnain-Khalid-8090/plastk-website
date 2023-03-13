import { css } from 'linaria';

export const offerSection = css`
  position: relative;
  max-width: 1440px;
  margin: 0 auto 50px;
  z-index: 1;

  @media (min-width: 992px) {
    margin: 0 auto 80px;
  }

  &:before {
    display: none;
    content: '';
    position: absolute;
    top: -80%;
    bottom: 0;
    left: 50%;
    right: 0;
    transform: translateX(-52.5%);
    width: 1500px;
    height: 1500px;
    border-radius: 0;
    background-image: url(../../images/bg-union.svg);
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;

    @media (min-width: 992px) {
      display: block;
    }
  }

  .header {
    text-align: center;
    margin: 0 0 30px;
    box-shadow: none !important;
    background: none !important;

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media (min-width: 1440px) {
      margin: 0 0 30px;
    }
  }

  h2 {
    color: var(--black);
  }

  .container {
    max-width: 1150px;
  }

  .circle-img1,
  .circle-img2 {
    display: none;
    position: absolute;
    left: -40px;
    bottom: 0;
    width: 180px;
    height: auto;

    @media (min-width: 992px) {
      display: block;
    }
    @media (min-width: 1200px) {
      left: 0;
      bottom: 40px;
      width: 220px;
    }
    @media (min-width: 1440px) {
      width: 322px;
      bottom: 0;
    }
  }

  .circle-img2 {
    top: 40px;
    right: 0;
    left: auto;
    bottom: auto;
    width: 150px;

    @media (min-width: 1200px) {
      left: auto;
      bottom: auto;
      width: 200px;
    }
    @media (min-width: 1440px) {
      width: 260px;
      left: auto;
      bottom: auto;
    }
  }
`;

export const offerContent = css`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  max-width: 355px;
  margin: 0 auto;
  position: relative;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(../../images/bg-img-01.png);

  @media (max-width: 767px) {
    background-image: none !important;
  }
  @media (min-width: 576px) {
    max-width: 585px;
  }
  @media (min-width: 768px) {
    display: block;
    max-width: 660px;
    min-height: 630px;
  }
  @media (min-width: 1200px) {
    max-width: 660px;
    min-height: 630px;
  }

  .logo-box {
    width: 130px;
    display: none;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 768px) {
      display: flex;
      top: 55%;
      left: 50%;
    }

    .logo-img {
      display: block;
      width: 50px;
      height: auto;
      margin: 0 auto;

      @media (min-width: 768px) {
        margin: 0 auto 6px;
      }
      @media (min-width: 1440px) {
        margin: 0 auto 10px;
      }
    }

    .text {
      display: none;
      font-size: 20px;
      line-height: 22px;
      font-weight: 800;
      text-align: center;
      color: #022242;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }

  .text-box {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    width: 158px;
    height: 203px;
    font-size: 11px;
    line-height: 15px;
    font-weight: 500;
    padding: 22px 20px 25px;
    margin: 0 2px -10px;
    color: #fff;
    text-align: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 576px) {
      width: 200px;
      height: 257px;
      font-size: 13px;
      line-height: 16px;
      padding: 30px 25px;
      margin: 0 5px -10px;
    }
    @media (min-width: 768px) {
      display: block;
      max-width: 180px;
      width: auto;
      height: auto;
      padding: 0;
      margin: 0;
      color: #75808a;
      font-size: 14px;
      line-height: 18px;
      position: absolute;
      background: none !important;
    }
    @media (min-width: 1200px) {
      max-width: 180px;
      font-size: 14px;
      line-height: 20px;
    }

    &.credit-view {
      position: relative;
      background-image: url(../../images/shape-img-blue.svg);

      @media (min-width: 768px) {
        max-width: 210px;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &.credit-watch {
      background-image: url(../../images/shape-img-purple.svg);

      @media (min-width: 768px) {
        bottom: 80px;
        left: 36px;
      }
    }
    &.credit-education {
      color: #0f2546;
      background-image: url(../../images/shape-img-yellow.svg);

      @media (min-width: 768px) {
        bottom: 106px;
        right: 32px;
        color: #75808a;
      }
    }

    .img {
      margin: 0 auto 10px;
      height: auto;

      @media (min-width: 576px) {
        margin: 0 auto 20px;
      }
      @media (min-width: 768px) {
        position: absolute;
        margin: 0;
        height: inherit;
      }

      &.search-ico {
        width: 25px;

        @media (min-width: 576px) {
          width: 32px;
        }
        @media (min-width: 768px) {
          top: 60px;
          right: -132px;
        }
        @media (min-width: 1200px) {
          top: 60px;
        }
      }
      &.eye-ico {
        width: 30px;

        @media (min-width: 576px) {
          width: 34px;
        }
        @media (min-width: 768px) {
          top: 190px;
          left: -30px;
        }
      }
      &.book-ico {
        width: 30px;

        @media (min-width: 576px) {
          width: 32px;
        }
        @media (min-width: 768px) {
          bottom: 220px;
          right: 160px;
        }
      }
    }

    .title {
      display: block;
      font-size: 16px;
      line-height: 22px;
      font-weight: 700;
      text-transform: capitalize;
      margin-bottom: 5px;

      @media (min-width: 576px) {
        font-size: 18px;
      }
      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 22px;
        font-weight: 800;
        margin-bottom: 10px;
        color: #022242;
      }
    }
  }
`;
