import React from 'react';

import { StyledFormGroup } from '../../styles/common';
import { Error, InputHolder } from '../Field/Field.styles';
import Input from '../FormComponents/Input';
import Label from '../FormComponents/Label';

export default function GoogleAutoComplete({
  value,
  customStreetAddress,
  onCustomStreetAddressChange,
  rules,
  labelIcon,
  error,
  ...props
}) {
  const inputProps = {
    id: props.id ?? props.name,
    name: props.name,
    type: props.type,
    invalid: props.invalid,
    'aria-describedby': `${props.name}Error`,
    ...props,
  };

  return (
    <StyledFormGroup $invalid={error}>
      <Label
        htmlFor="google-places-autocomplete-input"
        required={rules?.filter(({ required }) => required).length}
        labelIcon={labelIcon}>
        {props.label}
      </Label>
      <InputHolder $searchField={props.searchField}>
        <Input
          {...inputProps}
          onChange={e => {
            onCustomStreetAddressChange(e.target.value);
          }}
          $invalid={props.invalid || props.error}
          type={props.type || 'text'}
          $rounded={props.rounded}
          $button={props.button && true}
          placeholder="Enter a location"
          value={customStreetAddress}
          autoFocus
          $postfix
          autoComplete="off"
          autoCorrect="off"
          spellCheck="off"
          autoCapitalize="off"
          id="google-places-autocomplete-input"
        />
      </InputHolder>
      {props.invalid ||
        (props.error && (
          <Error id={`${props.name}Error`} role="alert">
            {props.error}
          </Error>
        ))}
    </StyledFormGroup>
  );
}
