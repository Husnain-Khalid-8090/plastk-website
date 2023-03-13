import * as React from 'react';
import { cx } from 'linaria';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { securedCardIntroSection, introTextHolder, grid, containerGrid } from './AffiliatesPremiumRewards.styles';
import { container, containerSm } from '../../styles/common';
import Button from '../Button';
import RewardCard from '../RewardCard';

function SecuredCardIntro({ affiliateLink }) {
  return (
    <section className={cx(securedCardIntroSection)}>
      <div className={cx(container, containerSm, containerGrid)}>
        <div className={cx(introTextHolder)}>
          <h2 className="h1">Premium Rewards Program</h2>
          <p>
            The best thing about your Plastk Secured Visa Card is that you’ll earn rewards points on your everyday
            purchases everywhere that Visa is accepted!
          </p>
          <Button type="primary" as={Link} to={affiliateLink} width={227}>
            Apply Now
          </Button>
        </div>
        <div className={cx(grid)}>
          <RewardCard
            title="Cash-back"
            paragraph="Use your points to pay your balance! 250 points = $1, no minimum required. Just easily transfer your points through the app!"
            className="hover"
            onMouseOver={e => e.currentTarget?.classList.remove('hover')}>
            <StaticImage
              loading="eager"
              src="../../images/icon-img12.png"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
          <RewardCard
            title="Merchandise"
            paragraph="Use your points for merchandise from thousands of brand names such as Apple, Sony, LG, Coach and more!">
            <StaticImage
              loading="eager"
              src="../../images/icon-img11.png"
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
              src="../../images/icon-img10.png"
              width={69}
              height={69}
              alt="img description"
            />
          </RewardCard>
          <RewardCard
            title="Charities"
            paragraph="Gift your points to a charity such as Eden Reforestation Projects, a proven non-profit, to create new native forests in locations across the world">
            <StaticImage
              loading="eager"
              src="../../images/icon-img06.svg"
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
