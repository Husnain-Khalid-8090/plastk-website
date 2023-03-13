/* eslint-disable no-useless-concat */
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import * as React from 'react';

import { useIsInViewport } from '../../helpers/useIsInViewport';
import { container } from '../../styles/common';
import PlastkAppBtns from '../PlastkAppBtns';
import { ScrollPercentage } from '../ScrollPercentage';
import { appSection, appSectionHolder } from './AppSection.styles';

function AppSection() {
  const parentRef = React.useRef(null);
  const section1 = React.useRef(null);
  const section2 = React.useRef(null);
  const section3 = React.useRef(null);
  const section4 = React.useRef(null);
  const appEnd = React.useRef(null);
  const isInViewport = useIsInViewport(parentRef, 0.23);
  const isInViewport1 = useIsInViewport(section1, 0.5);
  const isInViewport2 = useIsInViewport(section2, 0.5);
  const isInViewport3 = useIsInViewport(section3, 0.5);
  const isInViewport4 = useIsInViewport(section4, 0.5);
  const isInViewportAppEnd = useIsInViewport(appEnd, 0.9);

  const changingBorder = e => {
    document.getElementById('cgrade').style.transform = `translateY(` + `-${e * 65}%` + `)`;
    document.getElementById('phone-white-shine').style.top = `calc(-50% + ${1500 * e}px)`;
    document.getElementById('progress-bar-indicator').style.transform = `translateX(${e * 100}%` + `)`;
  };
  const sectionbg1 = {
    backgroundImage: `url('https://d2ef97fwq3c8g5.cloudfront.net/web_images/app_images/app_screen_01.jpg')`,
  };
  const sectionbg2 = {
    backgroundImage: `url('https://d2ef97fwq3c8g5.cloudfront.net/web_images/app_images/app_screen_02.jpg')`,
  };
  const sectionbg3 = {
    backgroundImage: `url('https://d2ef97fwq3c8g5.cloudfront.net/web_images/app_images/app_screen_03.jpg')`,
  };
  const sectionbg4 = {
    backgroundImage: `url('https://d2ef97fwq3c8g5.cloudfront.net/web_images/app_images/app_screen_04.jpg')`,
  };
  return (
    <section className={cx(appSectionHolder)}>
      <div className="app-intro-holder">
        <div className={cx(container)}>
          <h2 className="center" title="Download Plastk's iOS & Android app">
            Plastk App{' '}
          </h2>
          <div className="intro-text">
            <p className="mb-0">
              Plastk App gives you the tools you need to earn points while strengthening your <br /> credit. The easy to
              use app lets you:
            </p>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className={cx(appSection, 'plastk-app-section')} ref={parentRef}>
          <ScrollPercentage threshold={0.2} as="div" onChange={percentage => changingBorder(percentage)}>
            <div
              className={`phone-container d-md-block ${isInViewport || isInViewport4 ? 'active' : ''} ${
                isInViewportAppEnd ? 'at-end' : ''
              }`}>
              <div className="phone-base ">
                <div className="phone-gradients-container">
                  <div className="phone-color-gradient" id="cgrade" />
                  <div className="phone-black-gradient" />
                </div>
                <div className="phone-white-shine-container">
                  <div className="phone-white-shine" id="phone-white-shine" />
                </div>
                <div className="phone-bar" />
                <div className="app-screens">
                  <div className="app-screens-inner">
                    <div
                      className={`img-holder screen-one ${isInViewport1 ? 'active' : ''}`}
                      ref={section1}
                      style={sectionbg1}
                    />
                    <div
                      className={`img-holder screen-one screen-two ${isInViewport2 ? 'active' : ''}`}
                      ref={section2}
                      style={sectionbg2}
                    />
                    <div
                      className={`img-holder screen-one ${isInViewport3 ? 'active' : ''}`}
                      ref={section3}
                      style={sectionbg3}
                    />
                    <div
                      className={`img-holder screen-one ${isInViewport4 ? 'active' : ''}`}
                      ref={section4}
                      style={sectionbg4}
                    />
                    <div className="img-holder splash">
                      <div className="logo">
                        <StaticImage
                          loading="eager"
                          src="../../images/logo-white.svg"
                          alt="visa"
                          width={122}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-container">
                <div className="progress-checks">
                  <div className="check" />
                  <div className="check" />
                  <div className="check" />
                  <div className="check" />
                </div>
                <div className="app-progress-bar">
                  <div className="progress-container-inner" id="progress-bar-indicator" />
                </div>
              </div>
              <div className="app-download-holder">
                <PlastkAppBtns noMargin />
              </div>
            </div>
            <div className={cx(container, 'description-container')}>
              <div className="inner-container">
                <div className={`description-section ${isInViewport1 ? 'active' : ''}`} ref={section1}>
                  <div className="mobile-img">
                    <StaticImage
                      loading="eager"
                      layout="fixed"
                      src="../../images/app_screen_01_mobile.jpg"
                      alt="Download Plastk's iOS & Android app to conveniently track your spending habits , My card"
                      width={297}
                      height={400}
                    />
                  </div>
                  <div className="desc-holder">
                    <h3 className="title">Check your card balance and your available credit with ease</h3>
                  </div>
                </div>
                <div className={`description-section ${isInViewport2 ? 'active' : ''}`} ref={section2}>
                  <div className="mobile-img">
                    <StaticImage
                      loading="eager"
                      layout="fixed"
                      src="../../images/app_screen_02_mobile.jpg"
                      alt="Download Plastk's iOS & Android app to conveniently track your spending habits , My card"
                      width={297}
                      height={400}
                    />
                  </div>
                  <div className="desc-holder">
                    <h3 className="title">Check your Plastk Points and see how much you&apos;ve earned</h3>
                  </div>
                </div>
                <div className={`description-section ${isInViewport3 ? 'active' : ''}`} ref={section3}>
                  <div className="mobile-img">
                    <StaticImage
                      loading="eager"
                      layout="fixed"
                      src="../../images/app_screen_03_mobile.jpg"
                      alt="Download Plastk's iOS & Android app to conveniently track your spending habits , My card"
                      width={297}
                      height={400}
                    />
                  </div>
                  <div className="desc-holder">
                    <h3 className="title">Review your spending habits to set clear budgets</h3>
                  </div>
                </div>
                <div className={`description-section  ${isInViewport4 ? 'active' : ''}`} ref={section4}>
                  <div className="mobile-img">
                    <StaticImage
                      loading="eager"
                      layout="fixed"
                      src="../../images/app_screen_04_mobile.jpg"
                      alt="Download Plastk's iOS & Android app to conveniently track your spending habits , My card"
                      width={297}
                      height={400}
                    />
                  </div>
                  <div className="desc-holder">
                    <h3 className="title">View Card Statements, Current transactions, and make payments</h3>
                  </div>
                </div>
              </div>
            </div>
          </ScrollPercentage>
        </div>
        <div ref={appEnd} className="app-end-block" />
      </div>
    </section>
  );
}

export default AppSection;
