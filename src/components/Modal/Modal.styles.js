import { css } from 'linaria';
import { styled } from 'linaria/react';
// import Button from '../Button';

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  z-index: var(--z-50);
  overflow-x: hidden;
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  opacity: 1;
`;

export const ModalContent = styled.div`
  border-radius: 16px;
  padding: 1.875rem;
  width: 100%;
  position: relative;
  margin: 10vh auto;
  outline: none;

  @media (max-width: 575px) {
    padding: 1.875rem 1.5rem;
  }
`;

export const CloseModalButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid #f6f8fa;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: var(--font-size-base);
  }
  position: ${({ absolute }) => absolute && 'absolute'};
  top: ${({ absolute }) => absolute && '-12px'};
  right: ${({ absolute }) => absolute && '-5px'};
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  max-width: ${({ $width }) => ($width ? `${$width}px` : '544px')};
  min-height: calc(100% - 1rem);

  /* ${({ $xl }) =>
    $xl &&
    css`
      max-width: 1060px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${({ $lg }) =>
    $lg &&
    css`
      max-width: 715px;
    `}

  ${({ $sm }) =>
    $sm &&
    css`
      max-width: 350px;
    `} */

  @media (min-width: 576px) {
    margin: ${({ $lg }) => ($lg ? '1.75rem 0.625rem' : '1.75rem auto;')};
    min-height: calc(100% - 3.5rem);
  }
  @media (min-width: 730px) {
    margin: 1.75rem auto;
  }

  /* ${({ imgPreview }) =>
    imgPreview &&
    css`
      ${ModalContent} {
        padding: 10px;
        position: relative;
      }
      CloseModalButton {
        position: absolute;
        top: 15px;
        right: 15px;
      }
    `} */
`;

export const modalHeading = css`
  margin-bottom: 0;
  padding-right: 0.75rem;
  flex-grow: 1;
  color: var(--black);
`;

export const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
