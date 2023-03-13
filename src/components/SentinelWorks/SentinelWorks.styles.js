import { css } from 'linaria';

export const sentinelWorks = css`
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
  z-index: 1;
  background: #fff;

  @media (min-width: 992px) {
    margin-bottom: 50px;
  }

  .header {
    text-align: center;
    margin: 0 0 25px;
    box-shadow: none !important;
    background: none !important;

    @media (min-width: 992px) {
      margin: 0 0 50px;
    }

    @media (min-width: 1440px) {
      margin: 0 0 80px;
    }
  }

  h2 {
    color: var(--black);
  }

  .slider-holder {
    overflow: hidden;
  }
`;

export const qoutesSlider = css`
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 576px) {
    min-height: 360px;
  }
  @media (min-width: 992px) {
    min-height: 420px;
  }
  @media (min-width: 1200px) {
    min-height: 520px;
  }

  .slick-dots {
    display: none !important;
  }

  .slick-list {
    padding-bottom: 30px !important;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    // width: 33.33%;
    width: 100% !important;
    float: none;
    transition: all linear 0.3s;

    &.slick-current {
      @media (min-width: 992px) {
        padding-bottom: 100px !important;
      }

      @media (min-width: 1200px) {
        padding-bottom: 150px !important;
      }
    }

    .wrap {
      width: 100%;
      padding: 0 10px;
      position: relative;

      @media (min-width: 992px) {
        padding: 0 20px;
      }
    }
  }

  .img-box {
    max-width: 200px;
    margin: 0 auto;

    @media (min-width: 992px) {
      max-width: 220px;
    }
    @media (min-width: 1200px) {
      max-width: 300px;
    }

    .gatsby-image-wrapper {
      overflow: visible;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      filter: drop-shadow(0px 23px 15px rgba(176, 183, 195, 0.5));
    }
  }

  .text-box {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    width: 250px;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    font-style: italic;
    color: #fff;
    margin: 0 auto;
    padding: 15px 17px;
    border-radius: 50px 0;
    background: #9dcb4c;
    z-index: 1;

    @media (min-width: 576px) {
      font-size: 13px;
    }
    @media (min-width: 768px) {
      width: 300px;
      font-size: 14px;
    }
    @media (min-width: 992px) {
      font-size: 16px;
      line-height: 22px;
      padding: 20px 17px;
    }
  }

  blockquote {
    margin: 0;
    padding: 0;

    q {
      overflow: hidden;
      height: 44px;
      display: block;
      quotes: none;
      margin: 0;
      padding: 0;
    }
  }
`;
