import * as React from 'react';
import { cx } from 'linaria';
import { StaticImage } from 'gatsby-plugin-image';
import { container } from '../../styles/common';
import { whatIsPlastk, holder, textHolder, imgHolder, lgHidden } from './WhatIsPlastk.styles';

function WhatIsPlastk() {
  return (
    <section className={cx(container)}>
      <div className={cx(whatIsPlastk)}>
        <div className={cx(holder)}>
          <div className={cx(textHolder)}>
            <h2 className="no-border">What is Plastk Sentinel</h2>
            <div className={cx(imgHolder, lgHidden)}>
              <StaticImage loading="eager" src="../../images/img07.png" alt="img description" />
            </div>
            <p>
              A “Sentinel” is expertly designed to provide you with security and protection. Plastk Sentinel is your
              financial shield, providing you best in class service, including credit view, credit watch, and credit
              education to help you monitor, track and review your credit.
            </p>
            <p>
              Get the most out of your credit when you use Plastk Sentinel. Learn about your score and what it means to
              you and your future. We give you an extensive library on how you can improve your score and set yourself
              up for financial success.
            </p>
          </div>
          <div className={cx(imgHolder)}>
            <StaticImage loading="eager" src="../../images/img07.png" alt="img description" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsPlastk;
