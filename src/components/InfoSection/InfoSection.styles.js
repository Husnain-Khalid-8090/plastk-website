import { css } from 'linaria';

export const infoSection = css`
  position: relative;
  max-width: 1270px;
  padding: 0 15px;
  margin: 0 auto 40px;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin: 0 auto 80px;
  }

  .mobile-holder {
    width: 250px;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 360px;
      margin: 0;
    }
    @media (min-width: 992px) {
      width: 460px;
    }
    @media (min-width: 1200px) {
      width: 580px;
    }
  }
`;

export const tabsLinks = css`
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  font-size: 16px;
  line-height: 25px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
    margin: 0 0 30px;
  }

  li {
    padding: 0 12px;

    &.active {
      button {
        color: #0f2546;
        border-color: #0f2546;
      }
    }
  }

  button {
    display: inline-block;
    vertical-align: top;
    color: #0f254640;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    padding-bottom: 3px;
    border-width: 0 0 4px;
    border-style: solid;
    border-color: transparent;
    background: none;
    box-shadow: none;

    &:hover {
      color: #0f2546;
      border-color: #0f2546;
    }
  }
`;

export const textSlider = css`
  width: 230px;
  margin: 0 auto 10px;
  text-align: center;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #fff;

  @media (min-width: 576px) {
    width: 250px;
  }
  @media (min-width: 768px) {
    width: 230px;
    font-size: 18px;
    line-height: 26px;
    margin: 0;
    text-align: left;
  }
  @media (min-width: 992px) {
    width: 260px;
    font-size: 20px;
    line-height: 30px;
  }
  @media (min-width: 1200px) {
    width: 340px;
    font-size: 25px;
    line-height: 33px;
    font-weight: 400;
  }
  @media (min-width: 1440px) {
    width: 355px;
    font-size: 28px;
    line-height: 38px;
  }

  .title {
    display: block;
    font-size: 25px;
    line-height: 28px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      font-size: 32px;
      line-height: 36px;
    }
    @media (min-width: 1200px) {
      font-size: 38px;
      line-height: 42px;
    }
  }

  p {
    &:last-child {
      margin: 0;
    }
  }
`;
export const macSlider = css`
  position: relative;
  width: 300px;
  height: 180px;
  padding: 4px 32px 16px;
  margin: 0 auto 30px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url(../../images/macbook-img.png);

  @media (min-width: 576px) {
    width: 466px;
    height: 267px;
    padding: 4px 46px 20px;
  }
  @media (min-width: 768px) {
    width: auto;
    max-width: 720px;
    height: 417px;
    padding: 7px 71px 32px;
    margin: 0;
  }
  @media (min-width: 1200px) {
    max-width: 840px;
    height: 482px;
    padding: 6px 82px 34px;
  }
  @media (min-width: 1440px) {
    max-width: 900px;
    height: 520px;
    margin: 0;
    padding: 5px 87px 40px;
  }

  .slick-list {
    border-radius: 5px 5px 0 0;

    @media (min-width: 768px) {
      border-radius: 16px 16px 0 0;
    }
    @media (min-width: 1200px) {
      border-radius: 20px 20px 0 0;
    }
    @media (min-width: 1440px) {
      border-radius: 26px 26px 0 0;
    }
  }

  .slick-slide {
    display: block !important;
    width: 100%;

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 5px 5px 0 0;

      @media (min-width: 768px) {
        border-radius: 16px 16px 0 0;
      }
      @media (min-width: 1200px) {
        border-radius: 20px 20px 0 0;
      }
      @media (min-width: 1440px) {
        border-radius: 26px 26px 0 0;
      }
    }
  }

  .slick-dots {
    list-style: none;
    margin: 42px 0 0 0;
    padding: 0;
    display: none !important;
    justify-content: center;

    @media (min-width: 768px) {
      display: flex !important;
      margin: 45px 0 0 0;
      justify-content: inherit;
    }
    @media (min-width: 992px) {
      margin: 55px 0 0 10px;
    }
    @media (min-width: 1200px) {
      margin: 60px 0 0 40px;
    }
    @media (min-width: 1440px) {
      margin: 75px 0 0 80px;
    }

    li {
      padding: 0 3px;

      &.slick-active {
        button {
          background: #2687e5;
        }
      }
    }

    button {
      display: block;
      width: 25px;
      height: 8px;
      border-radius: 20px;
      font-size: 0;
      line-height: 0;
      padding: 0;
      outline: none;
      box-shadow: none;
      border: 0;
      background: rgba(38, 135, 229, 0.25);

      @media (min-width: 992px) {
        width: 36px;
        height: 10px;
      }
    }
  }
`;
export const mobileSlider = css`
  position: static;
  width: 100%;
  padding: 0;

  .slick-slide {
    position: relative;
    display: block !important;
    width: 100%;
    height: 234px;

    @media (min-width: 768px) {
      height: 363px;
    }
    @media (min-width: 992px) {
      height: 430px;
    }
    @media (min-width: 1200px) {
      height: 530px;
    }

    img {
      max-width: 100%;
      height: auto;
      margin: 0 auto;

      @media (min-width: 768px) {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
      }

      &.desk-hide {
        display: none;
        @media (min-width: 768px) {
          display: block;
        }
      }
      &.tab-hide {
        display: block;
        @media (min-width: 768px) {
          display: none;
        }
      }

      &.mob-img {
        @media (min-width: 768px) {
          width: 220px;
          top: auto;
          left: 60%;
          bottom: 0;
          transform: translateX(-50%);
        }
        @media (min-width: 992px) {
          width: 260px;
          left: 55%;
        }
        @media (min-width: 1200px) {
          width: 340px;
          left: 50%;
        }
      }
    }
  }

  .slick-dots {
    list-style: none;
    margin: 35px 0 0;
    padding: 0;
    display: none !important;
    justify-content: center;
    position: relative;
    z-index: 2;

    @media (min-width: 768px) {
      display: flex !important;
      position: absolute;
      left: 50%;
      bottom: 26px;
      transform: translateX(-50%);
      margin: 0;
      justify-content: inherit;
    }
    @media (min-width: 992px) {
      bottom: 50px;
    }
    @media (min-width: 1440px) {
      bottom: 50px;
    }

    li {
      padding: 0 3px;

      &.slick-active {
        button {
          background: #2687e5;
        }
      }
    }

    button {
      display: block;
      width: 25px;
      height: 8px;
      border-radius: 20px;
      font-size: 0;
      line-height: 0;
      padding: 0;
      outline: none;
      box-shadow: none;
      border: 0;
      background: rgba(38, 135, 229, 0.25);

      @media (min-width: 992px) {
        width: 36px;
        height: 10px;
      }
    }
  }
`;

export const tabsContent = css`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 40px 20px 0;
  color: #fff;
  background: #022242;
  box-shadow: 0px 7px 54px rgba(0, 0, 0, 0.02);
  border-radius: 40px;

  @media (min-width: 576px) {
    padding: 40px 30px 0;
  }
  @media (min-width: 768px) {
    padding: 50px 40px;
  }
  @media (min-width: 992px) {
    padding: 50px 40px 70px;
  }
  @media (min-width: 1440px) {
    padding: 50px 40px 80px;
  }
`;

export const desktopBlock = css`
  transition: all ease-in-out 0.3s;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const mobileBlock = css`
  transition: all ease-in-out 0.3s;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: -60px 0 -80px;
  }

  .text-slider {
    margin: 0 auto 20px;

    @media (min-width: 768px) {
      width: 300px;
      margin: 0;
    }
    @media (min-width: 992px) {
      width: 340px;
      margin: 0 0 0 30px;
    }
    @media (min-width: 1200px) {
      width: 475px;
      margin: 0 0 0 60px;
    }
  }
`;
