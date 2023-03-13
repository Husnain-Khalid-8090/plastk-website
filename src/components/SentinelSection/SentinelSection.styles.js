import { css } from '@linaria/core';

export const sentinelSection = css`
  position: relative;
  font-size: 16px;
  line-height: 25px;
  padding: 15px 0 50px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 25px;
  }

  p {
    margin-bottom: 25px;
  }
`;

export const flex = css`
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`;

export const imgHolder = css`
  display: none;
  max-width: 250px;
  margin: 0 auto 25px;

  @media (min-width: 768px) {
    display: block;
    max-width: 350px;
    margin: 0 20px 0 0;
  }
  @media (min-width: 1200px) {
    max-width: 540px;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const dNone = css`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const textHolder = css`
  max-width: 340px;
  margin: 0 auto;
  color: #636363;

  @media (min-width: 768px) {
    margin: 0;
    max-width: 450px;
  }

  h2 {
    font-size: 40px;
    line-height: 45px;
    color: var(--black);
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 60px;
      line-height: 65px;
    }
    @media (min-width: 1200px) {
      font-size: 70px;
      line-height: 75px;
    }

    a {
      color: var(--black);
    }
  }
`;

export const titleBox = css`
  max-width: 275px;
  overflow: hidden;
  display: flex;
  position: relative;
  margin: 0 auto;
  text-align: left;
  padding-bottom: 18px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: inherit;
    margin: 0;
    padding-bottom: 15px;
    margin-bottom: 25px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 3px;
    bottom: 0;
    width: 40px;
    height: 5px;
    border-radius: 5px;
    background: var(--primary);

    @media (min-width: 768px) {
      left: 0;
    }
  }
`;

export const badge = css`
  width: 40px;
  height: auto;
`;
export const text = css`
  flex-grow: 1;
  padding-left: 10px;
`;
export const title = css`
  display: block;
  font-size: 28px;
  line-height: 32px;
  color: #022242;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
  }
`;
export const subTitle = css`
  display: block;
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(to right, #7b67fb 0, #2f80ed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
