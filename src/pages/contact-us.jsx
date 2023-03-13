import * as React from 'react';

import ContactUsSection from '../components/ContactUsSection';
import Seo from '../components/Seo';

function ContactUs() {
  return <ContactUsSection />;
}

export default ContactUs;

export function Head() {
  return (
    <Seo
      title="Contact us | Plastk Support Centre"
      metaDescription="Call us at 1-844-200-0526 or Live chat at Plastk.ca. We're very  to respond. Also read our FAQs to get swift answers on how to get your Plastk card & much more."
    />
  );
}
