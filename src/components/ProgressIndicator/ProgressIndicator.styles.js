import { css } from '@linaria/core';

export const progressHolder = css`
  position: relative;

  .progress-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 274px;
    min-height: 290px;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: 550px;
      min-height: 585px;
    }

    @media (min-width: 1200px) {
      max-width: 646px;
      min-height: 685px;
    }

    .circle-holder {
      position: relative;
      max-width: 250px;

      @media (min-width: 768px) {
        max-width: 266px;
        margin: -20px 50px 0 0;
      }
      @media (min-width: 1200px) {
        max-width: 306px;
      }
    }
    img {
      max-width: 100%;
      height: auto;
    }
    #totalScore {
      font-size: 40px;
      line-height: 45px;
      color: var(--white);
      position: absolute;
      top: 104px;
      left: 88px;
      /* transform: translate(-50%, -50%); */

      @media (min-width: 768px) {
        top: 112px;
        left: 97px;
      }
      @media (min-width: 1200px) {
        font-size: 50px;
        line-height: 55px;
        top: 128px;
        left: 108px;
      }
    }

    .circle {
      transition: transform 2s ease 0.5s;
      position: absolute;
      top: 50px;
      left: 50px;
      width: 150px;
      height: 150px;
      background: linear-gradient(301.24deg, #ffa000 15.09%, #fecf31 83.57%);
      border-radius: 100%;
      transform: rotate(-206deg);

      @media (min-width: 768px) {
        top: 58px;
        left: 58px;
        width: 150px;
        height: 150px;
      }
      @media (min-width: 1200px) {
        top: 62px;
        left: 61px;
        width: 183px;
        height: 183px;
      }

      &:after {
        content: '';
        top: 45px;
        right: -10px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 15px solid #ffa100;
        width: 0;
        height: 0;
        position: absolute;
        z-index: -1;
        transform: rotate(-14deg);

        @media (min-width: 768px) {
          top: 66px;
          right: -15px;
          border-top-width: 15px;
          border-bottom-width: 15px;
          border-left-width: 20px;
          transform: rotate(3deg);
        }
        @media (min-width: 1200px) {
          right: -20px;
          border-top-width: 20px;
          border-bottom-width: 20px;
          border-left-width: 30px;
          transform: rotate(-6deg);
        }
      }
    }
    .gradient-progress-bar {
      position: relative;
    }

    .progress-pointer {
      transition: transform 2s ease 0.5s;
      content: '';
      position: absolute;
      top: 13px;
      left: 26px;
      right: 29px;
      bottom: -7px;
      border: 11px solid transparent;
      border-radius: 100%;
      transform: rotate(0deg);

      @media (min-width: 768px) {
        top: 20px;
        left: 11px;
        right: 9px;
        border-width: 16px;
      }
      @media (min-width: 1200px) {
        top: 20px;
        left: 18px;
        right: 19px;
      }

      &:before {
        content: '';
        position: absolute;
        bottom: 27px;
        left: -5px;
        width: 20px;
        height: 20px;
        background: #55e19a;
        border: 3px solid var(--white);
        border-radius: 100%;
        z-index: 2;

        @media (min-width: 768px) {
          bottom: 38px;
          left: -6px;
          width: 30px;
          height: 30px;
          border: 5px solid var(--white);
        }
      }
    }

    .numbers-holder {
      font-size: 16px;

      @media (min-width: 768px) {
        font-size: 23px;
      }
      li {
        position: absolute;
        &:first-child {
          bottom: 24px;
          left: -2px;
          color: #cf3e26;
          transform: rotate(-123.93deg);

          @media (min-width: 768px) {
            bottom: 32px;
            left: -4px;
          }
        }
        &:nth-child(2) {
          top: 12px;
          left: 21px;
          color: #ebb967;
          transform: rotate(-40.26deg);

          @media (min-width: 768px) {
            top: 24px;
            left: 29px;
          }
        }
        &:nth-child(3) {
          top: -10px;
          left: 70px;
          color: #ebee75;
          transform: rotate(-12.89deg);

          @media (min-width: 768px) {
            left: 106px;
          }
        }
        &:nth-child(4) {
          top: 19px;
          right: 16px;
          color: #95f89d;
          transform: rotate(45deg);

          @media (min-width: 768px) {
            top: 24px;
            right: 29px;
          }
        }
        &:last-child {
          bottom: 11px;
          right: 5px;
          color: #95f89d;
          transform: rotate(-48.85deg);

          @media (min-width: 768px) {
            right: 19px;
          }
        }
      }
    }

    .lines-holder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      img {
        max-width: 100%;
        height: auto;
      }

      .circle-lines {
        display: none;

        @media (min-width: 576px) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (min-width: 768px) {
          display: block;
          top: 0;
          left: 0;
        }

        @media (min-width: 1200px) {
          top: 0;
          left: 0;
        }
      }
    }

    &.rotate-active {
      .circle {
        transform: rotate(0deg);
        animation: circle-glow 2s infinite;
        animation-delay: 1s;
        animation-direction: alternate;
      }
      .progress-pointer {
        transform: rotate(206deg);
      }
    }
  }
`;
