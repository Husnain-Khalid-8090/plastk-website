import { css } from 'linaria';

export const typography = css`
  :global() {
    h1,
    .h1,
    h2,
    .h2,
    h3,
    .h3,
    h4,
    .h4,
    h5,
    .h5,
    h6,
    .h6,
    .h {
      font-family: var(--headings-font-family);
      font-weight: bold;
      margin: 0 0 0.5em;
      color: var(--headings-color);
    }

    h1,
    .h1,
    h2,
    .h2 {
      &:after {
        content: '';
        background-color: var(--primary);
        width: 40px;
        height: 5px;
        border-radius: 30px;
        display: block;
        margin-top: 20px;
      }
      &.no-border {
        &:after {
          display: none;
        }
      }
      &.center {
        text-align: center;
        &:after {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    h1,
    .h1 {
      font-size: 30px;
      line-height: 35px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 36px;
        line-height: 42px;
      }
      @media (min-width: 992px) {
        font-size: var(--h1-font-size);
        line-height: calc(var(--h1-font-size) + 5px);
      }
    }

    h2,
    .h2 {
      color: var(--white);
      font-size: 28px;
      line-height: 32px;
      margin-bottom: 15px;
      @media (min-width: 768px) {
        font-size: 33px;
        line-height: 40px;
      }

      @media (min-width: 992px) {
        font-size: var(--h2-font-size);
        line-height: calc(var(--h2-font-size) + 10px);
        margin-bottom: 25px;
      }
    }

    h3,
    .h3 {
      font-size: var(--h3-font-size);
      line-height: calc(var(--h3-font-size) + 5px);
    }

    p {
      margin: 0 0 1em;
      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: var(--base-link-color);
      text-decoration: none;
      transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
      &:hover {
        text-decoration: none;
        color: var(--base-link-color);
      }
    }

    .d-none {
      display: none !important;
    }
  }
`;
