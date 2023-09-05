import { StyledModal } from '../../components';
import { useState } from 'react';

export const Logout = () => {
  // TODO: logout logic with Logout func in utils
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <StyledModal handleClose={handleCancel} isOpen={isOpen}>
      Logout
    </StyledModal>
  );
};
