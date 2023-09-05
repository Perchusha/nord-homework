import React, { useRef } from 'react';
import { ReactPortal } from '../ReactPortal';
import { StyledButton } from '../StyledButtons';
import { IStyledModal, onCloseHandlerType } from './types';
import { ModalOverlay, Modal, ModalContent, ModalBottomBar } from './styled';

export const StyledModal = ({
  children,
  isOpen,
  handleClose,
  withButton = false,
  ...props
}: IStyledModal<HTMLElement>) => {
  if (!isOpen) return null;
  const ref = useRef<HTMLDivElement>(null);
  const onCloseHandler: onCloseHandlerType = withButton
    ? handleClose
    : (event: React.MouseEvent) => {
        if (event.target === ref.current) {
          handleClose(event);
        }
      };

  return (
    <ReactPortal wrapperId="login-modal">
      <ModalOverlay ref={ref} onClick={onCloseHandler}>
        <Modal {...props}>
          <ModalContent $withButton={withButton}>{children}</ModalContent>
          {withButton ? (
            <ModalBottomBar>
              <StyledButton onClick={onCloseHandler}>Close</StyledButton>
            </ModalBottomBar>
          ) : null}
        </Modal>
      </ModalOverlay>
    </ReactPortal>
  );
};
