/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import '@fontsource/material-icons';
import '@fontsource/material-icons-outlined';
// You can delete this file if you're not using it
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
import '@fontsource/rubik/800.css';
import React from 'react';

const Layout = require('./src/components/layout').default;

const loadedScripts = 'loadedScripts';
const appendScriptsOnScrollOptions = { once: true };

const scripts = {
  hubSpot: `//js.hs-scripts.com/8687326.js`,
  googleOptimize: `https://www.googleoptimize.com/optimize.js?id=OPT-5FRJHKC`,
  facebookPixel: `/facebook-pixel.js`,
  moEngage: '/moengage.js',
  gtm: '/gtm.js',
  peachTree: 'https://sfo.peachtree.app/js/analytics.js',
};

const appendScript = scriptInnerHTML => {
  const scriptElement = document.createElement('script');
  scriptElement.src = scriptInnerHTML;
  document.head.appendChild(scriptElement);
};

// Callback to append scripts
const appendThirdPartyScripts = () => {
  if (process.env.GATSBY_API_ENV_PRAM === 'live') {
    appendScript(scripts.facebookPixel);
    appendScript(scripts.gtm);
    appendScript(scripts.googleOptimize);
    appendScript(scripts.hubSpot);
    appendScript(scripts.peachTree);
  }
  appendScript(scripts.moEngage);
  // Variable set to reference as a check that callback ran
  sessionStorage.setItem(loadedScripts, 'true');
};

export const onInitialClientRender = () => {
  window.addEventListener('scroll', appendThirdPartyScripts, appendScriptsOnScrollOptions);
};

export const onRouteUpdate = ({ prevLocation }) => {
  const checkLoadedScripts = sessionStorage.getItem(loadedScripts);

  // If first navigation update and user didn't scroll, append
  // scripts
  if (prevLocation && !checkLoadedScripts) {
    // Prevent appending scripts on scroll
    window.removeEventListener('scroll', appendThirdPartyScripts, appendScriptsOnScrollOptions);
    appendThirdPartyScripts();
  }
};

export const registerServiceWorker = () => true;

export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  // eslint-disable-next-line react/jsx-filename-extension
  <Layout {...props}>{element}</Layout>
);
