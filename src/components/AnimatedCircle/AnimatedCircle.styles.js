import { css } from '@linaria/core';

export const sccContentBox = css`
  margin-bottom: 50px;
  @media (min-width: 992px) {
    margin-bottom: 50;
  }
`;

export const contentBox = css`
  max-width: 250px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  z-index: 1;

  @media only screen and (min-width: 992px) {
    max-width: 515px;
  }
  @media (min-width: 992px) {
    margin: 0;
  }

  .canadian-img {
    max-width: 150px;

    @media (min-width: 1200px) {
      max-width: 197px;
    }
  }

  .credit-img {
    position: absolute;
    top: 90px;
    right: 0;
    z-index: 3;
    max-width: 230px;
    animation-name: credit-popup;
    transform: scale(0.8) translate(0);
    animation-duration: 0.5s;
    animation-delay: 3.3s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    @media only screen and (min-width: 992px) {
      top: 131px;
      right: 0;
      max-width: 290px;
      transform: scale(0.8) translate(0);
    }

    @keyframes credit-popup {
      0% {
        transform: scale(0.7) translate(0);
        filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1));
      }
      100% {
        transform: scale(1) translate(32px, 10px);
        filter: drop-shadow(0px 48.9211px 73.3817px rgba(0, 0, 0, 0.1));
      }
    }

    @media only screen and (min-width: 768px) {
      @keyframes credit-popup {
        0% {
          transform: scale(0.7) translate(0);
          filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1));
        }
        100% {
          transform: scale(1) translate(32px, 10px);
          filter: drop-shadow(0px 48.9211px 73.3817px rgba(0, 0, 0, 0.1));
        }
      }
    }
  }

  .card-img {
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 180px;
    transform: translate(-35px, -85px);
    filter: drop-shadow(0px 14px 20px rgba(0, 0, 0, 0.1));
    animation-name: card-popout;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    @keyframes card-popout {
      0% {
        transform: translate(-35px, -95px);
        z-index: -1;
      }
      50% {
        transform: translate(-200px, -95px);
        z-index: -1;
      }
      100% {
        transform: rotate(0deg) translate(-25px, -95px);
        z-index: 3;
      }
    }

    @media only screen and (min-width: 768px) {
      @keyframes card-popout {
        0% {
          transform: translate(-35px, -85px);
          z-index: -1;
        }
        50% {
          transform: translate(-220px, -85px);
          z-index: -1;
        }
        100% {
          transform: rotate(0deg) translate(-105px, -85px);
          z-index: 3;
        }
      }
    }

    @media only screen and (min-width: 992px) {
      max-width: 275px;
      @keyframes card-popout {
        0% {
          transform: translate(-35px, -115px);
          z-index: -1;
        }
        50% {
          transform: translate(-280px, -115px);
          z-index: -1;
        }
        100% {
          transform: rotate(0deg) translate(-105px, -115px);
          z-index: 3;
        }
      }
    }
  }
`;

export const rotatingCircle = css`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  height: 360px;
  border: 20px solid #3b4461;
  border-radius: 100%;
  animation: orbit 3.5s linear infinite;
  z-index: -2;

  @media only screen and (min-width: 768px) {
    display: block;
  }
  @media only screen and (min-width: 992px) {
    width: 450px;
    height: 450px;
    border: 25px solid #3b4461;
    .${sccContentBox} & {
      width: 400px;
      height: 400px;
      border: 20px solid #3b4461;
    }
  }

  @keyframes orbit {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    right: 55px;
    bottom: 30px;
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background: #9b51e0;
  }
  &:after {
    top: 5px;
    left: 99px;
    right: auto;
    bottom: auto;
    width: 10px;
    height: 10px;
    background: #f2c94c;
  }

  .${sccContentBox} & {
    display: block;
    &:before,
    &:after {
      bottom: 14px;
      @media (min-width: 992px) {
        bottom: 22px;
      }
    }
    &:after {
      top: -5px;
      @media (min-width: 992px) {
        top: 1px;
      }
    }
  }
`;

export const medCircle = css`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 280px;
  border: 20px solid #3b4461;
  border-radius: 100%;

  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 992px) {
    width: 330px;
    height: 330px;
    border: 22px solid #3b4461;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 26px;
    right: 30px;
    width: 12px;
    height: 12px;
    border-radius: 50px;
    background: #56ccf2;
  }

  &:after {
    left: 25px;
    bottom: 30px;
    right: auto;
    top: auto;
    width: 14px;
    height: 14px;
    background: #27ae60;
  }

  .${sccContentBox} & {
    display: block;
    &:before,
    &:after {
      top: 15px;
      @media (min-width: 992px) {
        top: 30px;
      }
    }
    &:after {
      bottom: 19px;
    }
  }
`;

export const imgBox = css`
  max-width: 200px;
  margin: 0 auto;

  @media only screen and (min-width: 992px) {
    max-width: 270px;
  }

  .${sccContentBox} & {
    max-width: 400px;
  }
`;
