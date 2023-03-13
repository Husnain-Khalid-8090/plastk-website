import * as React from 'react';

import { StyledFormGroup } from '../../styles/common';
import FakeInput from '../FormComponents/FakeInput';
import FakeLabel from '../FormComponents/FakeLabel';
import Input from '../FormComponents/Input';
import InputIcon from '../FormComponents/InputIcon';
import Label from '../FormComponents/Label';
import { Error, InputHolder } from './Field.styles';

const defaultProps = {
  type: 'text',
};

const Field = React.forwardRef(
  (
    {
      rules,
      error,
      name,
      invalid,
      label,
      type,
      prefix,
      suffix,
      rounded,
      noMargin,
      margin,
      button,
      searchField,
      onlyRead,
      labelIcon,
      ...props
    },
    ref,
  ) => {
    const [isRevealPwd, setIsRevealPwd] = React.useState(false);
    const inputProps = {
      id: props.id ?? name,
      name,
      type,
      invalid,
      'aria-describedby': `${name}Error`,
      ...props,
    };
    const renderInputFirst = type === 'checkbox' || type === 'radio';
    const pointer = {
      cursor: 'pointer',
    };
    const style = {
      marginBottom: margin,
    };
    return (
      <StyledFormGroup $invalid={invalid || error} noMargin={noMargin} style={style}>
        {renderInputFirst && label && (
          <Label
            htmlFor={inputProps.id}
            labelIcon={labelIcon}
            onlyRead={onlyRead}
            css="display: flex !important; align-items:center; margin-bottom:0 !important;">
            <Input
              {...inputProps}
              ref={ref}
              $invalid={invalid || error}
              checked={inputProps?.value}
              // eslint-disable-next-line no-shadow
              onChange={({ target: { name, checked, id } }) =>
                inputProps?.onChange?.({ target: { name, value: checked, id } })
              }
            />
            <FakeInput>{type === 'checkbox' && <i className="icon-check" />}</FakeInput>
            <FakeLabel required={rules?.filter(({ required }) => required).length}>{label}</FakeLabel>
          </Label>
        )}

        {renderInputFirst || (
          <>
            {label && (
              <Label
                labelIcon={labelIcon}
                htmlFor={inputProps.id}
                required={rules?.filter(({ required }) => required).length}>
                {label}
              </Label>
            )}
            <InputHolder $searchField={searchField}>
              {/* input left icon */}
              {prefix && (
                <InputIcon
                  as={type === 'search' && 'button'}
                  type={type === 'search' ? 'button' : undefined}
                  prefix={prefix}
                  invalid={invalid || error}
                  css={type === 'search' && 'color: var(--primary)'}>
                  {prefix}
                </InputIcon>
              )}
              {/* password field */}
              {type === 'password' ? (
                <>
                  <Input
                    ref={ref}
                    {...inputProps}
                    $prefix
                    $suffix
                    $invalid={invalid || error}
                    type={isRevealPwd ? 'text' : 'password'}
                    $rounded={rounded}
                    $button={button && true}
                    autoComplete="on"
                  />
                  <InputIcon suffix style={pointer} onClick={() => setIsRevealPwd(prevState => !prevState)}>
                    {isRevealPwd ? (
                      <i className="material-icons-outlined">visibility</i>
                    ) : (
                      <i className="material-icons-outlined">visibility_off</i>
                    )}
                  </InputIcon>
                </>
              ) : (
                <>
                  {/* any other input type */}
                  <Input
                    ref={ref}
                    {...inputProps}
                    $prefix={prefix}
                    $suffix={suffix}
                    $invalid={invalid || error}
                    $rounded={rounded}
                    $button={button && true}
                  />
                  {/* input right icon */}
                  {suffix && (
                    <InputIcon suffix={suffix} invalid={invalid || error}>
                      {suffix}
                    </InputIcon>
                  )}
                  {button}
                </>
              )}
            </InputHolder>
          </>
        )}
        {invalid ||
          (error && (
            <Error id={`${name}Error`} role="alert">
              {error}
            </Error>
          ))}
      </StyledFormGroup>
    );
  },
);

Field.defaultProps = defaultProps;

export default Field;
