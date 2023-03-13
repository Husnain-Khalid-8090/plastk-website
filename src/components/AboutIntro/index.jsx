import { cx } from 'linaria';
import * as React from 'react';

import { container } from '../../styles/common';
import { aboutContainer, aboutIntro } from './AboutIntro.styles';

function AboutIntro() {
  return (
    <section className={cx(aboutIntro)}>
      <div className={cx(container, aboutContainer)}>
        <h2 className="title no-border">Who are we ?</h2>
        <p>
          Plastk Secured Credit Card is Canada&apos;s first & only Secured Credit Card with Premium Rewards & Credit
          Insights. Helping Canadian&apos;s achieve financial freedom.
        </p>
        <h2 className="title no-border">Our Story</h2>
        <p>
          Plastk was founded by Motola Omobamiduro in 2018. Motola owned a pre-owned vehicle dealership for years, where
          financing is often where the purchase would come together or fall apart. All too often many well-meaning
          people found it difficult to improve their credit rating due to previous missteps or decisions. He also
          noticed that newcomers, students and those with major life changes required a reasonable way to obtain a
          credit card while building or rebuilding their credit history
        </p>
        <p>
          Motola also saw an opportunity within the credit card rewards market. Not surprisingly the best rewards
          programs were reserved for an exclusive few. Premiums rewards benefits should be available to all cardholders.
        </p>
        <p>
          He envisioned a credit card that would not only provide a way for people to understand and strengthen their
          credit, but one that would also provide cardholders with the premium rewards perks that are unavailable with
          other secured credit card products.
        </p>
        <p>
          <b>Stay tuned the best is yet to come.</b>
        </p>
        <h2 className="title no-border">Our Mission:</h2>
        <p>Helping Canadians achieve financial freedom one step at a time.</p>
        <p>
          Canada&apos;s First & only Secured Credit Card with Premium Rewards & Credit Insights. <br /> Helping
          Canadian&apos;s achieve financial freedom. <br /> Plastk Secured Credit Card. <br /> The newest and best way
          to build your credit and get rewarded for it.
        </p>
      </div>
    </section>
  );
}

export default AboutIntro;
