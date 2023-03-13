import { css } from 'linaria';
import { styled } from 'linaria/react';

export const StyledSelect = styled.select`
  border: var(--form-element-border-width) solid
    ${({ error }) => (error ? 'var(--danger)' : 'var(--form-element-border-color)')};
  background-color: var(--white);
  background-image: url('../../images/expand_more.svg');
  background-repeat: no-repeat;
  background-position: right 5px center;
  background-size: 24px 24px;
  outline: none;
  height: ${({ lg }) => (lg ? 'var(--form-element-height-lg)' : 'var(--form-element-height)')};
  padding: ${({ lg }) => (lg ? 'var(--form-element-padding-lg)' : 'var(--form-element-padding)')};
  width: 100%;
  transition: border 0.3s ease-in-out;
  color: var(--body-text-color);
  font-size: var(--font-size-sm);
  border-radius: var(--form-element-radius);
  -webkit-appearance: none;
  -moz-appearance: none;

  &:disabled {
    background: var(--light);
    cursor: not-allowed;
    color: #a9a9a9;
    border-color: #eee;
  }
`;

export const datePickerRow = css`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 15px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
