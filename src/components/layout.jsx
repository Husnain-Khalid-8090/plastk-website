/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { css, cx } from '@linaria/core';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import { globals } from '../styles/global';
import { typography } from '../styles/typography';
import { variables } from '../styles/variables';
import Footer from './Footer';
import Header from './Header';

const wrapper = css`
  position: relative;
  overflow: hidden;
  padding-top: 70px;
`;

const btnBack = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 20px;
  transform: translateX(-80px);
  width: 40px;
  height: 40px;
  color: var(--white);
  border-radius: 0 5px 5px 0;
  background: var(--primary);
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  border: none;
  padding: 0;
  transition: all 0.3s;

  .icon {
    font-size: 28px;
  }
`;

const toastContainer = css`
  .Toastify__toast-container {
    z-index: var(--z-90);
    @media (max-width: 480px) {
      padding: 10px;
    }
  }
  .Toastify__toast {
    padding: 0;
    min-height: 0;
    border-radius: 8px;
    font-family: inherit;
  }
  .Toastify__toast--default {
    background: none;
  }
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__close-button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
`;

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  React.useEffect(() => {
    const backToTop = document.getElementById('back-to-top');
    function backToTopFade() {
      if (window.scrollY > 150) {
        backToTop.style.cssText = 'opacity: 1; visibility: visible; transform: translateX(0);';
      } else {
        backToTop.style.cssText = 'opacity: 0; visibility: hidden; transform: translateX(-80px);';
      }
    }
    window.addEventListener('scroll', backToTopFade);
    setTimeout(() => {
      window.scrollBy(0, 1);
    }, 5000);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className={cx(variables, globals, typography, wrapper)}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer />
        <button type="button" id="back-to-top" onClick={scrollToTop} className={cx(btnBack)}>
          <span className="icon material-icons-outlined">arrow_upward</span>
        </button>
      </div>
      <div className={cx(toastContainer)}>
        <ToastContainer />
      </div>
    </>
  );
}

export default Layout;
