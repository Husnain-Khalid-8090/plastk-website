import { css } from 'linaria';

export const visualCardStyle = css`
  background: var(--card-bg);
  box-shadow: 0px 52px 54px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 15px;
  }
  @media (min-width: 1200px) {
    padding: 20px;
  }
`;

export const iconHolder = css`
  margin-bottom: 10px;
`;

export const titleStyle = css`
  font-size: 14px;
  line-height: 18px;
  font-family: var(--headings-font-family);
  display: block;
  @media (min-width: 1200px) {
    font-size: 22px;
    line-height: 28px;
  }
`;
