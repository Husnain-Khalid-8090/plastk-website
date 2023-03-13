import { css } from 'linaria';

export const securedCardIntroSection = css``;

export const introTextHolder = css`
  h2 {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const containerGrid = css`
  display: grid;
  grid-template-columns: 100%;
  gap: 30px;
  padding-top: 90px;
  padding-bottom: 50px;
  align-items: center;
  @media (min-width: 992px) {
    grid-template-columns: calc(42.3% - 15px) calc(57.7% - 15px);
    padding-bottom: 80px;
  }
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
