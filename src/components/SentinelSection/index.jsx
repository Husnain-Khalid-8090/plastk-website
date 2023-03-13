import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { container } from '../../styles/common';
import Button from '../Button';
import {
  badge,
  dNone,
  flex,
  imgHolder,
  sentinelSection,
  subTitle,
  text,
  textHolder,
  title,
  titleBox,
} from './SentinelSection.styles';

function SentinelSection() {
  const style = {
    scrollMarginTop: '70px',
  };
  return (
    <section id="sentinel-section" style={style} className={cx(sentinelSection)}>
      <div className={cx(container, flex)}>
        <div className={cx(imgHolder)}>
          <Link to="/plastk-sentinel" onClick={() => moengage.sentinalIntroducingImageClick()}>
            <StaticImage loading="eager" src="../../images/ads-img01.png" width={580} alt="img description" />
          </Link>
        </div>
        <div className={cx(textHolder)}>
          <h2 className="no-border">
            <Link to="/plastk-sentinel" onClick={() => moengage.sentinalIntroducingHeading()}>
              Introducing
            </Link>
          </h2>
          <div className={cx(titleBox)}>
            <StaticImage
              loading="eager"
              layout="fixed"
              className={cx(badge)}
              src="../../images/badge.png"
              width={40}
              alt="img description"
            />
            <div className={cx(text)}>
              <strong className={cx(title)}>Plastk Sentinel</strong>
              <strong className={cx(subTitle)}>Take Control Of Your Credit</strong>
            </div>
          </div>
          <p>The best way to monitor, track and review your full credit report</p>
          <div className={cx(imgHolder, dNone)}>
            <Link to="/plastk-sentinel">
              <StaticImage loading="eager" src="../../images/ads-img01.png" width={580} alt="img description" />
            </Link>
          </div>
          <Button
            as={Link}
            type="gradient"
            to="/plastk-sentinel"
            onClick={() => moengage.sentinelIntroducingPlastkButton()}>
            Learn More About Plastk Sentinel
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SentinelSection;
