import * as React from 'react';
import { cx } from 'linaria';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { StaticImage } from 'gatsby-plugin-image';
import {
  infoSection,
  tabsLinks,
  tabsContent,
  desktopBlock,
  mobileBlock,
  mobileSlider,
  textSlider,
  macSlider,
} from './InfoSection.styles';
import { moengage } from '../../../utils/moengageEvents';

function InfoSection() {
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);

  const [desktop, setDesktop] = React.useState(true);

  const textSlideSetting = {
    arrows: false,
    // rows: 0,
    speed: 500,
    fade: true,
    autoplay: true,
  };

  const imgSlideSetting = {
    speed: 500,
    // rows: 0,
    dots: true,
    autoplay: true,
    arrows: false,
  };

  const showDesktop = () => setDesktop(true);
  const showMobile = () => setDesktop(false);

  return (
    <div className={cx(infoSection)}>
      <ul className={cx(tabsLinks)}>
        <li className={`${desktop && 'active'}`}>
          <button
            type="button"
            onClick={() => {
              showDesktop();
              moengage.sentinelDesktop();
            }}>
            Desktop
          </button>
        </li>
        <li className={`${!desktop && 'active'}`}>
          <button
            type="button"
            onClick={() => {
              showMobile();
              moengage.sentinelMobile();
            }}>
            Mobile
          </button>
        </li>
      </ul>
      <div className={cx(tabsContent)}>
        {desktop && (
          <div className={cx(desktopBlock)}>
            <Slider asNavFor={nav2} ref={slider1 => setNav1(slider1)} {...textSlideSetting} className={cx(textSlider)}>
              <div className="slide">
                <strong className="title">Credit View</strong>
                <p>Access your Full Equifax Credit Report on our powerful cardholder portal through Plastk Sentinel</p>
              </div>
              <div className="slide">
                <div className="text">
                  <strong className="title">Credit Watch</strong>
                  <p>Monitor what’s happening on your Credit Report & get alerts on any changes with Plastk Sentinel</p>
                </div>
              </div>
              <div className="slide">
                <div className="text">
                  <strong className="title">Credit Education</strong>
                  <p>
                    Plastk Sentinel offers credit insights, videos & blogs where you can learn all about improving your
                    Credit
                  </p>
                </div>
              </div>
            </Slider>
            <Slider
              asNavFor={nav1}
              ref={slider2 => setNav2(slider2)}
              slidesToShow={1}
              swipeToSlide
              focusOnSelect
              {...imgSlideSetting}
              className={cx(macSlider)}>
              <div className="slick-slide">
                <StaticImage loading="eager" src="../../images/slide-bg-img1.jpg" alt="slide" />
              </div>
              <div className="slick-slide">
                <StaticImage loading="eager" src="../../images/slide-bg-img.jpg" alt="slide" />
              </div>
              <div className="slick-slide">
                <StaticImage loading="eager" src="../../images/slide-bg-img1.jpg" alt="slide" />
              </div>
            </Slider>
          </div>
        )}

        {!desktop && (
          <div className={cx(mobileBlock)}>
            <Slider asNavFor={nav2} ref={slider1 => setNav1(slider1)} {...textSlideSetting} className={cx(textSlider)}>
              <div className="slide">
                <div className="text">
                  <strong className="title">Credit View</strong>
                  <p>
                    Access your Full Equifax Credit Report on our powerful cardholder portal through Plastk Sentinel
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="text">
                  <strong className="title">Credit Watch</strong>
                  <p>Monitor what’s happening on your Credit Report & get alerts on any changes with Plastk Sentinel</p>
                </div>
              </div>
              <div className="slide">
                <div className="text">
                  <strong className="title">Credit Education</strong>
                  <p>
                    Plastk Sentinel offers credit insights, videos & blogs where you can learn all about improving your
                    Credit
                  </p>
                </div>
              </div>
            </Slider>
            <div className="mobile-holder">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={1}
                swipeToSlide
                focusOnSelect
                {...imgSlideSetting}
                className={cx(mobileSlider)}>
                <div className="slick-slide">
                  <StaticImage
                    loading="eager"
                    className="desk-hide"
                    src="../../images/credit-view-img.png"
                    alt="slide"
                  />
                  <StaticImage
                    loading="eager"
                    className="tab-hide"
                    src="../../images/credit-view-mobile.png"
                    alt="slide"
                  />
                </div>
                <div className="slick-slide">
                  <StaticImage
                    loading="eager"
                    className="desk-hide"
                    src="../../images/credit-watch-img.png"
                    alt="slide"
                  />
                  <StaticImage
                    loading="eager"
                    className="tab-hide"
                    src="../../images/credit-watch-mobile.png"
                    alt="slide"
                  />
                </div>
                <div className="slick-slide">
                  <StaticImage
                    loading="eager"
                    className="desk-hide"
                    src="../../images/credit-education-img.png"
                    alt="slide"
                  />
                  <StaticImage
                    loading="eager"
                    className="tab-hide"
                    src="../../images/credit-education-mobile.png"
                    alt="slide"
                  />
                </div>
              </Slider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoSection;
