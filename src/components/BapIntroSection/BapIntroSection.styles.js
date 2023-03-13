import { css } from 'linaria';

export const bapIntroblock = css`
  position: relative;
  font-size: 16px;
  line-height: 25px;
  color: var(--dark-black);
  padding: 50px 0;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;
    font-size: 20px;
    line-height: 32px;
    padding: 62px 0;
  }

  h2 {
    color: var(--black);
    @media (max-width: 991px) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  p {
    margin: 0 0 15px;
  }
`;

export const holder = css`
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const imgHolder = css`
  flex-shrink: 0;
  max-width: 350px;
  margin: 0 auto 50px;

  @media (min-width: 992px) {
    max-width: 370px;
    margin: 0;
  }
  @media (min-width: 1200px) {
    max-width: 600px;
    margin: 0;
  }
`;

export const textHolder = css`
  max-width: 360px;
  line-height: 25px;
  margin: 0 auto;

  @media (min-width: 992px) {
    flex-grow: 1;
    max-width: 100%;
    margin: 0;
    padding: 0 0 0 30px;
  }

  @media (min-width: 1200px) {
    padding: 0 0 0 68px;
  }
`;
