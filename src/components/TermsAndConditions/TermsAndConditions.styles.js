import { css } from 'linaria';

export const tAndCSection = css`
  h3 {
    text-align: center;
    font-weight: normal;
  }
  .toc-list {
    font-family: var(--headings-font-family);
    font-weight: 500;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
    li {
      position: relative;
      &:hover {
        &:after {
          width: 100%;
        }
      }
      &:before,
      &:after {
        transition: all 0.3s linear;
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: rgba(128, 173, 220, 0.22);
      }
      &:after {
        z-index: 2;
        width: 0;
        background: var(--primary);
      }
    }
    a {
      position: relative;
      padding: 15px 60px 15px 0;
      display: block;
      color: var(--black);
      text-decoration: none;
      &:after {
        width: 30px;
        height: 30px;
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: url('../../images/pdf-icon.svg');
        background-size: 100% 100%;
      }
    }
  }
`;

export const containerTandC = css`
  max-width: 768px;
  padding-top: 50px;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
