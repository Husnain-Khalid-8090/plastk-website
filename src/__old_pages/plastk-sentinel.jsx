import * as React from 'react';
import BenefitsPlastk from '../components/BenefitsPlastk';

import InfoSection from '../components/InfoSection';
import SentinelOffers from '../components/SentinelOffers';
import SentinelVisual from '../components/SentinelVisual';
import SentinelWorks from '../components/SentinelWorks';
import Seo from '../components/Seo';
import WhatIsPlastk from '../components/WhatIsPlastk';

function PlastkSentinelPage() {
  return (
    <>
      <SentinelVisual />
      <WhatIsPlastk />
      <SentinelOffers />
      <SentinelWorks />
      <InfoSection />
      <BenefitsPlastk />
    </>
  );
}

export default PlastkSentinelPage;

export function Head() {
  return (
    <Seo
      title="Check Your Equifax Credit Report & Credit Score"
      metaDescription="Build your Equifax credit score, monitor your payment history, and track your credit score with an Equifax credit report. Control your credit with Plastk Sentinel!"
    />
  );
}
