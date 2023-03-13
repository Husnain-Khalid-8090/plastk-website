import { css } from 'linaria';

export const sentinelVisual = css`
  position: relative;
  max-width: 1440px;
  overflow: hidden;
  font-weight: 500;
  padding: 45px 0;
  margin: 0 auto;
  color: #022242;

  @media (min-width: 768px) {
    padding: 60px 0;
  }

  .card-img1,
  .card-img2 {
    display: none;
    position: absolute;
    top: 90px;
    left: -70px;
    width: 200px;
    height: auto;
    filter: drop-shadow(0px 4px 50px #dadada);

    @media (min-width: 992px) {
      display: block;
    }
    @media (min-width: 1200px) {
      left: -30px;
    }
    @media (min-width: 1440px) {
      top: 130px;
      left: 0;
      width: 258px;
    }
  }

  .card-img2 {
    left: auto;
    top: auto;
    bottom: 100px;
    right: -60px;
    width: 200px;

    @media (min-width: 1200px) {
      right: -30px;
    }
    @media (min-width: 1440px) {
      width: 247px;
      right: 0;
    }
  }

  .head {
    text-align: center;
    margin-bottom: 15px;

    @media (min-width: 768px) {
      margin-bottom: 20px;
      text-align: left;
    }
  }

  h1 {
    font-size: 45px;
    line-height: 50px;
    font-weight: 700;
    margin: 0 0 10px;
    color: #022242;

    @media (min-width: 992px) {
      font-size: 50px;
      line-height: 55px;
    }
  }

  .title-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }

    .badge-img {
      flex-shrink: 0;
      width: 26px;
      height: auto;
    }

    .title {
      display: block;
      font-size: 27px;
      line-height: 32px;
      font-weight: 600;
      padding-left: 8px;
      color: #022242;

      @media (min-width: 768px) {
        font-size: 32px;
        line-height: 36px;
        padding-left: 10px;
      }
    }
  }

  .holder {
    max-width: 770px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1200px) {
      max-width: 840px;
    }
  }

  .para {
    display: none;
    text-align: center;
    max-width: 280px;
    margin: 0 auto 16px;
    font-size: 16px;
    line-height: 25px;
    font-weight: 700;

    @media (min-width: 768px) {
      display: block;
      text-align: left;
      margin: 0 0 16px;
    }
  }

  .subtitle {
    display: block;
    font-size: 20px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
    background: linear-gradient(to right, #7b67fb 0%, #2f80ed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .price {
    display: block;
    font-size: 50px;
    line-height: 55px;
    font-weight: 700;
    color: #2f80ed;
    margin-bottom: 15px;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 45px;
    }
    @media (min-width: 1200px) {
      font-size: 50px;
      line-height: 55px;
    }

    span {
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      color: #6f7c97;
    }
  }

  .btn-holder {
    position: relative;
  }
`;

export const offerWrap = css`
  width: 100%;
  text-align: left;
  padding: 20px 15px;
  margin: 0 0 25px;
  border-radius: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  background: #fff;

  @media (min-width: 576px) {
    padding: 20px;
    margin: 0 0 20px;
  }
  @media (min-width: 1200px) {
    padding: 25px;
  }

  .btn-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .btn-offer {
    width: 140px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #2f80ed;
    text-align: center;
    border: 0;
    outline: none;
    box-shadow: none;
    padding: 3px;
    margin: 0;
    cursor: pointer;
    border-radius: 50px;
    transition: all linear 0.3s;
    background: linear-gradient(to right, #7b67fb 0%, #2f80ed 100%);

    @media (min-width: 576px) {
      width: 150px;
    }

    div {
      padding: 12px 10px;
      border-radius: 50px;
      background: #fff;
    }

    span {
      display: block;
      background: linear-gradient(to right, #7b67fb 0%, #2f80ed 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    }
  }

  .get-off {
    display: block;
    flex-shrink: 0;
    width: 160px;
    font-size: 20px;
    line-height: 25px;
    text-transform: capitalize;
    font-weight: 700;
    color: #0f2546;
    padding: 0 5px 0 0;
  }

  .text {
    display: block;
    font-size: 10px;
    line-height: 13px;
    font-weight: 700;
    color: #5d6a93;
    margin: 0;
  }

  .price-holder {
    margin: 0 -10px 5px;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      margin: 0 -10px 10px;
    }

    .price {
      display: inline-block;
      position: relative;
      font-size: 25px;
      line-height: 32px;
      font-weight: 700;
      color: #7b67fb;
      margin: 0 0 5px;
      padding: 0 5px;
      background: linear-gradient(to right, #7b67fb 0%, #2f80ed 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: 768px) {
        font-size: 28px;
        padding: 0 10px;
      }

      &.old {
        color: #0f254640;
        background: none;
        -webkit-text-fill-color: #0f254640;
      }

      span {
        display: inline-block;
        vertical-align: middle;
        font-size: 12px;
        line-height: 15px;
        font-weight: 500;
        color: #6f7c97;
        background: none;
        -webkit-text-fill-color: #6f7c97;
        margin: 0;
      }
    }
  }
`;

export const textCol = css`
  max-width: 345px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 400px;
    padding: 0 10px 0 0;
    margin: 0;
    text-align: left;
  }
`;

export const imgCol = css`
  display: none;
  max-width: 285px;

  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 992px) {
    max-width: 315px;
  }
  @media (min-width: 1200px) {
    max-width: 388px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
