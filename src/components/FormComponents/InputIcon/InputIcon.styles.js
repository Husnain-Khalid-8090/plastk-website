import { styled } from 'linaria/react';

export const StyledInputIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ $prefix }) => $prefix && '5px'};
  right: ${({ $suffix }) => $suffix && '5px'};
  color: ${({ $invalid }) => ($invalid ? 'var(--danger)' : 'var(--secondary-text-color)')};
  font-size: var(--font-size-lg);
  background: none;
  border: none;
  padding: 0;
  i {
    display: block;
  }
`;
