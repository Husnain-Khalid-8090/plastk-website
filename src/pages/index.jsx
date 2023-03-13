import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import AppSection from '../components/AppSection';
import DownloadAppCta from '../components/DownloadAppCta';
import PlastkFeature from '../components/PlastkFeatures';
import PremiumRewards from '../components/PremiumRewards';
import ReviewSlider from '../components/ReviewSlider';
import SentinelCreditScore from '../components/SentinelCreditScore';
import SentinelSection from '../components/SentinelSection';
import Seo from '../components/Seo';
import VisualSection from '../components/VisualSection';
import { plastkFeatures } from '../data/PlastkFeatures';

function IndexPage() {
  // window.addEventListener('MOE_LIFECYCLE', e => {
  //   if (e.detail.name === 'SDK_INITIALIZED') {
  //     console.log('moengage sdk initialized', e.detail.data);
  //     // write you code here
  //   }
  // });
  return (
    <>
      <VisualSection
        responsive
        title="Plastk Secured Credit Card"
        description="The newest and best way to build your credit and get rewarded for it"
        signUpBtn
        scrollToId="sentinel-section"
      />
      <SentinelSection />
      <SentinelCreditScore />
      <PremiumRewards />
      <PlastkFeature
        img={<StaticImage loading="eager" src="../images/plastk-card.png" alt="img description" />}
        features={plastkFeatures}
      />
      <AppSection />
      <DownloadAppCta />
      <ReviewSlider />
    </>
  );
}

export default IndexPage;

export function Head() {
  return (
    <Seo
      title="Best Secured Credit Card | Improve Your Credit Score"
      metaDescription="Guaranteed approval even with bad credit. Plastk Secured Credit Card is the newest and best way to build your credit in Canada. Get weekly tips and insights to improve your credit in Canada."
    />
  );
}
