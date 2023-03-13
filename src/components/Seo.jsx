/* eslint-disable no-console */

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          ogTitle
          ogDescription
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

function Seo({ title, metaDescription, pathname, children, ogMetaTitle, ogMetaDescription }) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    ogTitle: defaultOgTitle,
    ogDescription: defaultOgDescription,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: metaDescription || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    ogTitle: ogMetaTitle || defaultOgTitle,
    ogDescription: ogMetaDescription || defaultOgDescription,
  };

  return (
    <>
      <title>{`${seo.title && `${seo.title === 'Plastk' ? 'Plastk' : `${seo.title} | Plastk`}`}`}</title>
      <meta name="og:image" content={seo.image} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={seo.url} />
      <meta name="og:title" content={seo.ogTitle} />
      <meta name="og:description" content={seo.ogDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:description" content={seo.ogDescription} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="description" content={seo.description} />

      {process.env.GATSBY_API_ENV_PRAM === 'live' && (
        <>
          <meta key="peachtree-id" name="peachtree-id" content="c9683a09-f146-49bc-be26-1d36ca60ce02" />
          <meta name="insight-app-sec-validation" content="f9fb3f7c-ecb5-41a1-bfbb-85d76ac8fe44" />
          <meta name="google-site-verification" content="kIo1yOEPxuZqbskDkE_SYN4jjJpIZRx0Pw9zCQN_nnU" />
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Plastk Financial & Rewards Inc",
              "legalName": "Plastk Financial & Rewards Inc",
              "url": "https://plastk.ca/",
              "logo": "https://plastk.ca/243fd5feae1b39b9e848.svg",
              "foundingDate": "2018",
              "founder": [
                  {
                      "@type": "Person",
                      "name": "Motola Omobamiduro"
                  }
              ],
              "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Calgary",
                  "addressCountry": "Canada"
              },
              "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Client Success Team",
                  "telephone": "[ 1-844-200-0526]",
                  "email": "hello@plastk.ca"
              },
              "sameAs": [
                  "Plastk",
                  "Plastk_Card",
                  "https://www.instagram.com/plastk_visa/",
                  "https://www.linkedin.com/company/plastk-financial-rewards/"
              ]
            }`}
          </script>
        </>
      )}
      {children}
    </>
  );
}
export default Seo;
