import * as React from 'react';

import { RequiredAsterisk, StyledFakeLabel } from './FakeLabel.styles';

function FakeLabel({ children, className, style, required, labelIcon, ...props }) {
  return (
    <StyledFakeLabel className={className} style={style} {...props}>
      {required ? <RequiredAsterisk>*</RequiredAsterisk> : ''}
      {children}
      {labelIcon}
    </StyledFakeLabel>
  );
}

export default FakeLabel;
