import { css } from 'linaria';

export const appSectionHolder = css`
  @media (min-width: 768px) {
    background: var(--black);
  }
  h2 {
    @media (min-width: 768px) {
      color: var(--white);
    }
  }

  .position-relative {
    position: relative;
  }

  .app-intro-holder {
    > div {
      padding-top: 40px;
      padding-bottom: 25px;

      @media (min-width: 768px) {
        padding-top: 60px;
        padding-bottom: 0;
      }
    }

    h2 {
      color: var(--black);
      @media (min-width: 768px) {
        color: var(--white);
      }
    }
  }
  .intro-text {
    margin-bottom: 10px;
    text-align: center;
    color: var(--black);

    @media (min-width: 768px) {
      color: var(--white);
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 30px;
    }
    br {
      display: none;
      @media (min-width: 992px) {
        display: block;
      }
    }
  }

  .app-end-block {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    visibility: hidden;
    opacity: 0;
    top: 100%;
    width: 100%;
    height: 500px;
    pointer-events: none;

    @media (max-height: 1000px) {
      height: 412px;
    }
    @media (max-height: 767px) {
      height: 300px;
    }
  }
`;

export const appSection = css`
  position: relative;
  width: 100%;
  overflow: hidden;
  @media (min-width: 768px) {
    margin-top: -215px;
  }
  @media (max-height: 1000px) and (min-width: 768px) {
    margin-top: -90px;
  }
  h2 {
    @media (min-width: 768px) {
      color: var(--white);
    }
  }
  h3 {
    font-size: 25px;
    line-height: 30px;
    font-weight: 500;
    @media (min-width: 768px) {
      color: var(--white);
      font-size: 30px;
      line-height: 37px;
      letter-spacing: -2px;
    }
  }
  .app-download-holder {
    width: 260px;
    position: absolute;
    bottom: -95px;
    left: 0;
    @media (max-height: 745px) {
      display: none;
    }
  }

  .mobile-img {
    text-align: center;
    position: relative;
    max-width: 311px;
    margin: 0 auto;
    @media (min-width: 768px) {
      display: none;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -6px;
      right: -6px;
      left: -6px;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
      height: 200px;
    }
    img {
      max-width: 100%;
      display: block;
      width: 100%;
      overflow: hidden;
      border: 6px solid #2b3247;
      border-radius: 30px 30px 0 0;
      border-bottom: none;
    }
  }
  .phone-container {
    position: absolute;
    top: calc(50vh - 290px);
    right: 30px;
    z-index: 3;
    transform: none;
    display: none;

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
    }
    @media (min-width: 1200px) {
      right: auto;
      left: calc(50% - 140px);
    }
    @media (max-height: 745px) {
      top: calc(50vh - 237px);
    }
    &.active {
      position: fixed;
      transform: none;
    }
    &.at-end {
      position: absolute;
      top: auto;
      bottom: -203px;
      transform: none;
    }

    .phone-base {
      height: 549px;
      width: 260px;
      border-radius: 36px;
      mask-size: cover;
      mask-repeat: no-repeat;
      mask-image: url('../../images/phone-base.svg');
      background-color: var(--black);
      position: relative;
    }

    .app-screens {
      position: absolute;
      overflow: hidden;
      left: 50.6%;
      top: 50%;
      width: 93%;
      height: 96%;
      transform: translate(-50%, -50%);
      border-radius: 30px;
    }
    .app-screens-inner,
    .img-holder {
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
    .img-holder {
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
      z-index: 1;
      border-radius: 32px;
      transition: transform 0.4s;
      transform: translateY(0);
      &.active {
        ~ .img-holder {
          z-index: 2;
          transform: translateX(125%);
        }
      }
      &.splash {
        background: linear-gradient(132.01deg, #212535 0%, #181e2d 97.07%);
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-delay: 0.2s !important;
      }
      &.screen-three,
      &.screen-five {
        z-index: 2;
      }
    }
    .logo {
      max-width: 100px;
    }
  }

  //gradient styling
  .phone-gradients-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 36px;
    .phone-color-gradient {
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      height: 375vh;
      background: linear-gradient(
        180deg,
        rgba(170, 225, 93, 0) 0,
        var(--primary) 14%,
        var(--primary) 29%,
        #212535 72%,
        #212535 78%,
        rgba(33, 37, 53, 0) 93%
      );
    }
    .phone-black-gradient {
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.25) 0,
        #000 4%,
        #000 27%,
        #1f1f1f 70%,
        #1f1f1f 87%,
        rgba(31, 31, 31, 0) 94%,
        rgba(31, 31, 31, 0) 99%
      );
    }
  }

  //white shine
  .phone-white-shine-container {
    position: absolute;
    overflow: hidden;
    left: 51%;
    top: 50%;
    width: 95.1%;
    height: 97%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
  }
  .phone-white-shine {
    position: absolute;
    width: 100%;
    height: 200%;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -540px) rotate(-35deg);
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 23%, #fff 25%, #fff 30%, hsla(0, 0%, 100%, 0));
  }
  .phone-bar {
    background: var(--white);
    width: 107px;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: 19px;
    z-index: 9;
    border-radius: 60px;
  }

  //progress bar styling
  .progress-container {
    position: absolute;
    bottom: -30px;
    left: 53.5%;
    width: 70%;
    transform: translateX(-50%);
    @media (max-height: 950px) {
      bottom: -27px;
    }

    .progress-checks {
      width: 100%;
      transform: translateY(5px);
      z-index: 2;
      position: relative;
      display: flex;
      align-items: center;
    }
    .check {
      width: 25%;
      height: 5px;
      margin-left: 4px;
      position: relative;
      border-radius: 50px;
      &:after {
        content: '';
        width: 8px;
        background-color: #000;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
      }
    }
    .app-progress-bar {
      width: 100%;
      height: 5px;
      position: relative;
      overflow: hidden;
      background-color: #373f5a;
    }
    .progress-container-inner {
      display: block;
      height: 100%;
      left: -100%;
      position: absolute;
      top: 0;
      width: 100%;
      background-color: var(--primary);
    }
  }

  //description styling
  .description-container {
    position: relative;
    z-index: 2;
    padding-bottom: 50px;
    @media (min-width: 768px) {
      padding-top: 15vh;
      padding-bottom: 0;
    }
  }
  .description-section {
    padding-bottom: 30px;

    @media (min-width: 768px) {
      color: var(--white);
      height: 100vh;
      opacity: 0.4;
      transition: opacity 0.3s linear 0.3s;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-bottom: 0;
    }
    @media (min-width: 1500px) {
      margin-left: -157px;
    }

    &:last-child {
      padding-bottom: 0;
    }
    .desc-holder {
      max-width: 340px;
      margin: -6px auto 0;
      position: relative;
      text-align: center;
      @media (min-width: 768px) {
        text-align: left;
        margin: 0;
        padding: 1.04167rem;
      }
      @media (min-width: 992px) {
        width: 33.33rem;
        max-width: none;
      }
      @media (min-width: 1200px) {
        width: 25rem;
      }
      @media (min-width: 1500px) {
        width: 33.33rem;
      }
    }
    &.active {
      opacity: 1;
    }
    @media (min-width: 1200px) {
      &:nth-child(2n) {
        justify-content: flex-end;
      }
    }
    @media (min-width: 1500px) {
      &:nth-child(2n) {
        margin-right: -157px;
      }
    }
  }

  #app-end {
    min-height: 500px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;
