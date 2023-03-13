import * as React from 'react';

import { StyledInput, StyledTextarea } from './Input.styles';

const Input = React.forwardRef(({ ...props }, ref) => {
  const { type } = props;
  if (type === 'textarea') {
    return <StyledTextarea {...props} ref={ref} />;
  }
  return <StyledInput {...props} ref={ref} />;
});

export default Input;
