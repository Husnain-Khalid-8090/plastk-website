import { css } from '@linaria/core';

export const btnHolder = css`
  display: flex;
  gap: 12px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    padding: 0;
    margin-bottom: 30px;
  }
  @media (min-width: 992px) {
    gap: 20px;
  }

  a {
    transition: transform 0.3s linear;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const btnCenter = css`
  justify-content: center;
`;
