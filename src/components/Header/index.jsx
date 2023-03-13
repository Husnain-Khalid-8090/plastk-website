/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { NavData } from '../../data/NavData';
import { container } from '../../styles/common';
import Button from '../Button';
import { dropdown, flex, header, logo, mainNav, menu, navOpener, scrollActive } from './Header.styles';

function Header() {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleClick = () => {
    document.body.classList.toggle('nav-active');
  };

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setScrollPosition(scrolled);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, []);

  return (
    <header className={cx(header, scrollPosition > 0.02 && scrollActive)}>
      <div className={cx(container, flex)}>
        <div className={cx(logo)}>
          <Link
            to="/"
            onClick={() => {
              moengage.plastkLogo();
            }}>
            <StaticImage loading="eager" src="../../images/logo.svg" alt="Plastk" />
          </Link>
        </div>
        <button className={cx(navOpener)} type="button" onClick={handleClick}>
          <span />
        </button>
        <nav className={cx(mainNav)}>
          <ul className={cx(menu)}>
            {NavData.filter(({ live }) => (process.env.GATSBY_API_ENV_PRAM === 'live' ? live : true)).map(
              // this will stop the view from loading in production if the view is not meant for lives
              (item, index) => (
                <li key={index}>
                  {item.path && !item.externalLink && (
                    <Link to={item.path}>
                      {item.title}{' '}
                      {item?.subMenu && <span className="arrow material-icons-outlined">arrow_drop_down</span>}
                    </Link>
                  )}
                  {item.path && item.externalLink && (
                    <a href={item.path}>
                      {item.title}{' '}
                      {item?.subMenu && <span className="arrow material-icons-outlined">arrow_drop_down</span>}
                    </a>
                  )}
                  {!item.path && !item.externalLink && (
                    <a href="#" onClick={e => e.preventDefault()}>
                      {item.title}{' '}
                      {item?.subMenu && <span className="arrow material-icons-outlined">arrow_drop_down</span>}
                    </a>
                  )}

                  {item?.subMenu && (
                    <div className={cx(dropdown)}>
                      <ul>
                        {item?.subMenu
                          .filter(({ live }) => (process.env.GATSBY_API_ENV_PRAM === 'live' ? live : true))
                          .map(
                            // this will stop the view from loading in production if the view is not meant for lives
                            (dropdownItem, dropdownItemIndex) =>
                              !dropdownItem.footerOnly ? (
                                <li key={dropdownItemIndex}>
                                  {dropdownItem.path && !dropdownItem.externalLink && (
                                    <Link
                                      to={dropdownItem.path}
                                      onClick={() => {
                                        dropdownItem.moAction();
                                      }}>
                                      {dropdownItem.title}
                                    </Link>
                                  )}
                                  {dropdownItem.path && dropdownItem.externalLink && (
                                    <a
                                      href={dropdownItem.path}
                                      onClick={() => {
                                        // e.preventDefault();
                                        dropdownItem.moAction();
                                      }}>
                                      {dropdownItem.title}
                                    </a>
                                  )}
                                  {!dropdownItem.path && !dropdownItem.externalLink && (
                                    <a
                                      href="#"
                                      onClick={e => {
                                        e.preventDefault();
                                        dropdownItem.moAction();
                                      }}>
                                      {dropdownItem.title}xfd
                                    </a>
                                  )}
                                </li>
                              ) : (
                                ''
                              ),
                          )}
                      </ul>
                    </div>
                  )}
                </li>
              ),
            )}
          </ul>
          <Button
            as={Link}
            to="/sign-up"
            type="primary"
            width={117}
            sm
            onClick={() => {
              moengage.applyNow();
            }}>
            Apply Now
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
