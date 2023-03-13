/* eslint-disable no-unused-vars */
import { set } from 'date-fns';
import { cx } from 'linaria';
import React, { useEffect, useMemo, useState } from 'react';

import { StyledFormGroup } from '../../styles/common';
import { Error } from '../Field/Field.styles';
import Label from '../FormComponents/Label';
import { StyledSelect, datePickerRow } from './DateOfBirthPicker.styles';

function Select(props) {
  const onChange = e => {
    props.setValue(parseInt(e.target.value, 10));
  };
  return (
    <StyledSelect value={props.value} onChange={onChange} error={props.error}>
      {props.options.map(value => {
        if (typeof value !== 'object') {
          return <option value={value}>{value}</option>;
        }

        return <option value={value.value}>{value.label}</option>;
      })}
    </StyledSelect>
  );
}
function sequence(start, end) {
  const array = [];
  for (let i = start; i <= end; i += 1) {
    array.push(i);
  }
  return array;
}

function datesInMonth(year, month) {
  switch (month) {
    case 2:
      // eslint-disable-next-line no-case-declarations
      const leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      return leapYear ? 29 : 28;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;

    default:
      return 30;
  }
}
function DateBirthPicker({ label, error, rules, name, onChange, value, onSetDateOfBirth }) {
  const [state, setState] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  });

  const years = sequence(new Date().getFullYear() - 122, new Date().getFullYear()).reverse();

  const months = sequence(1, 12).map(item => {
    switch (item) {
      case 1:
        return { label: 'Jan', value: '1' };
      case 2:
        return { label: 'Feb', value: '2' };
      case 3:
        return { label: 'Mar', value: '3' };
      case 4:
        return { label: 'Apr', value: '4' };
      case 5:
        return { label: 'May', value: '5' };
      case 6:
        return { label: 'Jun', value: '6' };
      case 7:
        return { label: 'Jul', value: '7' };
      case 8:
        return { label: 'Aug', value: '8' };
      case 9:
        return { label: 'Sep', value: '9' };
      case 10:
        return { label: 'Oct', value: '10' };
      case 11:
        return { label: 'Nov', value: '11' };
      case 12:
        return { label: 'Dec', value: '12' };

      default:
        return { label: 'Jan', value: '1' };
    }
  });
  const onChangeDate = (date = state.date, month = state.month, year = state.year) => {
    if (date && month && year)
      onChange({
        target: {
          value: new Date(
            set(new Date(), {
              year,
              month: month - 1,
              date,
            }),
          ).toISOString(),
          name,
        },
      });
  };

  useEffect(() => {
    const fixDate = dateParram => {
      const dateString = new Date(
        set(new Date(), {
          year: dateParram.year,
          month: dateParram.month - 1,
          date: dateParram.date,
        }),
      ).toISOString();
      const date = new Date(dateString);
      const userTimezoneOffset = date.getTimezoneOffset() * 60000;
      return new Date(date.getTime() - userTimezoneOffset).toJSON();
    };
    const fixed = fixDate(state);
    onSetDateOfBirth(fixed);
  }, [state]);

  useEffect(() => {
    if (value) {
      setState({
        year: new Date(value).getFullYear(),
        month: new Date(value).getMonth() + 1,
        date: new Date(value).getDate(),
      });
      onChangeDate(new Date(value).getDate(), new Date(value).getMonth() + 1, new Date(value).getFullYear());
    }
  }, []);

  const setDates = () => {
    const numDates = datesInMonth(state.year, state.month);
    const dates = sequence(1, numDates);
    return dates;
  };

  const dates = useMemo(() => setDates(), [state?.year, state?.month]);

  const setYear = year => {
    setState(prev => ({ ...prev, year }));
    onChangeDate(state.date, state.month, year);
  };

  const setMonth = month => {
    setState(prev => ({ ...prev, month }));
    onChangeDate(state.date, month, state.year);
  };

  const setDate = date => {
    setState(prev => ({ ...prev, date }));
    onChangeDate(date, state.month, state.year);
  };

  return (
    <StyledFormGroup $invalid={error}>
      {label && <Label required={rules?.filter(({ required }) => required).length}>{label}</Label>}
      <div className={cx(datePickerRow)}>
        <Select value={state.date} setValue={setDate} options={dates} error={error} />
        <Select value={state.month} setValue={setMonth} options={months} error={error} />
        <Select value={state.year} setValue={setYear} options={years} error={error} />
      </div>
      {error && (
        <Error id={`${name}Error`} role="alert">
          {error}
        </Error>
      )}
    </StyledFormGroup>
  );
}

export default DateBirthPicker;
