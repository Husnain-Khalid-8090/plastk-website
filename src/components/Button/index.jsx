import { cx } from 'linaria';
import * as React from 'react';

import { BtnLoader, LoaderWrap, StyledButton, pushable } from './Button.styles';

function Button({
  children,
  loading,
  htmlType,
  type,
  sm,
  md,
  width,
  color,
  rounded,
  disabled,
  className,
  style,
  ...rest
}) {
  return (
    <StyledButton
      type={htmlType === 'submit' ? 'submit' : 'button'}
      btntype={type}
      width={width}
      rounded={rounded}
      sm={sm?.toString()}
      md={md?.toString()}
      color={color}
      disabled={disabled || loading}
      loading={loading}
      className={cx(type === 'pushable' ? pushable : className)}
      style={style}
      {...rest}>
      {!loading ? (
        type === 'pushable' ? (
          <>
            <span className="shadow" />
            <span className="edge" />
            <span className="front">{children}</span>
          </>
        ) : (
          children
        )
      ) : (
        <LoaderWrap>
          <BtnLoader width={width}>
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              data-icon="loading"
              width="1em"
              height="1em"
              fill="#1C1A42"
              aria-hidden="true">
              <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
            </svg>
          </BtnLoader>
          {(width > 115 || !width) && 'loading...'}
        </LoaderWrap>
      )}
    </StyledButton>
  );
}

export default Button;
