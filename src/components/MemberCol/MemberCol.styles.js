import { css } from 'linaria';

export const memberImg = css`
  position: relative;
  padding-bottom: 18px;
  padding-right: 18px;
  max-width: 224px;
  margin: 0 auto 20px;
  &:after {
    content: '';
    position: absolute;
    top: 17px;
    left: 21px;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: url('../../images/img_border.png') no-repeat;
    background-size: contain;
  }
  .img-holder {
    filter: drop-shadow(0px 32.7478px 34.0073px rgba(65, 62, 101, 0.296766));
    border-radius: 20px;
    overflow: hidden;
    img {
      filter: grayscale(100%);
    }
  }
`;

export const writeUps = css`
  max-width: 452px;
  margin: 0 auto;
`;

export const memberInfo = css`
  position: absolute;
  box-shadow: 0px 32px 34px rgba(28, 27, 32, 0.198973);
  border-radius: 10px;
  color: var(--white);
  z-index: 2;
  text-align: left;
  min-width: 198px;
  padding: 15px 20px;
  left: -45px;
  bottom: 40px;
  @media (min-width: 1200px) {
    left: -14px;
  }
  @media (min-width: 1300px) {
    left: -75px;
  }
  .name {
    font-size: 14px;
    line-height: 20px;
    font-family: var(--headings-font-family);
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
  }
  .role {
    font-size: 12px;
    line-height: 14px;
  }
  &.yellow {
    background: #ffca00;
  }
  &.blue {
    background: #2f80ed;
  }
  &.purple {
    background: #9b51e0;
  }
`;
