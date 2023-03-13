import { css } from 'linaria';

export const whatIsPlastk = css`
  max-width: 680px;
  position: relative;
  font-weight: 500;
  margin: 0 auto 50px;
  border-radius: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  background: #fff;
  z-index: 2;

  @media (min-width: 992px) {
    max-width: inherit;
    margin: 0 0 50px;
  }

  h2 {
    margin: 0 0 30px;
    color: var(--black);

    @media (min-width: 992px) {
      text-align: left;
    }
    @media (max-width: 575px) {
      margin-bottom: 20px;
      font-size: 23px;
    }
  }

  p {
    margin-bottom: 20px;

    &:last-child {
      margin: 0;
    }
  }
`;

export const holder = css`
  max-width: 100%;
  padding: 35px 20px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 50px 50px;
  }
  @media (min-width: 992px) {
    max-width: 980px;
    padding: 55px 50px;
  }
  @media (min-width: 1200px) {
    padding: 45px 15px;
  }
  @media (min-width: 1366px) {
    padding: 65px 10px;
  }
`;

export const textHolder = css`
  max-width: 100%;
  padding: 0;
  text-align: center;

  @media (min-width: 992px) {
    max-width: 460px;
    text-align: left;
    padding: 10px 50px 10px 0;
  }
  @media (min-width: 1200px) {
    padding: 10px 10px 10px 0;
  }
`;

export const imgHolder = css`
  display: none;
  margin: 0 auto 25px;
  max-width: 300px;
  filter: drop-shadow(0px 4px 25px rgba(218, 218, 218, 0.5));

  @media (min-width: 768px) {
    max-width: 300px;
  }
  @media (min-width: 992px) {
    display: block;
    max-width: 400px;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const lgHidden = css`
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
`;
