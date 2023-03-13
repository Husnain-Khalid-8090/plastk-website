import { css } from '@linaria/core';

export const visualSection = css`
  width: 100%;
  position: relative;

  @media (min-width: 992px) {
    &:before {
      display: none;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    bottom: 30px;
    transform: skewY(-5deg);
    background: linear-gradient(132.01deg, #212535 0%, #181e2d 100.2%);
    z-index: -1;
    @media (min-width: 768px) {
      bottom: 150px;
    }
  }

  .h2 {
    @media (max-width: 767px) {
      padding-right: 55px;
    }
  }
`;
export const holder = css`
  padding: 25px 0 50px;
  color: var(--white);

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 85px 40px 40px;
    background-image: url('../../images/visual-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
  @media (min-width: 1300px) {
    padding: 30px 75px 40px 60px;
  }
`;

export const textBox = css`
  width: 100%;
  font-size: var(--font-size-lg);
  line-height: calc(var(--font-size-lg) + 6px);
  font-family: var(--headings-font-family);
  font-weight: 400;
  margin-bottom: 30px;

  @media (min-width: 992px) {
    max-width: 400px;
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 0;
  }

  p {
    margin-bottom: 20px;

    @media (min-width: 992px) {
      letter-spacing: -2px;
      margin-bottom: 30px;
    }
  }
`;

export const btnMb = css`
  margin-bottom: 20px;

  @media (min-width: 992px) {
    margin-bottom: 30px;
  }
`;

export const logoHolder = css`
  display: flex;
  align-items: start;
  gap: 12px;
  padding-right: 170px;

  @media (min-width: 768px) {
    padding-right: 0;
  }
  @media (min-width: 992px) {
    gap: 20px;
  }
`;

export const imgBox = css`
  width: 520px;
`;

export const scrollDown = css`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  padding: 5px;
  width: 52px;
  height: 76px;
  text-decoration: none;
  color: var(--black);
  border-radius: 30px;
  background: var(--white);
  box-shadow: 0px 7px 10px rgba(75, 75, 75, 0.1);
  @media (min-width: 992px) {
    display: flex;
  }

  .ico {
    display: block;
    font-size: 25px;
    line-height: 1;
    animation: arrowDown 1.5s linear infinite;

    @keyframes arrowDown {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-5px);
      }
      75% {
        transform: translateY(5px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

export const infoListStyle = css`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    gap: 35px;
  }
`;

export const value = css`
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  display: block;
  font-family: var(--headings-font-family);
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

export const infoTitle = css`
  font-weight: 500;
  font-size: var(--font-size-sm);
  line-height: calc(var(--font-size-sm) + 3px);
  display: block;
  @media (min-width: 768px) {
    font-size: var(--font-size-lg);
    line-height: calc(var(--font-size-lg) + 3px);
  }
`;

export const partnerRibbon = css`
  max-width: 50px;
  margin-bottom: 20px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.2);
  position: absolute;
  right: 15px;
  top: 15px;
  @media (min-width: 768px) {
    max-width: 80px;
  }
  @media (min-width: 768px) {
    margin-top: -31px;
    position: static;
  }
  @media (min-width: 992px) {
    margin-top: -36px;
  }

  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;

export const btnResponsive = css`
  @media (max-width: 767px) {
    display: none;
  }
`;
