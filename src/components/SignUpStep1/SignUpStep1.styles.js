import { css } from 'linaria';

export const subTitle = css`
  font-size: 20px;
  line-height: 25px;
  color: var(--black);
  margin-bottom: 12px;
  text-align: center;
  display: block;

  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const small = css`
  text-align: left;
  font-size: 18px;
  line-height: 22px;
`;

export const fourCols = css`
  display: grid;
  grid-template-columns: repeat(11, minmax(0, 1fr));
  column-gap: 15px;
  .title-col {
    grid-column: span 11 / span 11;
    @media (min-width: 576px) {
      grid-column: span 2 / span 2;
    }
  }
  .name-col {
    grid-column: span 11 / span 11;
    @media (min-width: 576px) {
      grid-column: span 3 / span 3;
    }
  }
  .emboss-col {
    grid-column: span 11 / span 11;
  }
`;

export const twoCols = css`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 15px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
