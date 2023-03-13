/* eslint-disable array-callback-return */
const path = require('path');
const fs = require('fs');

// Create Pages
exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions;

  createPage({
    path: '/sign-up',
    component: path.resolve('./src/pages/sign-up/[...referral].jsx'),
  });

  createPage({
    path: '/get-approved',
    component: path.resolve('./src/pages/sign-up/[...referral].jsx'),
  });

  //   createPage({
  //     path: '/affiliates',
  //     component: path.resolve('./src/pages/affiliates/[...affiliate].jsx'),
  //   });

  //   createPage({
  //     path: '/fintel',
  //     component: path.resolve('./src/pages/affiliates/[...affiliate].jsx'),
  //   });

  createPage({
    path: '/404',
    component: require.resolve('./src/pages/404.jsx'),
  }); // Redirect unknown URLs to the custom 404 page
  createPage({
    path: '/*',
    component: require.resolve('./src/pages/404.jsx'),
  });
  createPage({
    path: '/post',
    component: path.resolve('./src/pages/post/[...slug].jsx'),
  });

  createRedirect({
    fromPath: `/activate`,
    toPath: `https://account.plastk.ca/`,
  });

  createRedirect({
    fromPath: `/download/ios`,
    toPath: `http://itunes.apple.com/lb/app/plastk/id1548421352`,
  });

  createRedirect({
    fromPath: `/download/android`,
    toPath: `https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.plastkapp`,
  });

  createRedirect({
    fromPath: `/qr`,
    toPath: `https://share.hsforms.com/1S9BQdqt-SpmntWjAcYbuaw5676m`,
  });

  createRedirect({
    fromPath: `/canucks-sign-up`,
    toPath: `https://plastk.ca/`,
  });

  createRedirect({
    fromPath: `/plastk-canucks`,
    toPath: `https://plastk.ca/`,
  });
};

exports.onPostBuild = () => {
  if (fs.existsSync('./public/sitemap-0.xml')) {
    fs.renameSync('./public/sitemap-0.xml', './public/sitemap.xml');
  }
};
// eslint-disable-next-line no-unused-vars
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  //   if (stage === 'build-javascript' || stage === 'develop') {
  const config = getConfig();
  const miniCssExtractPlugin = config.plugins.find(plugin => plugin.constructor.name === 'MiniCssExtractPlugin');
  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true;
  }
  actions.replaceWebpackConfig(config);
  //   }
};
