import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { contactUsStyles } from './ContactUsSection.styles';

function DownloadAppCta() {
  return (
    <section className={cx(contactUsStyles)}>
      <div className="contact-wrap">
        <span className="title">Get in touch</span>
        <span className="msg">We&apos;d love to hear from you</span>
        <ul className="contact-us-list">
          <li>
            <i className="material-icons">email</i>{' '}
            <a
              href="mailto:hello@plastk.ca"
              onClick={() => {
                moengage.contactEmailLINK();
              }}>
              hello@plastk.ca
            </a>
          </li>
          <li>
            <i className="material-icons">call</i>{' '}
            <a
              href="tel:18554850102"
              onClick={() => {
                moengage.contactNumberLINK();
              }}>
              1-855-485-0102
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DownloadAppCta;
