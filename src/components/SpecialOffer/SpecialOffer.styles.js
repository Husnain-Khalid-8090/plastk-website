import { css } from 'linaria';

export const offerSection = css`
  .container-indent {
    padding-bottom: 50px;
    padding-top: 25px;
    @media (min-width: 992px) {
      padding-top: 50px;
      padding-bottom: 100px;
    }
  }
  .offer-box {
    background: linear-gradient(132.01deg, #212535 0%, #181e2d 100.2%);
    border-radius: 26px;
    padding: 30px 15px 30px 47px;
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    @media (min-width: 1200px) {
      padding: 60px 109px 60px 129px;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      background: url('../../images/line_01.png');
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
    }
    ol {
      padding-left: 18px;
      font-weight: 500;
      li {
        margin-bottom: 30px;
      }
    }
    p {
      color: var(--white);
      line-height: 28px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    h3 {
      color: var(--white);
      position: relative;
      &:before {
        width: 25px;
        height: 25px;
        content: '';
        position: absolute;
        top: 50%;
        left: -33px;
        transform: translateY(-50%);
        background: var(--primary);
        border-radius: 100%;
        @media (min-width: 992px) {
          width: 30px;
          height: 30px;
          left: -50px;
        }
      }
      &:after {
        content: 'east';
        font-family: 'Material Icons Outlined';
        font-size: 13px;
        position: absolute;
        top: 50%;
        left: -26px;
        transform: translateY(-50%);
        font-weight: 900;
        color: var(-white);
        @media (min-width: 992px) {
          left: -40px;
        }
      }
    }
    &.big {
      &:before {
        background-image: url('../../images/line_02.png');
      }
    }
    &.home {
      &:before {
        background-image: url('../../images/line_03.png');
      }
    }
  }
`;

export const btnHolder = css`
  width: 100%;
  text-align: center;
`;
