/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { NavData } from '../../data/NavData';
import { container } from '../../styles/common';
import { footer, footerContent, footerNav, logo, socialnetworks, textBox } from './Footer.styles';

function Footer() {
  return (
    <footer className={cx(footer)}>
      <div className={cx(container)}>
        <div className={cx(logo)}>
          <Link
            to="/"
            onClick={() => {
              moengage.plastkLogoFooter();
            }}>
            <StaticImage loading="eager" src="../../images/logo.svg" alt="Plastk" />
          </Link>
        </div>
        <div className={cx(footerContent)}>
          {NavData.filter(({ live }) => (process.env.GATSBY_API_ENV_PRAM === 'live' ? live : true)).map(
            (item, index) =>
              item.title === 'Company' && (
                <div className="column" key={index}>
                  <h3>{item.title}</h3>

                  {item?.subMenu && (
                    <ul className={cx(footerNav)}>
                      {item?.subMenu
                        .filter(({ live }) => (process.env.GATSBY_API_ENV_PRAM === 'live' ? live : true))
                        .map(
                          // this will stop the view from loading in production if the view is not meant for lives
                          (dropdownItem, dropdownItemIndex) => (
                            <li key={dropdownItemIndex}>
                              {dropdownItem.path && !dropdownItem.externalLink && (
                                <Link to={dropdownItem.path} onClick={() => dropdownItem.moAction()}>
                                  {dropdownItem.title}
                                </Link>
                              )}
                              {dropdownItem.path && dropdownItem.externalLink && (
                                <a href={dropdownItem.path} onClick={() => dropdownItem.moAction()}>
                                  {' '}
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
                                  {dropdownItem.title}
                                </a>
                              )}
                            </li>
                          ),
                        )}
                    </ul>
                  )}
                </div>
              ),
          )}
          {NavData.filter(({ live }) => (process.env.GATSBY_API_ENV_PRAM === 'live' ? live : true)).map(
            (item, index) =>
              item.title === 'Products' && (
                <div className="column" key={index}>
                  <h3>{item.title}</h3>

                  {item?.subMenu && (
                    <ul className={cx(footerNav)}>
                      {item?.subMenu
                        .filter(({ live }) => (process.env.GATSBY_API_ENV_PRAM === 'live' ? live : true))
                        .map(
                          // this will stop the view from loading in production if the view is not meant for lives
                          (dropdownItem, dropdownItemIndex) => (
                            <li key={dropdownItemIndex}>
                              {dropdownItem.path && !dropdownItem.externalLink && (
                                <Link to={dropdownItem.path} onClick={() => dropdownItem.moAction()}>
                                  {dropdownItem.title}
                                </Link>
                              )}
                              {dropdownItem.path && dropdownItem.externalLink && (
                                <a href={dropdownItem.path} onClick={() => dropdownItem.moAction()}>
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
                                  {dropdownItem.title}
                                </a>
                              )}
                            </li>
                          ),
                        )}
                    </ul>
                  )}
                </div>
              ),
          )}
          {NavData.filter(({ live }) => (process.env.GATSBY_API_ENV_PRAM === 'live' ? live : true)).map(
            (item, index) =>
              item.title === 'Support' && (
                <div className="column" key={index}>
                  <h3>{item.title}</h3>

                  {item?.subMenu && (
                    <ul className={cx(footerNav)}>
                      {item?.subMenu
                        .filter(({ live }) => (process.env.GATSBY_API_ENV_PRAM === 'live' ? live : true))
                        .map((dropdownItem, dropdownItemIndex) => (
                          <li key={dropdownItemIndex}>
                            {dropdownItem.path && !dropdownItem.externalLink && (
                              <Link to={dropdownItem.path} onClick={() => dropdownItem.moAction()}>
                                {dropdownItem.title}
                              </Link>
                            )}
                            {dropdownItem.path && dropdownItem.externalLink && (
                              <a href={dropdownItem.path} onClick={() => dropdownItem.moAction()}>
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
                                {dropdownItem.title}
                              </a>
                            )}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ),
          )}
          <div className="column">
            <h3>Connect</h3>
            <ul className={cx(socialnetworks)}>
              <li>
                <a
                  href="https://ca.linkedin.com/company/plastk-financial-rewards"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => moengage.linkedinFooter()}>
                  <StaticImage
                    loading="eager"
                    src="../../images/linkedin.svg"
                    alt="linkedin icon"
                    width={14}
                    height={14}
                    layout="fixed"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/plastkcard"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => moengage.facebookFooter()}>
                  <StaticImage
                    loading="eager"
                    src="../../images/facebook.svg"
                    alt="facebook icon"
                    width={9}
                    height={14}
                    layout="fixed"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/plastkvisa"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => moengage.twitterFooter()}>
                  <StaticImage
                    loading="eager"
                    src="../../images/twitter.svg"
                    alt="twitter icon"
                    width={14}
                    height={12}
                    layout="fixed"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/plastkvisa"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => moengage.instagramFooter()}>
                  <StaticImage
                    loading="eager"
                    src="../../images/instagram.svg"
                    alt="instagram icon"
                    width={13}
                    height={13}
                    layout="fixed"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx(textBox)}>
          <p>
            *Visa International and Digital Commerce Bank do not provide any of the services or benefits related to the
            Plastk rewards program. The terms and conditions applicable to these services or benefits are contained in
            the agreement between you and Plastk Financial & Rewards Inc.
          </p>
          <p>
            All credit Issued by Plastk Financial & Rewards Inc. This card is owned and issued by Digital Commerce Bank,
            pursuant to license from Visa International. Use of the card is governed by the agreement under which it is
            issued. The Visa Brand is a registered trademark of *Visa International.
          </p>
          <p>Plastk Financial and Rewards Inc. 620 12thave SW Suite 201, Calgary Alberta, T2R 0H5</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
