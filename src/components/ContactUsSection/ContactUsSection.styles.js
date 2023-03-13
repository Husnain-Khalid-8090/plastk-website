import { css } from 'linaria';

export const contactUsStyles = css`
  background: #ace260;
  box-shadow: 0 72px 35px -35px rgba(170, 225, 93, 0.3);
  border-radius: 12px;
  margin: 50px auto 50px;
  padding: 25px 25px 130px;
  color: var(--white);
  position: relative;
  min-height: 220px;
  overflow: hidden;
  display: flex;
  align-items: center;
  max-width: 500px;
  @media (min-width: 768px) {
    padding: 25px 50px;
    margin: 100px auto 100px;
    max-width: 900px;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -69px;
    right: -62px;
    background: url('../../images/contact-us-illustration.svg');
    background-size: 100% 100%;
    width: 250px;
    height: 250px;
    transform: scaleX(-1);
    @media (min-width: 768px) {
      width: 345px;
      height: 345px;
      bottom: -101px;
      right: -93px;
    }
  }
  .msg {
    margin-bottom: 10px;
    display: block;
    font-size: 23px;
    line-height: 28px;
    @media (min-width: 768px) {
      font-size: 29px;
      line-height: 37px;
    }
  }
  .contact-wrap {
    max-width: 360px;
    text-align: center;
    margin: 0 auto;
    @media (min-width: 768px) {
      text-align: left;
      margin: 0;
    }
  }
  .contact-us-list {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 22px;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    li {
      position: relative;
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 15px;
        @media (min-width: 768px) {
          margin-right: 25px;
          margin-bottom: 0;
        }
        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          font-size: 20px;
        }
      }
    }
    a {
      color: var(--white);
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
    .material-icons {
      margin-right: 10px;
      font-size: 16px;
      line-height: 1;
    }
  }
`;
