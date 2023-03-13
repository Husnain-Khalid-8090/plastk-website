import { css } from 'linaria';

export const viewAgreementDiv = css`
  .plastk-docs-toggle {
    color: black;
    text-shadow: 1px 0 0 currentColor;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .plastk-docs-toggle {
    cursor: pointer;
  }
  .plastk-doc-active {
    color: #aae15d;
  }
  .icon-download {
    margin-left: 10px;
    background: #aae15d;
    border-radius: 100%;
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    padding: 8px;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
`;

export const btnHolder = css`
  display: block;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: flex;
  }

  .plastk-docs-toggle {
    margin: 10px 0;

    @media (min-width: 768px) {
      margin: 0;
    }
  }
`;

export const agreementHolder = css`
  max-height: 250px;
  overflow: auto;
  border: 1px solid #eee;
  padding: 20px 15px;
  margin-bottom: 25px;
  border-radius: 5px;

  @media (min-width: 768px) {
    padding: 20px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #ebebeb;
  }
`;

export const disclaimerText = css`
  font-size: var(--font-size-sm);
  line-height: calc(var(--font-size-sm) + 5px);
  margin-bottom: 20px;
  margin-top: 20px;
  color: var(--black);
  span {
    color: var(--primary);
  }
`;
