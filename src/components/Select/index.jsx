import React from 'react';
import Select, { components } from 'react-select';

import { moAttr } from '../../../utils/moattr';
import { StyledFormGroup } from '../../styles/common';
import { Error } from '../Field/Field.styles';
import InputIcon from '../FormComponents/InputIcon';
import Label from '../FormComponents/Label';
import { StyledSelect } from './Select.styles';

function DropdownIndicator(props) {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <InputIcon $suffix>
          <i className="material-icons-outlined">expand_more</i>
        </InputIcon>
      </components.DropdownIndicator>
    )
  );
}

function Component({ options, label, noMargin, error, rules, disabled, ...props }) {
  return (
    <StyledFormGroup $invalid={error} noMargin={noMargin}>
      {label && <Label required={rules?.filter(({ required }) => required).length}>{label}</Label>}
      <StyledSelect error={error}>
        <Select
          {...props}
          options={options}
          isDisabled={disabled}
          classNamePrefix="react-select"
          error={error}
          components={{ DropdownIndicator, IndicatorSeparator: () => null }}
          onChange={_ => {
            props.onChange({ target: { value: _, name: props.name } });
            moAttr.selectAttr(props.placeholder, _.label);
          }}
        />
      </StyledSelect>

      {error && (
        <Error id={`${props.name}Error`} role="alert">
          {error}
        </Error>
      )}
    </StyledFormGroup>
  );
}

export default Component;
