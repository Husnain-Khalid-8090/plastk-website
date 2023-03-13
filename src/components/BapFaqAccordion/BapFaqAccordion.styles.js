import { css } from 'linaria';

export const faqSection = css`
  max-width: 850px;
  margin: 0 auto 40px;

  @media (min-width: 768px) {
    margin: 0 auto 50px;
  }
  @media (min-width: 1200px) {
    margin: 0 auto 80px;
  }
`;
export const accordion = css`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 16px;
  line-height: 25px;
  color: var(--dark-black1);

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
export const accordionItem = css`
  margin: 0;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: var(--black);
  transition: linear 0.3s;
`;
export const accordionOpener = css`
  display: block;
  width: 100%;
  position: relative;
  font-size: 16px;
  line-height: 25px;
  font-weight: 500;
  text-align: left;
  padding: 15px 20px 15px 0;
  color: var(--dark-black1);
  box-shadow: none;
  outline: none;
  border: 0;
  transition: linear 0.3s;
  background: none;

  @media (min-width: 768px) {
    font-size: 20px;
    padding: 20px 20px 20px 0;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 30px;
  }

  .ico {
    font-size: 23px;
    line-height: 1;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

export const accordionContent = css`
  width: 100%;
  padding-bottom: 20px;
  transition: linear 0.3s;
`;
