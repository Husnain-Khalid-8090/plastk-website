import * as React from 'react';

import Seo from '../components/Seo';
import TermsAndConditions from '../components/TermsAndConditions';

function NotFoundPage() {
  return <TermsAndConditions />;
}

export default NotFoundPage;

export function Head() {
  return (
    <Seo
      title="Terms and Condition | Plastk Visa Credit Card Secure Transaction"
      metaDescription="Acceptance to Plastk Credit card terms of service implies that you support the policies against the safety of your personal information and transaction."
    />
  );
}
