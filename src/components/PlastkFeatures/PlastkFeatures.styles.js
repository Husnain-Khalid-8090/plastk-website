import { css } from '@linaria/core';

export const cardFeature = css`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    padding-bottom: 50px;
  }
  @media (min-width: 1200px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const head = css`
  max-width: 850px;
  margin: 0 auto 30px;
  text-align: center;

  @media (min-width: 1200px) {
    margin: 0 auto 50px;
  }
`;

export const subTitle = css`
  display: block;
  font-size: 25px;
  line-height: 30px;
  font-weight: 500;
  padding-top: 5px;
  text-transform: capitalize;
`;

export const colHolder = css`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export const cardCol = css`
  max-width: 275px;
  margin: 0 auto 35px;
  border-radius: 10px;
  box-shadow: 0 -1px 36px 3px rgb(0 0 0 / 50%);

  @media (min-width: 768px) {
    max-width: 350px;
    margin: 0 30px 0 0;
  }
  @media (min-width: 992px) {
    max-width: 425px;
  }
  @media (min-width: 1200px) {
    max-width: 550px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const featuresCol = css`
  max-width: 400px;
  padding: 40px 25px;
  border-radius: 25px;
  border: 1px solid #eae9f2;

  @media (min-width: 992px) {
    max-width: 425px;
    padding: 40px;
  }
  @media (min-width: 1200px) {
    max-width: 385px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 20px;
    color: var(--black);

    li {
      position: relative;
      padding-left: 45px;
      margin-bottom: 20px;

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        border-radius: 50px;
        background: var(--primary);
      }
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 6px;
        transform: rotate(45deg) translateY(-50%);
        height: 16px;
        width: 8px;
        border-bottom: 3px solid var(--white);
        border-right: 3px solid var(--white);
        margin: -3px 0 0 0;
      }
    }
  }

  .info-text {
    display: block;
    color: var(--primary);
  }

  .text-right {
    display: block;
    text-align: right;
    font-size: 12px;
    line-height: 15px;
    font-weight: 700;
    margin-top: 10px;
  }
`;

export const darkStyle = css`
  .${colHolder} {
    display: grid;
    grid-template-columns: 100%;
    gap: 30px;
    @media (min-width: 768px) {
      grid-template-columns: 50% 50%;
    }
  }
  .${cardCol} {
    margin: 0;
    max-width: none;
    box-shadow: none;
    .gatsby-image-wrapper {
      @media (min-width: 768px) {
        margin-left: -200px;
      }
    }
  }
  .${featuresCol} {
    background: linear-gradient(132.01deg, #212535 0, #181e2d 100.2%);
    max-width: none;
    box-shadow: 0px 52px 54px rgba(0, 0, 0, 0.2);
    ul {
      color: var(--white);
    }
    .info-text {
      color: var(--white);
      + .info-text {
        margin-top: 10px;
      }
    }
  }
`;

export const featureContainerSm = css`
  max-width: 882px;
`;

export const reverseStyle = css`
  .${colHolder} {
    display: grid;
    grid-template-columns: 100%;
    gap: 30px;
    @media (min-width: 768px) {
      grid-template-columns: 50% 50%;
    }
  }
  .${cardCol} {
    margin: 0;
    max-width: none;
    box-shadow: none;
    order: 1;
  }
  .${featuresCol} {
    max-width: none;
    ul:only-child {
      li {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const smStyle = css`
  .${colHolder} {
    display: grid;
    grid-template-columns: 100%;
    gap: 30px;
    @media (min-width: 768px) {
      grid-template-columns: 50% 50%;
    }
  }
  .${cardCol} {
    margin: 0;
    max-width: none;
  }
  .${featuresCol} {
    max-width: none;
    padding: 16px 20px;
    ul {
      li {
        margin-bottom: 10px;
        padding-left: 30px;
        &:before {
          width: 20px;
          height: 20px;
        }
        &:after {
          left: 4px;
          width: 6px;
          height: 10px;
        }
      }
    }
    .info-text {
      font-size: 11px;
      line-height: 14px;
      text-align: right;
      color: var(--black);
    }
  }
`;
