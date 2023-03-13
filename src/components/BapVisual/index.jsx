import * as React from 'react';
import { cx } from 'linaria';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';
import { container } from '../../styles/common';
import { bapVisualBlock, holder } from './BapVisual.styles';

function BapVisual() {
  const style = {
    backgroundImage: "url('https://d2ef97fwq3c8g5.cloudfront.net/web_images/bap-visual-bg2.jpg')",
  };
  return (
    <div className={cx(bapVisualBlock)}>
      <div className="visual-bg-img" style={style} />
      <div className={cx(container, holder)}>
        <div className="text-holder">
          <div className="bap-logo d-lg-none">
            <img
              loading="eager"
              src="https://d2ef97fwq3c8g5.cloudfront.net/web_images/bap-logo2.svg"
              alt="bap"
              className="img-fluid"
            />
          </div>
          <div className="inner-holder">
            <strong className="title">
              Connect your business to
              <br className="d-block d-lg-none" /> customers everywhere with
            </strong>
            <div className="logo-heading">
              <StaticImage loading="eager" className="img" src="../../images/bap-logo2.svg" />
              <strong>Plastk Business Accelerator</strong>
            </div>
            <p>
              The Plastk Business Accelerator is an all new, digital platform that will increase your reach & drive more
              customers to spend and engage with your brand.
            </p>
            <div className="bap-feature-list">
              <div className="bap-feature">
                <span className="feature-title"> Engage</span>
                <span className="sub-title">
                  with a larger <br /> customer base
                </span>
              </div>
              <div className="bap-feature">
                <span className="feature-title"> Build</span>
                <span className="sub-title">
                  custom <br /> promotions
                </span>
              </div>
              <div className="bap-feature">
                <span className="feature-title"> Reward</span>
                <span className="sub-title">
                  your business & <br /> Customers
                </span>
              </div>
            </div>
            <Button
              as="a"
              rounded
              width="230"
              type="darkblack"
              href={`${process.env.GATSBY_BUSINESS}`}
              target="_blank"
              rel="noreferrer">
              Business Login
            </Button>
            <p className="business-signup-text">
              Don&apos;t have an account yet?{' '}
              <a href={`${process.env.GATSBY_BUSINESS}/sign-up`} target="_blank" rel="noreferrer">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BapVisual;
