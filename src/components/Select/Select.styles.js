import { styled } from 'linaria/react';

export const StyledSelect = styled.div`
  .react-select__control {
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
    box-shadow: none;
  /
  .react-select__placeholder {
    color: var(--placeholder-color);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: calc(100% - 8px);
  }
  .react-select__value-container {
    padding-left: 0;
    padding-right: 0;
  }
  .react-select__menu {
    box-shadow: 3px 18px 44px rgba(176, 183, 195, 0.28);
    border-radius: 8px;
    border: 1px solid var(--field-border-color);
    z-index: var(--z-30);
  }
  .react-select__option {
    &:active {
      background: var(--light);
    }
  }
  .react-select__option--is-focused {
    background: var(--light);
  }
  .react-select__option--is-selected {
    background: var(--primary);
  }
  .react-select--is-disabled {
    .react-select__control,
    .react-select__placeholder {
      pointer-events: auto;
      cursor: not-allowed !important;
      background: var(--light);
      border-color: #eee;
    }
  }
`;
