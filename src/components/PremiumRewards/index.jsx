import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { container, containerSm } from '../../styles/common';
import Button from '../Button';
import RewardCard from '../RewardCard';
import { btnHolder, colWrap, head, rewardsSection } from './PremiumRewards.styles';

function PremiumRewards() {
  return (
    <section className={cx(rewardsSection)}>
      <div className={cx(container, containerSm)}>
        <div className={cx(head)}>
          <h2 className="h1 center" title="Earn Premium Rewards on your everyday purchases with Plastk!">
            Premium Rewards
          </h2>
          <p>
            The best thing about your Plastk Secured Credit Card is that you’ll earn rewards points on your everyday
            purchases everywhere that Visa is accepted!
          </p>
        </div>
        <div className={cx(colWrap)}>
          <RewardCard
            title="Cash-back"
            paragraph="Use your points to pay your balance! 250 points = $1, no minimum required. Just easily transfer your points through the app!"
            className="hover"
            onMouseOver={e => e.currentTarget?.classList.remove('hover')}>
            <StaticImage
              loading="eager"
              src="../../images/icon-img03.svg"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
          <RewardCard
            title="Merchandise"
            paragraph="Use your points for merchandise from thousands of brand names such as Apple, Sony, LG, Coach and more.">
            <StaticImage
              loading="eager"
              src="../../images/icon-img01.svg"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
          <RewardCard
            title="Hotel & Travel"
            paragraph="Don't let your trips break the bank! Use points to book flights within Canada or anywhere in the world.">
            <StaticImage
              loading="eager"
              src="../../images/icon-img02.svg"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
          <RewardCard
            title="Exclusive Events"
            paragraph="Special events for Plastk cardholders at local businesses like restaurants, theaters, concerts etc.">
            <StaticImage
              loading="eager"
              src="../../images/icon-img04.svg"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
          <RewardCard
            title="Gift Cards"
            paragraph="Transform your points to a gift card from major retailers such as Amazon, Tim Hortons, Nike and more!">
            <StaticImage
              loading="eager"
              src="../../images/icon-img05.svg"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
          <RewardCard
            title="Charities"
            paragraph="Gift your points to a charity such as Eden Reforestation Projects, a proven non-profit, to create new native forests in locations across the world.">
            <StaticImage
              loading="eager"
              src="../../images/icon-img06.svg"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
        </div>
        <div className={cx(btnHolder)}>
          <Button width={228} as={Link} type="primary" to="/sign-up" onClick={() => moengage.premiumRewardsApplyNow()}>
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PremiumRewards;
