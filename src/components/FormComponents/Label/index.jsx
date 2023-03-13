import React from 'react';

import { RequiredAsterisk, StyledLabel } from './Label.styles';

function Label({ children, onlyRead, required, labelIcon, ...props }) {
  const style = {
    marginLeft: '5px',
  };
  return (
    <StyledLabel $onlyRead={onlyRead} labelIcon={labelIcon} {...props}>
      {required ? <RequiredAsterisk>*</RequiredAsterisk> : ''}
      {children}
      {labelIcon && <span style={style}>{labelIcon}</span>}
    </StyledLabel>
  );
}

export default Label;
