import { styled } from 'linaria/react';

export const StyledDatePicker = styled.div`
  .react-date-picker {
    width: 100%;
  }
  .react-date-picker__wrapper {
    border: var(--form-element-border-width) solid
      ${({ error }) => (error ? 'var(--danger)' : 'var(--form-element-border-color)')};
    background: var(--white);
    outline: none;
    height: ${({ lg }) => (lg ? 'var(--form-element-height-lg)' : 'var(--form-element-height)')};
    padding: ${({ lg }) => (lg ? 'var(--form-element-padding-lg)' : 'var(--form-element-padding)')};
    width: 100%;
    transition: border 0.3s ease-in-out;
    color: var(--body-text-color);
    font-size: var(--font-size-sm);
    border-radius: var(--form-element-radius);
  }
  &.react-date-picker--disabled {
    background: none;
    .react-date-picker__wrapper {
      background: var(--light);
      cursor: not-allowed;
      color: #ccc;
      border-color: #eee;
    }
    input {
      cursor: not-allowed;
      color: #ccc;
    }
    button {
      cursor: not-allowed;
    }
    .react-date-picker__button__icon {
      stroke: #ccc !important;
    }
  }
`;
