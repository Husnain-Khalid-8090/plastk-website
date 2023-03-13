import { css } from 'linaria';

export const headingHolder = css`
  position: relative;
  gap: 20px;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    margin: 0;
    flex-grow: 1;
    text-align: center;
  }

  button {
    display: block;
    margin: 0 auto 15px;

    @media (min-width: 768px) {
      position: absolute;
      top: -35px;
      left: 0;
      margin: 0;
    }
  }
`;
