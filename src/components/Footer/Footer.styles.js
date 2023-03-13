import { css } from 'linaria';

export const footer = css`
  width: 100%;
  position: relative;
  padding-top: 35px;
  padding-bottom: 20px;
  border-top: 1px solid #bdbdbd;
  background: var(--white);
  z-index: 1;

  @media only screen and (min-width: 992px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  p {
    margin-bottom: 20px;
  }

  .column {
    width: 100%;
  }
`;

export const logo = css`
  width: 98px;
  margin-bottom: 48px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const footerContent = css`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin-bottom: 50px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-bottom: 70px;
  }
`;

export const textBox = css`
  width: 100%;
  font-size: var(--font-size-sm);
  line-height: calc(var(--font-size-sm) + 3px);
`;

export const footerNav = css`
  text-transform: capitalize;
  li {
    margin-bottom: 15px;
  }
  a {
    display: block;
    color: var(--gray);

    &:hover {
      color: var(--black);
    }
  }
`;

export const socialnetworks = css`
  display: flex;
  flex-flow: wrap;
  margin: 0 -3px;

  @media (min-width: 1200px) {
    margin: 0 -10px;
  }

  li {
    padding-right: 3px;
    padding-left: 3px;

    @media (min-width: 1200px) {
      padding-right: 10px;
      padding-left: 10px;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 5px;
    mix-blend-mode: normal;
    border-radius: 30px;
    background: var(--white);
    box-shadow: 0px -7px 10px rgba(75, 75, 75, 0.01), 0px 7px 10px rgba(75, 75, 75, 0.1);

    @media only screen and (min-width: 992px) {
      width: 50px;
      height: 50px;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    &:hover {
      img {
        opacity: 0.5 !important;
      }
    }
  }
`;
