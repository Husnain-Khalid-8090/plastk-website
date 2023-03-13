/**
 * @type {import('gatsby').GatsbyConfig}
 */
// module.exports = {
//   siteMetadata: {
//     title: `Plastk website`,
//     siteUrl: `https://www.yourdomain.tld`
//   },
//   plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-google-gtag","gatsby-plugin-linaria",]
// };

/* eslint-disable global-require */
const path = require('path');
const axios = require('axios');

const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');
const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const siteUrl = process.env.GATSBY_BASE_URL;

module.exports = {
  siteMetadata: {
    title: `Plastk`,
    description: `Sign up now and receive a BONUS of 5,000 points towards Canada’s first secured credit card with premium rewards.`,
    siteUrl: `https://www.plastk.ca`,
    image: '/thumb.jpg',
    ogTitle: 'Plastk Secured Credit Card',
    ogDescription:
      'Plastk Secured Credit Card lets you earn reward points on everyday purchases. We provide credit insights to give you the tools to build/rebuild your credit. Apply now and get approved quickly!',
    'google-site-verification': 'H-54tbZu8tnHH2nubkkvCUTLOeVH-G6vr1c3RutmSG8',
  },
  plugins: [
    `gatsby-plugin-linaria`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '.',
        excludes: ['/sign-up/*', '/using-ssr/', '/affiliates/*', '/post', '/business'],
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: async ({ allSitePage: { nodes: allPages } }) => {
          let pages = [];
          await axios
            .post(`${process.env.GATSBY_API_BASE_URL}/application/get-blogs`, {
              getAll: true,
            })
            .then(res => {
              pages = res?.data?.blogs;
            });

          const all_pages = allPages.map(page => ({ ...page }));
          const resolvedPages = [...all_pages, ...pages];
          return resolvedPages;
        },

        serialize: ({ path: PATH }) => ({
          url: PATH,
          changefreq: 'daily',
          priority: 0.7,
        }),
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Plastk App`,
        short_name: `Plastk`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#aae15d`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
    `gatsby-plugin-client-side-redirect`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./static/serviceworker.js`),
      },
    },
  ],
};
