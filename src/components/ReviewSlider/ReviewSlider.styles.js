import { css } from '@linaria/core';

export const reviewSection = css`
  position: relative;
  width: 100%;
  padding: 0 0 20px;

  @media (min-width: 786px) {
    padding: 0;
  }

  h2 {
    font-size: 30px;
    line-height: 40px;
    letter-spacing: -2px;
    padding: 0;
    margin-bottom: 5px;
    text-align: center;
    color: var(--dark-black);

    @media (min-width: 922px) {
      font-size: 50px;
      line-height: 55px;
      margin-bottom: 35px;
    }
  }

  .reviews-slider {
    position: relative;
    font: 13px/18px Rubik, Arial, sans-serif;
    color: #003049;
    padding-bottom: 60px;

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 20px;
      padding-bottom: 40px;
    }
    @media (min-width: 1200px) {
      font-size: 16px;
      line-height: 22px;
    }

    .slick-next,
    .slick-prev {
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0;
      line-height: 0;
      margin: 0 40px;
      padding: 0;
      width: 33px;
      height: 33px;
      outline: 0;
      box-shadow: none;
      border: 0;
      background: url('../../images/arrow-next-img.svg') no-repeat;
      background-size: 100% auto;
      z-index: 9;

      @media (min-width: 768px) {
        width: 45px;
        height: 46px;
        bottom: -46px;
      }
    }

    .slick-prev {
      margin: 0 -40px;
      background: url('../../images/arrow-prev-img.svg') no-repeat;
      background-size: 100% auto;
    }

    .slick-track {
      padding: 5px 0 30px;

      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        padding: 10px 0 30px;
      }
    }

    .slick-slide {
      position: relative;
      padding: 0 10px;
      margin-bottom: 30px;

      @media (min-width: 768px) {
        padding: 0 5px;
        margin-bottom: 0;
      }

      &.slick-center {
        .wrap {
          opacity: 1;
          padding: 45px 18px;
        }
        .text-box .name {
          margin: 30px 0 0;
        }
        blockquote q {
          max-height: inherit;
        }
      }
    }

    .wrap {
      width: 100%;
      padding: 35px 18px;
      border-radius: 30px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      background: #fff;
      transition: all linear 0.3s;

      @media (min-width: 768px) {
        opacity: 0.5;
      }
    }

    .head {
      width: 100%;
      font-size: 22px;
      line-height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 8px;

      @media (min-width: 768px) {
        margin: 0;
      }
      @media (min-width: 1200px) {
        font-size: 30px;
        line-height: 33px;
      }
    }

    .rating {
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 200px;
        height: auto;
        flex-shrink: 0;
        margin: 0 5px 0 0;

        @media (min-width: 768px) {
          width: 210px;
        }
        @media (min-width: 1200px) {
          width: 250px;
        }
      }

      .text {
        display: block;
        margin: 5px 0 0;
      }
    }

    .text-box {
      width: 100%;

      .name,
      .title {
        display: block;
        font-size: 22px;
        line-height: 26px;
        text-transform: capitalize;
        font-weight: 500;
        margin: 0 0 18px;
        text-align: center;

        @media (min-width: 768px) {
          font-size: 18px;
          line-height: 22px;
        }
        @media (min-width: 1200px) {
          font-size: 20px;
          line-height: 23px;
        }
      }

      .name {
        font-size: 18px;
        line-height: 22px;
        margin: 25px 0 0;
      }
    }

    blockquote {
      overflow: hidden;
      margin: 0;
      width: 100%;

      q {
        display: block;
        width: 100%;
        overflow: hidden;
        transition: all linear 0.3s;

        @media (min-width: 768px) {
          max-height: 85px;
        }
      }
    }

    .wrap .ico-quote {
      display: none;
      float: right;
      width: 36px;
      height: 28px;
      margin-bottom: 5px;
      background: url('../../images/quote-icon.svg') no-repeat;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }
`;
