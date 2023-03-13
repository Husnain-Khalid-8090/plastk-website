import { css } from 'linaria';

export const searchForm = css`
  position: relative;
  margin-bottom: 25px;
`;
export const searchBtn = css`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: var(--black);
`;

export const searchField = css`
  width: 100%;
  border: 1px solid var(--black);
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  padding: 6px 0;
`;

export const faqSection = css`
  padding-top: 50px;
  padding-bottom: 50px;
  h3 {
    text-align: center;
    font-weight: 500;
    margin-bottom: 60px;
  }
`;

export const accordion = css``;

export const accordionToggle = css`
  border: none;
  background: #c6ed87;
  outline: none;
  width: 100%;
  font-size: 20px;
  line-height: 25px;
  position: relative;
  padding: 10px 15px;
  color: var(--white);
  border-radius: 5px;
  font-family: var(--headings-font-family);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const innerAccordionToggle = css`
  border: none;
  background: none;
  width: 100%;
  font-family: var(--headings-font-family);
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  padding: 15px 0 15px 0;
  color: var(--black);
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: var(--primary);
  }
`;

export const accordionItem = css`
  margin-bottom: 20px;
`;

export const accordionContent = css``;

export const questionHolder = css`
  border-bottom: 1px solid rgba(128, 173, 220, 0.22);
`;

export const answerHolder = css`
  padding-bottom: 15px;
`;

export const innerAccordionHolder = css`
  padding: 10px 20px;
`;

export const loadingEllipsis = css`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto;
  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #000;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    &:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    &:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }
`;

export const paginationHolder = css`
  margin-top: 20px;
`;
