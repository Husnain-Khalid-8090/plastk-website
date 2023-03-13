import { cx } from 'linaria';
import * as React from 'react';

import { container, containerSm } from '../../styles/common';
import FeatureCol from '../FeatureCol';
import {
  cardCol,
  cardFeature,
  colHolder,
  darkStyle,
  featureContainerSm,
  head,
  reverseStyle,
  smStyle,
  subTitle,
} from './PlastkFeatures.styles';

function PlastkFeature({ features, img, equifaxTerms, dark, title = true, reverse, conditions = true, sm }) {
  return (
    <div className={cx(cardFeature, dark && darkStyle, reverse && reverseStyle, sm && smStyle)}>
      <div className={cx(container, containerSm, dark && featureContainerSm, reverse && featureContainerSm)}>
        {title && (
          <div className={cx(head)}>
            {!dark && (
              <h2 className="h1 center" title="Plastk Features : 0% interest rate for 3 months & much more!">
                Plastk Secured Credit Card <span className={cx(subTitle)}>features</span>
              </h2>
            )}
            {dark && <h2 className="h1 center">Features & Benefits</h2>}
          </div>
        )}
        <div className={cx(colHolder)}>
          {img && <div className={cx(cardCol)}>{img}</div>}
          <FeatureCol features={features} conditions={conditions} equifaxTerms={equifaxTerms} sm={sm} />
        </div>
      </div>
    </div>
  );
}

export default PlastkFeature;
