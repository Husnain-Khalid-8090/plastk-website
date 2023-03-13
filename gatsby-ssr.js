/* eslint-disable react/no-danger */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const style = {
  display: 'none',
};
export const onRenderBody = ({ setPostBodyComponents }) => {
  if (process.env.GATSBY_API_ENV_PRAM === 'live') {
    setPostBodyComponents([
      <noscript key="noscript">
        <img
          alt="fb"
          height="1"
          width="1"
          style={style}
          src="https://www.facebook.com/tr?id=1319220105187862&ev=PageView&noscript=1"
        />
      </noscript>,
    ]);
  }
};
