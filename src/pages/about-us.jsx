import * as React from 'react';

import AboutIntro from '../components/AboutIntro';
import Seo from '../components/Seo';
import TeamMembers from '../components/TeamMembers';

function NotFoundPage() {
  return (
    <>
      <AboutIntro />
      <TeamMembers />
    </>
  );
}

export default NotFoundPage;

export function Head() {
  return (
    <Seo
      title="About Plastk | Secure Credit Card with Premium Rewards"
      metaDescription="Plastk's mission is to help Canadians achieve financial freedom one step at a time. Read more about Plastk's founding members & team.">
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org/",
          "@type": "Person",
          "name": "Motola Omobamiduro",
          "url": "https://plastk.ca/about-us",
          "image": "https://www.plastk.ca/c83a3069d9f1cccca842.png",
          "sameAs": "https://www.linkedin.com/in/motola-omobamiduro-49a78614/",
          "jobTitle": "Founder & CEO",
          "worksFor": {
              "@type": "Organization",
              "name": "Plastk Financial & Rewards Inc"
          }
        }`}
      </script>
    </Seo>
  );
}
