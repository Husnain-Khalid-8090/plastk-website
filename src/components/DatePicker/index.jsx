import React from 'react';

import DatePicker from 'react-date-picker';
import { StyledFormGroup } from '../../styles/common';
import { getDateObject } from '../../helpers/common';
import { Error } from '../Field/Field.styles';
import Label from '../FormComponents/Label';
import { StyledDatePicker } from './DatePicker.styles';

import { moAttr } from '../../../utils/moattr';

function DatePickerComp({ children, label, error, rules, noMargin, onChange, ...props }) {
  return (
    <StyledFormGroup $invalid={error}>
      {label && <Label required={rules?.filter(({ required }) => required).length}>{label}</Label>}
      <StyledDatePicker error={error}>
        <DatePicker
          {...props}
          value={props?.value ? getDateObject(props.value) : ''}
          onChange={e => {
            const fixDate = dateParram => {
              const date = new Date(dateParram);
              const userTimezoneOffset = date.getTimezoneOffset() * 60000;
              return new Date(date.getTime() - userTimezoneOffset).toJSON();
            };
            onChange({ target: { value: e ? fixDate(e) : '', name: props.name } });
            moAttr.selectAttr('dob', e ? fixDate(e) : '');
          }}>
          {children}
        </DatePicker>
      </StyledDatePicker>
      {error && (
        <Error id={`${props.name}Error`} role="alert">
          {error}
        </Error>
      )}
    </StyledFormGroup>
  );
}

export default DatePickerComp;
