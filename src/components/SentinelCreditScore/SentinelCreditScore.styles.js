import { css } from '@linaria/core';

export const creditScore = css`
  position: relative;
  font-size: 16px;
  line-height: 19px;
  padding: 15px 0 40px;

  @media (min-width: 1200px) {
    padding: 15px 0 50px;
  }

  p {
    margin-bottom: 25px;
  }
`;

export const flex = css`
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const textHolder = css`
  max-width: 400px;
  margin: 0 auto 25px;
  color: #636363;

  @media (min-width: 768px) {
    margin: 0 auto 40px;
  }
  @media (min-width: 992px) {
    margin: 0;
    padding-right: 30px;
  }
  @media (min-width: 1200px) {
    max-width: 450px;
    padding-right: 50px;
  }
`;

export const imgHolder = css`
  flex-grow: 1;
  max-width: 550px;
  margin: 0 auto;

  @media (min-width: 992px) {
    margin: 0;
  }
  @media (min-width: 1200px) {
    max-width: 655px;
  }
`;

export const btnHolder = css`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  text-align: center;
`;
