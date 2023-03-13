import { css } from '@linaria/core';

export const rewardsSection = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 30px;

  @media (min-width: 1200px) {
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;

export const head = css`
  max-width: 850px;
  margin: 0 auto 30px;
  font-size: 16px;
  line-height: 20px;
  color: var(--black);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (min-width: 1200px) {
    margin: 0 auto 50px;
  }
`;
export const colWrap = css`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    gap: 40px;
  }
`;

export const btnHolder = css`
  width: 100%;
  text-align: center;
  padding-top: 30px;
`;
