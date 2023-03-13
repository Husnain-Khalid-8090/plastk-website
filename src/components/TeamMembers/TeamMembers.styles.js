import { css } from 'linaria';

export const teamContainer = css``;

export const teamMemberSection = css`
  text-align: center;

  .${teamContainer} {
    padding-bottom: 40px;
    @media (min-width: 768px) {
      padding-bottom: 100px;
    }
  }

  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 50px;
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;

export const memberCol = css``;
