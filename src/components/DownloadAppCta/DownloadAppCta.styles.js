import { css } from '@linaria/core';

export const downloadAppCta = css`
  text-align: center;
  color: var(--white);
  margin-bottom: 50px;
  position: relative;
  z-index: 3;
  background: var(--white);
`;

export const offerBox = css`
  background: linear-gradient(132.01deg, #212535 0%, #181e2d 100.2%);
  border-radius: 26px;
  padding: 30px 15px 40px;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media (min-width: 992px) {
    padding: 60px 100px 60px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: url('../../images/line_03.png');
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
    &:last-child {
      margin-bottom: 0;
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
`;

export const pt100 = css`
  padding-top: 15px;

  @media (min-width: 768px) {
    padding-top: 60px;
  }
  @media (min-width: 992px) {
    padding-top: 100px;
  }
`;
