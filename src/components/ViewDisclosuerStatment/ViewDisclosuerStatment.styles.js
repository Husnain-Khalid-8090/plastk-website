import { css } from 'linaria';

export const disclosuerStatment = css`
  position: relative;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #000;

  p {
    margin-bottom: 12px;

    strong {
      font-weight: 700;
    }

    a {
      display: inline-block;
      color: #2687e5;
      padding: 0 5px;
      background: #fcce31;
    }
  }

  .logo {
    width: 100px;
    margin: 0 auto 20px;

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  .page-head {
    .heading {
      text-align: left;
      text-transform: capitalize;
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 700;
      margin: 0 0 12px;
    }
  }

  .statment-section {
    overflow: hidden;

    .header {
      width: 100%;
      padding: 5px 12px;
      color: #fff;
      background: #000;

      .heading {
        display: block;
        font-size: 15px;
        line-height: 20px;
      }
    }

    .statment-holder {
      overflow: hidden;
      border: 2px solid #000;

      .holder {
        padding: 10px;
        border-bottom: 2px solid #000;

        @media screen and (min-width: 768px) {
          display: flex;
          padding: 0;
        }

        &:last-child {
          border: 0;
        }

        .title {
          display: block;
          margin-bottom: 8px;

          @media screen and (min-width: 768px) {
            width: 170px;
            flex-shrink: 0;
            padding: 8px 10px;
            margin: 0;
          }
          @media screen and (min-width: 992px) {
            width: 190px;
          }
        }
      }

      .title {
        display: block;
        font-size: 16px;
        line-height: 20px;

        @media screen and (min-width: 768px) {
          font-size: 15px;
          line-height: 18px;
        }
      }

      .subtitle {
        display: block;
        font-size: 15px;
        line-height: 18px;
        text-decoration: underline;
        margin-bottom: 5px;
      }

      .text-box {
        padding: 0;

        @media screen and (min-width: 768px) {
          flex-grow: 1;
          padding: 12px 10px;
          border-left: 2px solid #000;
        }
      }

      p {
        &:last-child {
          margin: 0;
        }
      }
    }
  }

  .info-section {
    position: relative;
    padding: 25px 0 15px;

    .title {
      display: block;
      font-size: 16px;
      line-height: 20px;
      text-decoration: underline;
      text-align: center;
      margin-bottom: 20px;
    }

    .number-list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0 0 5px;
      }
    }
  }

  .text-holder {
    width: 100%;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #000;

    &.small {
      font-size: 13px;
      list-style: 16px;
      font-weight: 500;
    }

    .number-list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 4px 0;
      }
    }
  }

  .bottom-footer {
    width: 100%;

    .logo {
      width: 100px;
      margin: 0 auto 10px;
    }
  }
`;
