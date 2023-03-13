import { css } from 'linaria';

export const aboutContainer = css``;

export const aboutIntro = css`
  text-align: center;
  color: var(--black);
  font-size: 20px;
  line-height: 25px;

  h2 {
    &.title {
      font-weight: 500;
      color: var(--black);
    }
  }
  .${aboutContainer} {
    max-width: 975px;
    padding-top: 20px;
    padding-bottom: 50px;
    @media (min-width: 768px) {
      padding-top: 70px;
      padding-bottom: 70px;
    }
    @media (min-width: 1200px) {
      max-width: 975px;
    }
  }
`;
