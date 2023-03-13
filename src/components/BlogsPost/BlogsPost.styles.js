import { css } from 'linaria';

export const article = css`
  display: grid;
  position: relative;

  .article-card {
    display: grid;
    grid-template-rows: 200px 1fr;
    width: 100%;
    font-size: 16px;
    line-height: 26px;
    overflow: hidden;
    padding: 10px;
    transition: 0.3s linear;
    color: #767581;
    border: none;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 1.7px 3.4px 3.4px 0px;
    @media (min-width: 768px) {
      padding: 15px;
    }

    &:hover {
      text-decoration: none;
      color: #767581;
      box-shadow: 8px 16px 16px rgb(0 0 0 / 20%);

      .img-holder img {
        transform: scale(1.09);
      }
    }

    .img-holder {
      display: block;
      overflow: hidden;
      border-radius: 20px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s;
      }
    }

    .article-body {
      display: grid;
      grid-template-rows: 1fr;
      width: 100%;
      height: 100%;
      padding: 15px 0;
      @media (min-width: 768px) {
        padding: 25px 0;
      }

      @media (min-width: 992px) {
        padding: 25px 15px 15px;
      }
    }

    .article-title {
      display: block;

      display: block;
      margin-bottom: 15px;
      color: #19191b;
      @media (min-width: 768px) {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      }
    }

    .article-footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .d-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .author-img {
      overflow: hidden;
      width: 35px;
      height: 35px;
      margin-right: 8px;
      border: 3px solid #fff;
      border-radius: 100%;
      box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
      flex-shrink: 0;
      @media (min-width: 768px) {
        width: 50px;
        height: 50px;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .author-name {
      font-weight: 500;
      color: #19191b;
    }

    time,
    .author-name {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
