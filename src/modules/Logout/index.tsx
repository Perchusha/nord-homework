import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { StyledModal, StyledButton } from '../../components';
import { LogoutWrapper, Title, ButtonsWrapper } from './styled';
import { setUser } from '../../redux/actions';

export const Logout = () => {
  const dispatch = useDispatch();
  const { token, username } = useSelector(selectUser);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    if (!token && !username) navigate('/welcome');
  }, [token, username]);

  const handleLogout = () => {
    dispatch(setUser({ token: '', username: '' }));
    setIsOpen(false);
    navigate('/welcome');
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <StyledModal
      style={{ height: '20vmin', width: '60vmin' }}
      handleClose={handleCancel}
      isOpen={isOpen}
    >
      <LogoutWrapper>
        <Title>Are you sure you want to logout?</Title>
        <ButtonsWrapper>
          <StyledButton mode="success" onClick={handleLogout}>
            Okay
          </StyledButton>
          <StyledButton mode="error" onClick={handleCancel}>
            Cancel
          </StyledButton>
        </ButtonsWrapper>
      </LogoutWrapper>
    </StyledModal>
  );
};
