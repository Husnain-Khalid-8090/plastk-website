import { css } from 'linaria';

export const containerBlog = css`
  max-width: 750px;
  padding-top: 35px;
  padding-bottom: 50px;
`;
export const postDetail = css`
  .go-back-btn {
    font-size: 14px;
    line-height: 1;
    position: absolute;
    top: 30px;
    left: 30px;
    background: var(--black);
    border-radius: 25px;
    color: var(--white);
    padding: 12px 15px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    &:hover {
      text-decoration: none;
      color: var(--white);
      background: var(--primary);
    }
  }
  .image-holder {
    border-radius: 30px 30px 0 0;
    overflow: hidden;
  }

  .position-relative {
    position: relative;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .blog-post-body {
    background: var(--white);
    margin-top: -35px;
    z-index: 1;
    position: relative;
    border-radius: 25px;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    padding: 20px;
    @media (min-width: 768px) {
      padding: 20px 30px;
    }
    h2 {
      color: var(--black);
      &:after {
        display: none;
      }
    }
    a {
      color: var(--primary);
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
      border-radius: 15px;
    }
    p {
      margin-right: 0 !important;
    }
    ul,
    ol {
      margin: 1.5rem 0;
      padding-left: 1.5rem;
    }
    .meta-data-holder {
      margin-bottom: 16px;
      @media (min-width: 768px) {
        gap: 15px;
        align-items: center;
        display: flex;
        justify-content: space-between;
      }
    }
    .meta-data {
      margin-bottom: 20px;
      margin: 0 !important;
      padding: 0 !important;

      @media (min-width: 576px) {
        display: flex;
      }
      li {
        &:not(:last-child) {
          &:after {
            content: '/';
            padding: 0 10px;
          }
        }
      }
    }

    .blog-share-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 0 !important;
      padding: 0 !important;
    }

    .author-info-holder {
      background: #f1f1f1;
      padding: 15px;
      border-radius: 20px;
      text-align: center;
      @media (min-width: 576px) {
        text-align: left;
      }
      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        padding: 20px 30px;
      }
      .author-img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        overflow: hidden;
        flex-shrink: 0;
        margin: 0 auto 20px;
        @media (min-width: 768px) {
          margin: 0 20px 0 0;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }
      .title-holder {
        margin-bottom: 10px;
        @media (min-width: 576px) {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .author-name {
        color: var(--primary);
        font-weight: bold;
        margin-bottom: 12px;
        display: block;
        @media (min-width: 576px) {
          margin-bottom: 0;
        }
      }
      p {
        margin: 0;
      }
      .social-network {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 -6px;
        @media (min-width: 576px) {
          justify-content: flex-start;
        }
        @media (min-width: 768px) {
          font-size: 20px;
          line-height: 24px;
        }
        li {
          padding: 0 6px;
        }
        a {
          transition: transform 0.3s linear;
          &:hover {
            transform: scale(1.04);
            color: var(--primary);
          }
        }
        img {
          border-radius: 0;
        }
        .fb {
          a {
            color: #1877f2;
          }
        }
        .twitter {
          a {
            color: #1da1f2;
          }
        }
        .in {
          a {
            color: #0a66c2;
          }
        }
      }
      .author-bio {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;
