import { styled } from 'linaria/react';

export const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const TooltipBtn = styled.span`
  display: flex;
`;

export const StyledTooltip = styled.div`
  position: absolute;
  border-radius: 4px;
  top: ${({ height }) => height && `calc(-${height}px - var(--tooltip-margin))`};
  left: 50%;
  transform: translateX(-50%);
  color: var(--tooltip-text-color);
  background: var(--tooltip-background-color);
  z-index: var(--z-65);
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  text-align: center;
  font-size: var(--font-size-xs);
  line-height: calc(var(--font-size-xs) + 0.3125rem);
  padding: 8px 10px;

  /* CSS border triangles */
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: var(--tooltip-arrow-size) var(--tooltip-arrow-size) 0 var(--tooltip-arrow-size);
    border-color: var(--tooltip-background-color) transparent transparent transparent;
  }

  background: ${({ type }) => {
    if (type === 'success') {
      return 'var(--success)';
    }
    if (type === 'info') {
      return 'var(--light-blue)';
    }
    if (type === 'error') {
      return 'var(--danger)';
    }
    if (type === 'warning') {
      return 'var(--warning)';
    }
    if (type === 'light') {
      return 'var(--white)';
    }
    if (type === 'dark') {
      return 'var(--black)';
    }
    return 'var(--success)';
  }};

  &:before {
    border-color: ${({ type }) => {
      if (type === 'success') {
        return 'var(--success) transparent transparent transparent';
      }
      if (type === 'info') {
        return 'var(--light-blue) transparent transparent transparent';
      }
      if (type === 'error') {
        return 'var(--danger) transparent transparent transparent';
      }
      if (type === 'warning') {
        return 'var(--warning) transparent transparent transparent';
      }
      if (type === 'light') {
        return 'var(--white) transparent transparent transparent';
      }
      if (type === 'dark') {
        return 'var(--black) transparent transparent transparent';
      }
      return 'var(--success) transparent transparent transparent';
    }};
  }
`;
