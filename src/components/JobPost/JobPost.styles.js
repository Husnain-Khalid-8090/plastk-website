import { css } from 'linaria';

export const jobBox = css`
  font-size: 14px;
  line-height: 18px;
  background: linear-gradient(132.01deg, #212535 0%, #181e2d 100.2%);
  color: var(--white);
  border-radius: 12px;
  padding: 30px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 768px) {
    padding: 30px 40px;
  }

  .title-holder {
    margin-bottom: 30px;

    @media (min-width: 576px) {
      padding-right: 30px;
      margin-bottom: 0;
    }
    @media (min-width: 768px) {
      padding-right: 50px;
    }
  }

  .job-title {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 16px;
    color: var(--primary);
    display: block;
    font-family: var(--headings-font-family);
    font-weight: 500;
  }

  .detail-list {
    display: flex;
    align-items: center;
    margin: 0 -15px;
    li {
      display: flex;
      align-items: center;
      padding: 0 15px;
    }
    i {
      margin-right: 10px;
      font-size: 16px;
      color: var(--primary);
    }
  }
  .btn {
    margin: 0 auto;
    display: block;
    @media (min-width: 576px) {
      margin: 0;
    }
  }
`;
