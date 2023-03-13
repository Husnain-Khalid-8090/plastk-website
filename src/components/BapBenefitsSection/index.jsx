import * as React from 'react';
import { cx } from 'linaria';
import { StaticImage } from 'gatsby-plugin-image';
import { container } from '../../styles/common';
import { benefitsSection, bapStepsList, benefitsList } from './BapBenefitsSection.styles';

function BapBenefitsSection() {
  return (
    <div className={cx(benefitsSection)}>
      <div className={cx(bapStepsList)}>
        <div className="holder">
          <div className="bap-step">
            <span className="bap-step-number">1</span>
            <span className="bap-step-text">
              5-Minute Easy <br /> Sign-Up
            </span>
          </div>
          <div className="bap-step">
            <span className="bap-step-number">2</span>
            <span className="bap-step-text">
              Launch Your <br /> Campaign
            </span>
          </div>
          <div className="bap-step">
            <span className="bap-step-number">3</span>
            <span className="bap-step-text">
              Accelerate Your <br /> Business
            </span>
          </div>
        </div>
      </div>
      <div className={cx(container)}>
        <div className="heading-holder">
          <h2 className="no-border font-40 pb-0 text-center ">Benefits of Plastk Business Accelerator</h2>
          <p>
            Plastk Customers are repeat spenders - Being the only secured credit card with premium rewards, our
            customers love rewards and use our card more often per month than the average non - Plastk customer.
          </p>
        </div>
        <div className={cx(benefitsList)}>
          <div className="column">
            <div className="benefit">
              <div className="benefit-icon">
                <StaticImage loading="eager" src="../../images/icon-team.svg" alt="team icon" />
              </div>
              <div className="benefit-text">
                <h3>More Customers</h3>
                <p>Drive more customers to your store and turn first-time buyers into repeat customers.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <StaticImage loading="eager" src="../../images/icon-flexible.svg" alt="goal icon" />
              </div>
              <div className="benefit-text">
                <h3>Flexibility</h3>
                <p>Determine your own budget & create your own business promotions for Plastk customers.</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="benefit">
              <div className="benefit-icon">
                <StaticImage loading="eager" src="../../images/icon-goal.svg" alt="goal icon" />
              </div>
              <div className="benefit-text">
                <h3>Free Digital Advertising</h3>
                <p>Be included in our massive digital marketing environment & campaigns.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <StaticImage loading="eager" src="../../images/icon-staff.svg" alt="goal icon" />
              </div>
              <div className="benefit-text">
                <h3>Tracking & Reporting</h3>
                <p>Detailed monthly reports and business insights to increase customer understanding.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BapBenefitsSection;
