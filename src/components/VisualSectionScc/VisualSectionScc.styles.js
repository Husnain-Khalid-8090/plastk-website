import { css } from 'linaria';

export const pr40 = css`
  @media (min-width: 992px) {
    padding-right: 40px;
  }
`;

export const sccTextBox = css`
  @media (min-width: 1200px) {
    max-width: 620px;
  }
  @media (max-width: 991px) {
    margin-bottom: 130px;
  }
`;

export const btnMb = css`
  margin-bottom: 20px;

  @media (min-width: 992px) {
    margin-bottom: 30px;
  }
`;

export const fullWidth = css`
  max-width: none !important;
`;

export const cardRow = css`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 30px;
  @media (min-width: 768px) {
    gap: 20px;
  }
`;
export const sccHolder = css`
  @media (min-width: 1300px) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;
