import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import PlastkFeature from '../components/PlastkFeatures';
import SecuredCardIntro from '../components/SecuredCardIntro';
import Seo from '../components/Seo';
import SpecialOffer from '../components/SpecialOffer';
import VisualSectionScc from '../components/VisualSectionScc';
import { plastkFeaturesSCC1, plastkFeaturesSCC2 } from '../data/PlastkFeatures';

function SecuredCreditCard() {
  return (
    <>
      <VisualSectionScc
        title="Plastk Secured Credit Card"
        description="The newest and best way to build your credit and get rewarded for it"
        signUpBtn
        scrollToId="secured-card-intro"
      />
      <SecuredCardIntro />
      <PlastkFeature
        img={<StaticImage loading="eager" src="../images/plastk-card-3.png" alt="plastk Card" />}
        features={plastkFeaturesSCC1}
        equifaxTerms
        dark
      />
      <PlastkFeature
        img={<StaticImage loading="eager" src="../images/plastk-card-4.png" alt="plastk Card" />}
        features={plastkFeaturesSCC2}
        reverse
        title={false}
        conditions={false}
      />
      <SpecialOffer />
    </>
  );
}

export default SecuredCreditCard;

export function Head() {
  return (
    <Seo
      title="Secured Credit Card Canada | Simple Way to Pay"
      metaDescription="Secured credit cards in Canada with the fastest and most dependable payment options to ensure your payments. Improve your credit score and understanding by seeking assistance."
    />
  );
}
