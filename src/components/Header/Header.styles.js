import { css } from '@linaria/core';

export const header = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: var(--z-40);
  padding-top: 12px;
  padding-bottom: 12px;
  background: var(--white);
  transition: box-shadow 0.3s linear;
`;

export const scrollActive = css`
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

export const flex = css`
  display: flex;
  align-items: center;
  position: relative;
`;

export const logo = css`
  width: 98px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const dropdown = css`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: var(--white);
  display: none;
  @media (min-width: 992px) {
    display: block;
    visibility: hidden;
    opacity: 0;
    width: 212px;
    transform: translateY(115%);
    transition: opacity linear 0.1s, visibility linear 0.1s, transform linear 0.1s;
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--z-30);
  }

  ul {
    a {
      display: block;
      padding: 5px 20px;
      color: var(--text-color);
      position: relative;
      text-decoration: none;
      z-index: 1;

      &:hover {
        color: var(--white);
        &:before {
          width: 100%;
        }
      }

      &:before {
        content: '';
        width: 0;
        transition: width linear 0.3s;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--primary);
        z-index: -1;
      }
    }
  }
`;

export const mainNav = css`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 350px;
  padding: 60px 15px;
  transition: all 0.3s;
  transform: translateX(400px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  background-color: var(--white);

  .nav-active & {
    transform: none;
  }

  @media (min-width: 992px) {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 28px;
    position: static;
    width: auto;
    padding: 0;
    transform: none;
    box-shadow: none;
  }
`;

export const menu = css`
  font-family: var(--headings-font-family);
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 10px;

  @media (min-width: 992px) {
    display: flex;
    gap: 28px;
    margin: 0;
  }

  > li {
    padding-top: 5px;
    padding-bottom: 5px;
    position: relative;

    @media (min-width: 992px) {
      padding-top: 0;
      padding-bottom: 0;
    }
    @media (hover: none) {
      &:hover {
        .${dropdown} {
          display: block;
        }
      }
    }
    &:hover {
      @media (min-width: 992px) {
        .${dropdown} {
          transform: translateY(44px);
          visibility: visible;
          opacity: 1;
        }

        a {
          &:before {
            visibility: visible;
            opacity: 1;
            left: 0;
          }
        }
      }
    }

    > a {
      display: block;
      color: var(--text-color);
      padding: 3px 0;
      position: relative;
      text-decoration: none;

      @media (min-width: 992px) {
        padding: 12px 0px;
      }

      &:before {
        visibility: hidden;
        opacity: 0;
        transition: all 0.5s;
        content: '';
        position: absolute;
        left: 50px;
        bottom: 0;
        width: 20px;
        height: 3px;
        border-radius: 50px;
        background: var(--primary);
      }

      .arrow {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);

        @media (min-width: 992px) {
          display: none;
        }
      }
    }
  }
`;

export const navOpener = css`
  position: absolute;
  top: 0;
  right: 15px;
  width: 45px;
  height: 44px;
  border: 1px solid rgba(170, 225, 93, 0.295828);
  border-radius: 50px;
  background: var(--white);
  z-index: 9;

  @media (min-width: 992px) {
    display: none;
  }

  &:before,
  &:after,
  span {
    background: var(--primary);
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 23%;
    right: 23%;
    height: 4px;
    margin-top: -2px;
    transition: all 0.2s linear;
  }

  &:before,
  &:after {
    content: '';
    top: 30%;
  }

  &:after {
    top: 70%;
  }

  .nav-active & {
    span {
      opacity: 0;
    }

    &:after,
    &:before {
      transform: rotate(45deg);
      top: 50%;
      left: 15%;
      right: 15%;
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;
