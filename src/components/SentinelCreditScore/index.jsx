/* eslint-disable no-param-reassign */
import { Link } from 'gatsby';
import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { container } from '../../styles/common';
import Button from '../Button';
import ProgressIndicator from '../ProgressIndicator';
import { btnHolder, creditScore, flex, imgHolder, textHolder } from './SentinelCreditScore.styles';

function SentinelCreditScore() {
  return (
    <section className={cx(creditScore)}>
      <div className={cx(container, flex)}>
        <div className={cx(textHolder)}>
          <h2 className="h1" title="Get credit insights to have the tools to build/rebuild your credit">
            What’s Your Credit Score?
          </h2>
          <p>
            Knowledge is Power, knowing your credit score is the fastest way to improve your credit score. Subscribe to
            Plastk Sentinel to get your full credit report.
          </p>
          <Button
            type="secondary"
            as={Link}
            to="/plastk-sentinel"
            onClick={() => moengage.learnMoreAboutPlastkSentinelCreditScore()}>
            Learn More About Plastk Sentinel
          </Button>
        </div>
        <div className={cx(imgHolder)}>
          <ProgressIndicator />
        </div>
      </div>
      <div className={cx(btnHolder)}>
        <Button width={228} as={Link} type="primary" to="/sign-up" onClick={() => moengage.applyNowCreditScore()}>
          Apply Now
        </Button>
      </div>
    </section>
  );
}

export default SentinelCreditScore;
