import * as React from 'react';
// import ReactDOM from 'react-dom';
import { cx } from 'linaria';
import { Background, ModalWrapper, ModalContent, CloseModalButton, modalHeading, flex } from './Modal.styles';
import { moengage } from '../../../utils/moengageEvents';

// const modalRoot = typeof document !== `undefined` ? document.getElementById('modal-root') : null;

function Modal({
  isOpen,
  setIsOpen = () => {},
  title,
  children,
  sm,
  lg,
  xl,
  isClosable = true,
  imgPreview,
  width,
  moType,
}) {
  const modalRef = React.useRef();

  const closeModal = e => {
    if (modalRef.current === e.target && isClosable) {
      setIsOpen(false);
      document.body.style.overflow = 'visible';
    }
  };

  const keyPress = React.useCallback(
    e => {
      if (e.key === 'Escape' && isOpen && isClosable) {
        setIsOpen(false);
        document.body.style.overflow = 'visible';
      }
    },
    [setIsOpen, isOpen],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);
  const modalStyle = {
    marginBottom: !imgPreview ? '1.875rem' : !title ? '0' : '',
  };
  return (
    isOpen && (
      <Background onClick={closeModal} ref={modalRef}>
        <ModalWrapper isOpen={isOpen} $xl={xl} $lg={lg} $sm={sm} $width={width} imgPreview={imgPreview}>
          <ModalContent>
            <div className={cx(flex)} style={modalStyle}>
              {!imgPreview && title && <h3 className={cx(modalHeading, 'no-border')}>{title}</h3>}
              {isClosable !== false && (
                <CloseModalButton
                  type="secondary"
                  shape="circle"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    document.body.style.overflow = 'visible';
                    moengage.sentinelCloseModal(moType);
                  }}
                  size={35}
                  css="flex-shrink:0;"
                  absolute={!title && true}>
                  <i className="material-icons-outlined">close</i>
                </CloseModalButton>
              )}
            </div>
            {children}
          </ModalContent>
        </ModalWrapper>
      </Background>
    )
  );
}

export default Modal;
