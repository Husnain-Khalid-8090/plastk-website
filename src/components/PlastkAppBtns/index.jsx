import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { btnCenter, btnHolder } from './PlastkAppBtns.styles';

function PlastkAppBtns({ center, noMargin }) {
  return (
    <div className={cx(btnHolder, center && btnCenter, noMargin && 'mb-0')}>
      <a
        href="https://apps.apple.com/ca/app/plastk/id1548421352"
        target="_blank"
        rel="noreferrer"
        onClick={() => moengage.appStoreIOS()}>
        <StaticImage loading="eager" src="../../images/app-store.png" alt="Apple Store" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.plastkapp"
        target="_blank"
        rel="noreferrer"
        onClick={() => moengage.appStoreAndroid()}>
        <StaticImage loading="eager" src="../../images/play-store.png" alt="Google play store" />
      </a>
    </div>
  );
}

export default PlastkAppBtns;
