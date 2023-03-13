import * as React from 'react';
import { cx } from 'linaria';
import { StaticImage } from 'gatsby-plugin-image';
import { container } from '../../styles/common';
import { offerSection, offerContent } from './SentinelOffers.styles';

function SentinelOffers() {
  return (
    <section className={cx(offerSection)}>
      <StaticImage loading="eager" className="circle-img1" src="../../images/circle-img01.png" alt="img description" />
      <StaticImage loading="eager" className="circle-img2" src="../../images/circle-img02.png" alt="img description" />
      <div className={cx(container)}>
        <div className="header">
          <h2 className="no-border">What Plastk Sentinel Offers</h2>
        </div>
        <div className={cx(offerContent)}>
          <div className="logo-box">
            <StaticImage loading="eager" className="logo-img" src="../../images/badge.png" alt="img-description" />
            <span className="text">Plastk Sentinel</span>
          </div>
          <div className="text-box credit-view">
            <StaticImage
              loading="eager"
              className="img eye-ico"
              src="../../images/eye-icon.svg"
              alt="img-description"
            />
            <strong className="title">Credit View</strong>
            <p>Access your full credit report powered by Equifax</p>
          </div>
          <div className="text-box credit-watch">
            <StaticImage
              loading="eager"
              className="img search-ico"
              src="../../images/search-icon.svg"
              alt="img-description"
            />
            <strong className="title">Credit Watch</strong>
            <p>
              Monitor the changes on your credit report and get daily alerts about what’s affecting your credit score.
            </p>
          </div>
          <div className="text-box credit-education">
            <StaticImage
              loading="eager"
              className="img book-ico"
              src="../../images/book-icon.svg"
              alt="img-description"
            />
            <strong className="title">Credit Education</strong>
            <p>Plastk Sentinel offers relevant credit tips & insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SentinelOffers;
