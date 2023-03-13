import { css } from 'linaria';

export const bapFaqs = css`
  position: relative;
  margin-bottom: 35px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 80px;
  }

  h2 {
    color: var(--dark-black1);
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: 1200px) {
      margin-bottom: 50px;
    }
  }

  .btn-holder {
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    color: var(--dark-black);

    a {
      margin-bottom: 12px;
    }

    p {
      a {
        font-weight: 700;
      }
    }
  }
`;
