import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { container, containerSm } from '../../styles/common';
import Button from '../Button';
import RewardCard from '../RewardCard';
import { containerGrid, grid, introTextHolder, securedCardIntroSection } from './SecuredCardIntro.styles';

function SecuredCardIntro() {
  return (
    <section id="secured-card-intro" className={cx(securedCardIntroSection)}>
      <div className={cx(container, containerSm, containerGrid)}>
        <div className={cx(introTextHolder)}>
          <h2 className="h1">What Is A Secured Credit Card?</h2>
          <p>
            A secured credit card is just like a “regular” credit card but it is secured by a deposit which is used as
            collateral(hence the name).Card providers provide these secured credit cards to their customers to help them
            build, rebuild or strengthen their credit profile. The card gets issued after the security deposit is
            received and the card limit is determined by the security amount.
          </p>
          <Button
            type="primary"
            as={Link}
            to="/sign-up"
            width={227}
            onClick={() => {
              moengage.secureCreditCardApplyNowMiddle();
            }}>
            Apply Now
          </Button>
        </div>
        <div className={cx(grid)}>
          <RewardCard
            title="Get Approved"
            paragraph="With a secured card, you can get approved with imperfect credit."
            className="hover"
            onMouseOver={e => e.currentTarget?.classList.remove('hover')}>
            <StaticImage
              loading="eager"
              src="../../images/icon-img07.png"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
          <RewardCard
            title="Build your Credit"
            paragraph="Secured Cards report to credit bureaus like Equifax and Transunion so as you use your card responsibly, you will build your credit history.">
            <StaticImage
              loading="eager"
              src="../../images/icon-img08.png"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
          <RewardCard
            title="Cash-back"
            paragraph="Use your points to pay your balance! 250 points = $1, minimum 2500 pts to redeem. Easily transfer your points through the cardholder portal!">
            <StaticImage
              loading="eager"
              src="../../images/icon-img03.svg"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
          <RewardCard
            title="Your Security"
            paragraph="Your deposit is only used if you default on payments but it will not be touched if you pay off your card as normal.">
            <StaticImage
              loading="eager"
              src="../../images/icon-img09.png"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
        </div>
      </div>
    </section>
  );
}

export default SecuredCardIntro;
