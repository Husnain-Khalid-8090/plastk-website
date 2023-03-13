import { css } from 'linaria';

export const benefitsSection = css`
  text-align: center;
  font-size: 16px;
  line-height: 25px;
  color: var(--dark-black);
  position: relative;
  z-index: 1;
  padding-bottom: 100px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 120px;
    background: url('../../images/line-01.png') no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    transform: rotate(-11deg);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    padding-bottom: 50px;

    &:before {
      display: none;
    }
  }

  @media (min-width: 992px) {
    padding-top: 30px;
    padding-bottom: 130px;

    &:before {
      display: block;
      height: 210px;
      background-size: contain;
      transform: rotate(2.63deg);
    }
  }

  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 32px;
    padding-top: 50px;
    padding-bottom: 200px;
  }

  .heading-holder {
    max-width: 700px;
    margin: 0 auto 30px;

    @media (min-width: 992px) {
      max-width: 1050px;
      margin: 0 auto 60px;
    }
    @media (min-width: 1200px) {
      margin: 0 auto 100px;
    }
  }

  h2 {
    color: var(--dark-black);
    margin-bottom: 25px;

    @media (min-width: 1200px) {
      margin-bottom: 35px;
    }

    @media (max-width: 991px) {
      font-size: 28px;
      line-height: 32px;
      margin-bottom: 20px;
    }
  }
`;

export const bapStepsList = css`
  position: relative;
  z-index: 1;
  margin-bottom: 40px;

  @media (min-width: 992px) {
    margin-bottom: 80px;

    &:before {
      content: '';
      position: absolute;
      top: -60px;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('../../images/line-01.png') no-repeat;
      background-size: contain;
      background-position: center;
      z-index: -1;
    }
  }

  @media (min-width: 1200px) {
    margin-bottom: 100px;

    &:before {
      transform: rotate(5deg);
    }
  }

  .holder {
    max-width: 860px;
    margin: 0 auto;

    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
    }
  }

  .bap-step {
    position: relative;
    padding: 20px 0;

    &:nth-child(1),
    &:nth-child(3) {
      &:before {
        display: block;

        @media (min-width: 768px) {
          display: none;
        }
      }
    }

    @media (min-width: 992px) {
      margin: 0;
      padding: 0;
    }

    &:before {
      display: none;
      content: '';
      height: 100px;
      position: absolute;
      top: 10px;
      left: -260px;
      right: 0;
      bottom: 0;
      background: url('../../images/line-01.png') no-repeat;
      background-size: cover;
      background-position: top center;
      z-index: -1;
    }
  }

  .bap-step-number {
    background: url('../../images/hexagon-shape.png') no-repeat;
    width: 88px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 25px;
    line-height: 30px;
    margin: 0 auto 20px;

    @media (min-width: 992px) {
      font-size: 32px;
      line-height: 50px;
      margin: 0 auto 25px;
    }
  }
  .bap-step-text {
    font-weight: 500;
    display: block;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 25px;
    font-weight: 700;
    color: var(--dark-black1);

    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 25px;
    }
  }
`;

export const benefitsList = css`
  position: relative;

  @media (min-width: 992px) {
    display: grid;
    column-gap: 50px;
    row-gap: 30px;

    grid-template-columns: repeat(2, minmax(0px, 1fr));
    row-gap: 60px;
  }

  @media (min-width: 1200px) {
    column-gap: 60px;
  }

  .column {
    max-width: 280px;
    margin: 0 auto;

    @media (min-width: 992px) {
      max-width: inherit;
      margin: 0;
      padding: 0;
    }
  }

  .benefit {
    padding: 20px 0;

    @media (min-width: 992px) {
      display: flex;
      align-items: flex-end;
      text-align: left;
      margin-bottom: 60px;
      padding: 0;
    }
    @media (min-width: 1200px) {
      margin-bottom: 80px;
    }
  }
  p {
    margin: 0;
  }

  h3 {
    @media (min-width: 992px) {
      font-size: 32px;
      line-height: 35px;
      margin-bottom: 15px;
    }

    @media (max-width: 767px) {
      font-size: 25px;
      line-height: 32px;
    }
  }
  .benefit-icon {
    flex-shrink: 0;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;

    @media (min-width: 992px) {
      margin: 0 15px 0 0;
    }
  }
`;
