import * as React from 'react';
import { cx } from 'linaria';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { StaticImage } from 'gatsby-plugin-image';
import { container } from '../../styles/common';
import { sentinelWorks, qoutesSlider } from './SentinelWorks.styles';

function SentinelWorks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={cx(container)}>
      <div className={cx(sentinelWorks)}>
        <div className="header">
          <h2 className="no-border">Why Plastk Sentinel Works</h2>
        </div>
        <div className="slider-holder">
          <Slider {...settings} className={cx(qoutesSlider)}>
            <div className="slick-slide">
              <div className="wrap">
                <div className="img-box">
                  <StaticImage loading="eager" src="../../images/img02.png" alt="img-description" />
                </div>
                <div className="text-box">
                  <blockquote>
                    <q>“Helps me understand my credit history and credit scores”</q>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="slick-slide">
              <div className="wrap">
                <div className="img-box">
                  <StaticImage loading="eager" src="../../images/img03.png" alt="img-description" />
                </div>
                <div className="text-box">
                  <blockquote>
                    <q>“Plastk taught me more about my credit than I learnt in school”</q>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="slick-slide">
              <div className="wrap">
                <div className="img-box">
                  <StaticImage loading="eager" src="../../images/img04.png" alt="img-description" />
                </div>
                <div className="text-box">
                  <blockquote>
                    <q>“Plastk taught me more about my credit than I learnt in school”</q>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="slick-slide">
              <div className="wrap">
                <div className="img-box">
                  <StaticImage loading="eager" src="../../images/img06.png" alt="img-description" />
                </div>
                <div className="text-box">
                  <blockquote>
                    <q>“I was able to see any changes to my credit report on a daily basis”</q>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="slick-slide">
              <div className="wrap">
                <div className="img-box">
                  <StaticImage loading="eager" src="../../images/img05.png" alt="img-description" />
                </div>
                <div className="text-box">
                  <blockquote>
                    <q>“I was able to see any changes to my credit report on a daily basis”</q>
                  </blockquote>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default SentinelWorks;
