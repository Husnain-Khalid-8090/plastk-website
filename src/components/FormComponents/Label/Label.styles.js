import { styled } from 'linaria/react';

export const StyledLabel = styled.label`
  font-size: var(--font-size-sm);
  line-height: 1;
  color: var(--secondary-text-color);
  margin-bottom: 0.625rem;
  display: ${({ labelIcon }) => (labelIcon ? 'flex' : 'block')};
  align-items: ${({ labelIcon }) => labelIcon && 'center'};
  pointer-events: ${({ $onlyRead }) => $onlyRead && 'none'};
`;

export const RequiredAsterisk = styled.span`
  color: var(--danger);
  margin-right: 3px;
`;
