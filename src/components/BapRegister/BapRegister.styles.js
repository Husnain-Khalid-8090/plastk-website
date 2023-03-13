import { css } from 'linaria';

export const bapRegister = css`
  position: relative;
  padding-bottom: 135px;

  @media (min-width: 768px) {
    padding-bottom: 165px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -70px;
    height: 150px;
    background: url('../../images/line-02.png') no-repeat;
    background-size: cover;
    background-position: bottom center;
    z-index: -1;

    @media (min-width: 768px) {
      bottom: -40px;
      height: 180px;
    }
    @media (min-width: 1200px) {
      bottom: -50px;
      height: 273px;
      background-size: contain;
      background-position: bottom center;
    }
  }

  .holder {
    position: relative;
    max-width: 650px;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 1200px) {
      max-width: inherit;
      margin: 0;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .text-holder {
    max-width: 650px;
    font-size: 16px;
    line-height: 25px;
    color: var(--dark-black);
    margin: 0 auto 25px;
    padding: 0 16px;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 32px;
      padding: 0;
    }
    @media (min-width: 1200px) {
      margin: 0;
      max-width: 530px;
    }

    h2 {
      font-size: 28px;
      line-height: 32px;
      font-weight: 500;
      color: var(--dark-black);

      @media (min-width: 768px) {
        font-size: 40px;
        line-height: 50px;
      }
    }
  }

  .form-holder {
    flex-grow: 1;

    @media (min-width: 1200px) {
      padding-left: 50px;
    }

    form {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;

      input {
        flex-grow: 1;
        width: 100%;
        height: 45px;
        font-size: 12px;
        line-height: 25px;
        padding: 10px 140px 10px 25px;
        border: 0;
        outline: none;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 80px;
        background: var(--white);
        color: var(--dark-black1);
        ::-webkit-input-placeholder {
          color: var(--placeholder-color);
        }
        ::-moz-placeholder {
          color: var(--placeholder-color);
        }
        :-ms-input-placeholder {
          color: var(--placeholder-color);
        }
        :-moz-placeholder {
          color: var(--placeholder-color);
        }

        @media (min-width: 768px) {
          height: 80px;
          font-size: 20px;
          line-height: 25px;
          padding: 15px 245px 15px 50px;
        }
      }

      .button {
        position: absolute;
        top: 7px;
        right: 7px;

        @media (max-width: 767px) {
          width: 125px;
          font-size: 12px;
          line-height: 20px;
          padding: 8px 5px;
          top: 4px;
          right: 5px;
        }
      }
    }
  }
`;
