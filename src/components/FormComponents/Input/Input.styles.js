import { styled } from 'linaria/react';

export const StyledInput = styled.input`
  border: var(--form-element-border-width) solid
    ${({ $invalid }) => ($invalid ? 'var(--danger)' : 'var(--form-element-border-color)')};
  background: var(--white);
  outline: none;
  height: ${({ lg }) => (lg ? 'var(--form-element-height-lg)' : 'var(--form-element-height)')};
  padding: ${({ lg }) => (lg ? 'var(--form-element-padding-lg)' : 'var(--form-element-padding)')};
  width: 100%;
  transition: border 0.3s ease-in-out;
  color: var(--body-text-color);
  font-size: var(--font-size-sm);
  border-radius: var(--form-element-radius);

  /* padding-left: ${({ $prefix }) => $prefix && '3.25rem'};
  padding-right: ${({ $suffix, $button }) => {
    if ($suffix) return '3.25rem';
    if ($button) return '3.6rem';
    return '';
  }}; */

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--placeholder-color);
  }
  ::-moz-placeholder {
    /* Firefox1+ */
    color: var(--placeholder-color);
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--placeholder-color);
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--placeholder-color);
  }

  &:disabled {
    background: var(--light);
    cursor: not-allowed;
    color: #a9a9a9;
    border-color: #eee;

    ::-moz-placeholder {
      color: #a9a9a9;
    }
    ::-webkit-input-placeholder {
      color: #a9a9a9;
    }
    :-ms-input-placeholder {
      color: #a9a9a9;
    }
    :-moz-placeholder {
      color: #a9a9a9;
    }
  }
`;

export const StyledTextarea = styled.textarea`
  border: var(--form-element-border-width) solid
    ${({ $invalid }) => ($invalid ? 'var(--danger)' : 'var(--form-element-border-color)')};
  background: var(--white);
  outline: none;
  height: ${({ lg }) => (lg ? 'var(--form-element-height-lg)' : 'var(--form-element-height)')};
  padding: ${({ lg }) => (lg ? 'var(--form-element-padding-lg)' : 'var(--form-element-padding)')};
  width: 100%;
  transition: border 0.3s ease-in-out;
  color: var(--body-text-color);
  font-size: var(--font-size-sm);
  border-radius: var(--form-element-radius);
  resize: none;
  min-height: 130px;
`;
