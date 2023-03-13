import { css } from '@linaria/core';

export const cardBox = css`
  text-align: center;
  border-radius: 10px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  transition: all linear 0.3s;

  @media (min-width: 768px) {
    padding: 15px;
    display: block;
    text-align: left;
    border-radius: 20px;
  }
  @media (min-width: 992px) {
    border: 0;
  }
  @media (min-width: 1200px) {
    padding: 25px;
  }

  &:hover,
  &.hover {
    background: var(--white);
    box-shadow: 0 52px 54px rgb(0 0 0 / 15%);
  }
  .mobile-icon {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;

export const iconHolder = css`
  margin-bottom: 5px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const titleStyle = css`
  display: block;
  font-size: 14px;
  line-height: 20px;
  font-family: var(--headings-font-family);
  margin-bottom: 10px;
  color: var(--black);

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 15px;
  }
`;

export const modalHolder = css`
  position: relative;

  @media (max-width: 767px) {
    position: fixed;
    z-index: 51;
    top: 50%;
    right: 15px;
    left: 15px;
    visibility: hidden;
    padding: 25px 25px;
    transform: translateY(-50%);
    opacity: 0;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 52px 54px rgb(0 0 0 / 15%);
    transition: visibility 0.3s linear, opacity 0.3s linear;

    .modalActive & {
      visibility: visible;
      opacity: 1;
    }
  }

  .hideOnDesktop {
    display: block;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;
