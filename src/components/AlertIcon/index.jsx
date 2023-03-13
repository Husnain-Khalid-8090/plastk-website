import React from 'react';

import { StyledIcon } from './AlertIcon.styles';

function AlertIcon({ $type }) {
  const iconType = () => {
    switch ($type) {
      case 'error':
        return 'error_outline';
      case 'info-red':
        return 'info';
      case 'warning':
        return 'warning';
      case 'success':
        return 'check_circle';
      default:
        return 'info';
    }
  };
  return (
    <StyledIcon $type={$type}>
      <i className="material-icons-outlined">{iconType()}</i>
    </StyledIcon>
  );
}

export default AlertIcon;
