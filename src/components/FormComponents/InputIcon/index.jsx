import * as React from 'react';

import { StyledInputIcon } from './InputIcon.styles';

function InputIcon({ prefix, invalid, suffix, children, ...props }) {
  return (
    <StyledInputIcon $prefix={prefix} $invalid={invalid} $suffix={suffix} {...props}>
      {children}
    </StyledInputIcon>
  );
}

export default InputIcon;
