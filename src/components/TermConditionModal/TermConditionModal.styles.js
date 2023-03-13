import { css } from 'linaria';

export const termCondition = css`
  position: relative;

  .header {
    width: 100%;
    margin: 0 0 25px;
    box-shadow: none !important;
  }
  .logo {
    width: 120px;
    margin: 0 auto;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .text-holder {
    height: 400px;
    overflow: auto;
    font-size: 14px;
    line-height: 20px;
    color: #000;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 12px;
      height: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #ebebeb;
    }
  }

  p {
    a {
      color: #2687e5;
    }
  }

  .uppercase {
    text-transform: uppercase;
  }

  .date {
    display: block;
    margin-bottom: 15px;
  }

  .heading {
    display: block;
    font-size: 20px;
    line-height: 24px;
    margin: 0 0 10px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 30px;
    }
  }
  .title {
    display: block;
    font-size: 17px;
    line-height: 20px;
    margin: 0 0 10px;
  }
`;
