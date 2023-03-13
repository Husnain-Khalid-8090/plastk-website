import { cx } from 'linaria';
import * as React from 'react';

import icon_loader from '../../images/loader.svg';
import { loaderParent } from './Loader.styles';

function MemberCol({ className, ...props }) {
  return (
    <div className={cx(loaderParent, className)} {...props}>
      <div className="loader">
        <img loading="eager" src={icon_loader} alt="loader" />
      </div>
    </div>
  );
}

export default MemberCol;
