import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import CREDITAGREEMENT from '../../documents/Plastk_Credit_Agreement.pdf';
import DISCLOSURESTATEMENT from '../../documents/Plastk_Disclosure_Statement_jan_2023.pdf';
import BackToSchoolTAC from '../../documents/plastk-back-to-school-student-promotion-terms-and-conditions.pdf';
import PRIVACYPOLICY from '../../documents/plastk-privacy-policy-oct-2020-pw.pdf';
import SentinelTOC from '../../documents/plastk-sentinel-terms-and-conditions-nov-22nd-2021.pdf';
import TOC from '../../documents/referral-program-terms-and-conditions-sep-2021.pdf';
import TIEDSELLING from '../../documents/tied-selling-oct-2020-pw.pdf';
// import { StaticImage } from 'gatsby-plugin-image';
import { container } from '../../styles/common';
import { containerTandC, tAndCSection } from './TermsAndConditions.styles';

function TermsAndConditions() {
  const clickHandler = val => {
    const name = val.toUpperCase().split(' ').join('_');
    moengage.termsAndConditionsDownload(name);
  };

  return (
    <section className={cx(tAndCSection)}>
      <div className={cx(container, containerTandC)}>
        <h3>Legal</h3>
        <ul className="toc-list">
          <li>
            <a href={CREDITAGREEMENT} download onClick={() => clickHandler('Plastk Credit Agreement')}>
              Plastk Credit Agreement
            </a>
          </li>
          <li>
            <a href={DISCLOSURESTATEMENT} download onClick={() => clickHandler('Plastk Disclosure Statement')}>
              Plastk Disclosure Statement
            </a>
          </li>
          <li>
            <a href={TIEDSELLING} download onClick={() => clickHandler('Tied Selling')}>
              Tied Selling
            </a>
          </li>
          <li>
            <a href={PRIVACYPOLICY} download onClick={() => clickHandler('Plastk Privacy Policy')}>
              Plastk Privacy Policy
            </a>
          </li>
          <li>
            <a href={TOC} download onClick={() => clickHandler('Referral Program Terms and Conditions')}>
              Referral Program Terms and Conditions
            </a>
          </li>
          <li>
            <a href={SentinelTOC} download onClick={() => clickHandler('Plastk Sentinel Terms And Conditions')}>
              Plastk Sentinel Terms And Conditions
            </a>
          </li>
          <li>
            <a
              href={BackToSchoolTAC}
              download
              onClick={() => clickHandler('Plastk Back to School Student Promotion Terms and Conditions')}>
              Plastk Back to School Student Promotion Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TermsAndConditions;
