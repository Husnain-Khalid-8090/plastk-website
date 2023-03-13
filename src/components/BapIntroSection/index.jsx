import * as React from 'react';
import { cx } from 'linaria';
import { StaticImage } from 'gatsby-plugin-image';
import { container } from '../../styles/common';
import { bapIntroblock, holder, imgHolder, textHolder } from './BapIntroSection.styles';

function BapIntroSection() {
  return (
    <div className={cx(bapIntroblock)}>
      <div className={cx(container, holder)}>
        <div className={cx(imgHolder)}>
          <StaticImage loading="eager" src="../../images/img-01.png" alt="img" className="img-fluid" />
        </div>
        <div className={cx(textHolder)}>
          <h2 className="no-border font-40 pb-0">The Best Customers Pay With Plastk</h2>
          <p>
            Plastk customers use their Secured Credit Card to make purchases at your business and earn rewards.
            Customers are rewarded for their spending and so are you! You can get started in 3 easy steps...
          </p>
        </div>
      </div>
    </div>
  );
}

export default BapIntroSection;
