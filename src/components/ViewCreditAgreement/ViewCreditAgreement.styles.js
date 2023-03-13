import { css } from 'linaria';

export const viewAgreement = css`
  position: relative;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #000;

  .table-box {
    width: 240px;
    font-size: 12px;
    line-height: 14px;
    margin: 0 0 20px;
    border: 1px solid #000;

    .title-txt {
      display: block;
    }

    .subtitle {
      display: block;
      padding: 2px 5px;
      margin: 0 0 0 70px;
      text-align: center;
      border-width: 0 0 1px 1px;
      border-style: solid;
      border-color: #000;
    }

    .row-col {
      display: flex;
      border-bottom: 1px solid #000;

      &:last-child {
        border: 0;
      }

      .left-col {
        flex-shrink: 0;
        width: 70px;
        padding: 3px;
        text-align: center;
      }

      .right-col {
        flex-grow: 1;
      }

      .balance {
        height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 33.33%;
          padding: 3px;
          border-left: 1px solid #000;
        }
      }
    }
  }

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
    width: 100%;
    margin: 0 0 20px;

    .heading {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 700;
      margin: 0 0 12px;
      text-align: center;
      text-transform: uppercase;
    }
  }

  .pages-name {
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 2px solid #eee;

    .title {
      display: block;
      margin-bottom: 15px;
    }
  }

  .pages {
    margin: 0;
    padding: 0 0 0 25px;

    li {
      margin: 0 0 8px;

      .inner {
        display: flex;
        justify-content: space-between;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          left: 0;
          right: 12px;
          bottom: 6px;
          height: 1px;
          border-bottom: 1px dashed #000;
        }
      }

      .title {
        position: relative;
        margin-bottom: 0;
        padding: 0 5px 0 0;
        background: #fff;
      }
    }
  }

  .text-detail {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 2px solid #eee;

    .heading {
      display: block;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 5px;
    }
    .italic {
      font-style: italic;
    }
  }
  address {
    margin: 0;
    padding: 0;
    font-style: normal;

    span {
      display: block;
    }
  }

  ul.list {
    margin: 0 0 10px;
    padding: 0 0 0 18px;

    &.bullet-none {
      list-style: none;
    }

    li {
      padding: 2px 0;
    }
  }
`;
