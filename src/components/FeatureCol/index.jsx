import { Link } from 'gatsby';
import { cx } from 'linaria';
import * as React from 'react';

import { moengage } from '../../../utils/moengageEvents';
import { darkStyle, featuresCol } from '../PlastkFeatures/PlastkFeatures.styles';

function FeatureCol({ features, conditions, equifaxTerms, sm, dark, style, className }) {
  return (
    <div className={cx(dark && darkStyle)} style={style}>
      <div className={cx(featuresCol, className)}>
        <ul>
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {conditions && (
          <span className="info-text">*after two (2) missed payments the interest rate will increase to 29.99%</span>
        )}
        {equifaxTerms && (
          <span className="info-text">
            *Equifax Verification is required to access your Credit Score. For details see{' '}
            <Link to="/terms-and-conditions" onClick={() => moengage.signUpTermsAndCondition()}>
              Terms & Conditions.
            </Link>
          </span>
        )}
        {conditions && !equifaxTerms && (
          <span className="text-right">
            {sm ? (
              <Link to="/terms-and-conditions" onClick={() => moengage.signUpTermsAndCondition()}>
                Terms And Conditions
              </Link>
            ) : (
              'Conditions apply*'
            )}
          </span>
        )}
      </div>
    </div>
  );
}

export default FeatureCol;
