import { css } from 'linaria';

export const bapWorkingBlock = css`
  position: relative;
  margin-bottom: 50px;

  @media (min-width: 992px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1200px) {
    min-height: 650px;
  }

  .img-holder {
    max-width: 600px;
    margin: 0 auto 40px;

    @media (min-width: 992px) {
      max-width: 800px;
      flex-shrink: 0;
      position: absolute;
      top: 138px;
      right: -410px;
      margin: 0;
    }

    @media (min-width: 1200px) {
      top: 108px;
      max-width: 900px;
      right: -300px;
    }
    @media (min-width: 1300px) {
      right: -205px;
    }
    @media (min-width: 1500px) {
      max-width: 813px;
    }
  }

  h2 {
    margin-bottom: 30px;
    text-align: center;
    color: var(--dark-black);

    @media (min-width: 992px) {
      margin-bottom: 50px;
      text-align: left;
    }
  }
`;

export const workingStepList = css`
  max-width: 300px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  font-size: 16px;
  line-height: 25px;
  color: var(--dark-black);
  counter-reset: sec-counter;

  @media (min-width: 992px) {
    max-width: 630px;
    font-size: 20px;
    line-height: 32px;
    margin: 0;
  }
  @media (min-width: 1200px) {
    padding-bottom: 0;
  }
  @media (min-width: 1440px) {
    max-width: 650px;
  }

  h3 {
    margin-bottom: 0;
    font-size: 20px;
    line-height: 26px;
    font-weight: bold;

    @media (min-width: 992px) {
      font-size: 25px;
      line-height: 32px;
    }
  }
  p {
    margin: 0;
  }

  li {
    position: relative;
    counter-increment: sec-counter;
    padding-left: 70px;
    padding-bottom: 25px;

    @media (min-width: 768px) {
      padding-left: 80px;
      padding-bottom: 35px;
    }
    @media (min-width: 992px) {
      padding-bottom: 12px;
      padding-left: 160px;

      &:nth-child(odd) {
        &:before {
          left: 50px;
        }
      }
    }

    &:before {
      content: counter(sec-counter) ' ';
      position: absolute;
      left: 0;
      top: 10px;
      width: 52px;
      height: 59px;
      background: url('../../images/hexagon-shape.png') no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 16px;
      line-height: 20px;

      @media (min-width: 768px) {
        left: 0;
        top: -12px;
        width: 62px;
        height: 70px;
      }
      @media (min-width: 992px) {
        top: -20px;
        width: 88px;
        height: 100px;
        font-size: 24px;
        line-height: 32px;
        background-size: auto;
      }
    }
  }
`;
