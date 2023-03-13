import { css } from '@linaria/core';
import { styled } from '@linaria/react';

export const BtnLoader = styled.span`
  margin-right: ${({ $width }) => ($width > 115 || !$width) && '10px'};
  svg {
    animation: loadingCircle 1s linear infinite;
    @keyframes loadingCircle {
      to {
        transform: rotate(1turn);
      }
    }
  }
`;

export const StyledButton = styled.button`
  position: relative;
  border: none;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  text-align: center;
  padding: 15px 20px;
  cursor: pointer;
  color: var(--white);
  font-size: ${({ sm, md }) => {
    if (sm) {
      return 'var(--font-size-sm)';
    }
    if (md) {
      return 'var(--font-size-base)';
    }
    return 'var(--font-size-lg)';
  }};
  line-height: calc(var(--font-size-sm) + 0.3125rem);
  font-weight: 700;
  max-width: ${({ width }) => width && `${width}px`};
  transition: filter 0.3s linear, box-shadow 0.3s linear;
  box-shadow: 0px 6px 32px -3px rgba(170, 225, 93, 0.21);
  border-radius: ${({ rounded }) => {
    if (rounded) {
      return '50px';
    }
    return '10px';
  }};

  @media (min-width: 768px) {
    padding: ${({ sm, md }) => {
      if (sm) {
        return '10px 20px';
      }
      if (md) {
        return '16px 20px';
      }
      return 'var(--btn-padding)';
    }};
  }

  background: ${({ btntype }) => {
    if (btntype === 'primary') {
      return 'var(--primary)';
    }
    if (btntype === 'secondary') {
      return 'var(--secondary)';
    }
    if (btntype === 'gradient') {
      return 'linear-gradient(265.53deg,#2f80ed 0,#7b67fb 100%)';
    }
    if (btntype === 'btnblue') {
      return 'var(--blue)';
    }
    if (btntype === 'btngray') {
      return 'var(--gray-2)';
    }
    if (btntype === 'darkblack') {
      return 'var(--dark-black)';
    }
    return 'var(--primary)';
  }};

  &:hover {
    color: var(--white);
    box-shadow: 0px 10px 32px 3px rgba(170, 225, 93, 0.21);
    filter: brightness(105%) saturate(120%);
  }

  @media (max-width: 575px) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const pushable = css`
  display: block;
  font-size: 16px;
  line-height: 20px;
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0 auto;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;

  &:hover {
    filter: brightness(110%);
  }
  &:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  &:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(to left, #558118 0%, #8ed728 8%, #8ed728 92%, #558118 100%);
  }
  .front {
    display: block;
    position: relative;
    padding: 14px 30px;
    border-radius: 12px;
    font-size: 1rem;
    color: white;
    background: var(--primary);
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }
`;
