import * as React from 'react';

import PrivacyPolicy from '../components/PrivacyPolicy';
import Seo from '../components/Seo';

function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}

export default PrivacyPolicyPage;

export function Head() {
  return (
    <Seo
      title="Privacy Policy | Secure Credit Card In Canada Privacy Policy"
      metaDescription="At PLASTK FINANCIAL & REWARDS INC, we value your privacy and understand that by entrusting us with your personal information we have a responsibility to provide transparency with respect to our privacy practices."
    />
  );
}
