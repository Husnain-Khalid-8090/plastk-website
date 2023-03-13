/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { cx } from 'linaria';
import React, { useState } from 'react';

import { moengage } from '../../../utils/moengageEvents';
import CREDITAGREEMENT from '../../documents/Plastk_Credit_Agreement.pdf';
import DISCLOSURESTATEMENT from '../../documents/Plastk_Disclosure_Statement_jan_2023.pdf';
import { subTitle } from '../SignUpStep1/SignUpStep1.styles';
import ViewCreditAgreement from '../ViewCreditAgreement';
import ViewDisclosuerStatment from '../ViewDisclosuerStatment';
import { agreementHolder, btnHolder, disclaimerText, viewAgreementDiv } from './ViewAgreement.styles';

function ViewAgreement() {
  const [creditAgreement, setCreditAgreement] = useState(true);
  const style = {
    justifyContent: 'center',
    display: 'flex',
  };
  return (
    <div className={cx(viewAgreementDiv)}>
      <span className={cx(subTitle)}>View Agreement</span>

      <div className={cx(btnHolder)}>
        <span
          className={`${creditAgreement && 'plastk-doc-active'} plastk-docs-toggle`}
          onClick={() => {
            setCreditAgreement(true);
            moengage.signUpSelectPolicyCreditAggrement();
          }}>
          Plastk Credit Agreement
          <a
            href={CREDITAGREEMENT}
            className="icon-download"
            download
            onClick={() => moengage.signUpDownloadPolicyCreditAggrement()}>
            <i className="material-icons-outlined">file_download</i>
          </a>
        </span>

        <span
          className={`${!creditAgreement && 'plastk-doc-active'} plastk-docs-toggle`}
          onClick={() => {
            setCreditAgreement(false);
            moengage.signUpSelectPolicyDisclourStatment();
          }}
          style={style}>
          Plastk Disclosure Statement
          <a
            href={DISCLOSURESTATEMENT}
            className="icon-download"
            download
            onClick={() => moengage.signUpDownloadPolicyDisclourStatment()}>
            <i className="material-icons-outlined">file_download</i>
          </a>
        </span>
      </div>
      <div className={cx(agreementHolder)}>
        {creditAgreement && <ViewCreditAgreement />}
        {!creditAgreement && <ViewDisclosuerStatment />}
      </div>
      <div className={cx(disclaimerText)}>
        <p>
          By clicking <b>“Submit Application”</b> you confirm that you have read, understood, and agree with the above{' '}
          <span>Plastk Credit Agreement</span> and <span>Plastk Disclosure Document</span>.
        </p>
      </div>
    </div>
  );
}
export default ViewAgreement;
