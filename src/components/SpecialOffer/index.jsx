import { Link } from 'gatsby';
import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { container } from '../../styles/common';
import Button from '../Button';
import { btnHolder, offerSection } from './SpecialOffer.styles';

function SpecialOffer() {
  return (
    <section className={cx(offerSection)}>
      <div className={cx(container, 'container-indent')}>
        <h2 className="h1">Special Offers</h2>
        <div className="offer-box">
          <h3 className="title">0% APR</h3>
          <p className="mb-0">
            Receive 0% Interest Rate on purchases for the first 3 months when you sign up for Plastk Secured Credit
            Card.
          </p>
        </div>
        <div className="offer-box">
          <h3 className="title">Sign up Bonus:</h3>
          <p className="mb-0">
            For a limited time, when you get approved for your Plastk Secured Visa card, you will get 5,000 points,
            redeemable after 3 months, thats $20! It&apos;s that easy, just fill out our application, wait for approval
            and start earning points!
          </p>
        </div>
        <div className={cx(btnHolder)}>
          <Button
            type="primary"
            width="230"
            as={Link}
            to="/sign-up"
            onClick={() => {
              moengage.secureCreditCardApplyNowBottom();
            }}>
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
