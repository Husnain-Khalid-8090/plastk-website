import { css } from 'linaria';

export const policyBlock = css`
  position: relative;
  padding: 30px 0 60px;

  hr {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  address {
    margin-bottom: 16px;
    font-style: normal;
  }

  ul.list {
    list-style: none;
    margin: 0 0 16px;
    padding: 0 0 0 20px;

    li {
      position: relative;
      padding-left: 15px;

      &:before {
        content: '';
        position: absolute;
        top: 6px;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 20px;
        background: var(--body-text-color);
      }
    }
  }

  h1,
  h2,
  h3 {
    font-weight: 500;
    color: var(--dark-black);
  }

  h1 {
    font-size: 30px;
    line-height: 36px;

    @media (min-width: 768px) {
      font-size: 42px;
      line-height: 51px;
    }
  }
  h2 {
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 18px;
    line-height: 24px;
  }
`;
