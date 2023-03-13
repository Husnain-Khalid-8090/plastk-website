import { css } from 'linaria';

export const confirmationModal = css`
  position: relative;
  .header {
    width: 100%;
    margin-bottom: 18px;
    padding: 0 38px 0 0;
    box-shadow: none !important;
    background: none !important;

    @media (min-width: 992px) {
      margin-bottom: 30px;
    }
  }

  .title {
    display: block;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .btn-holder {
    display: flex;
    justify-content: space-between;

    .btn-gray,
    .btn-blue {
      width: 48%;
      min-width: inherit;
      font-size: 16px;

      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
  }

  .btn-blue,
  .btn-gray {
    display: inline-block;
    vertical-align: top;
    min-width: 200px;
    width: auto;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    // font-family: PlusJakartaSans;
    padding: 15px;
    text-transform: capitalize;
    color: #fff;
    position: relative;
    text-align: center;
    border: 0;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    border-radius: 12px;
    background: #2f80ed;
    transition: all linear 0.3s;

    @media (min-width: 768px) {
      width: 100%;
      font-size: 18px;
      line-height: 24px;
    }

    &:hover {
      color: #fff;
      background: #022242;
    }
  }

  .btn-gray {
    color: #6f7c97;
    background: #eff2f8;

    &:hover {
      color: #fff;
      background: #2f80ed;
    }
  }
`;
