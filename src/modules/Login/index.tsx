import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../redux/selectors';
import { setUser, setUsername } from '../../redux/actions';
import { StyledModal, StyledInput, StyledButton } from '../../components';
import { login } from '../../requests';
import { ILoginParams } from '../../types';
import { IError } from './types';
import { LoginWrapper, ErrorSpan } from './styled';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const [error, setError] = useState<IError>({
    show: false,
    message: '',
  });

  const [loginState, setLoginState] = useState<ILoginParams>({
    username: '',
    password: '',
  });

  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    if (token) {
      setIsOpen(false);
      navigate('/welcome');
    } else {
      dispatch(setUsername(''));
    }
  }, []);

  const validate = () => {
    if (!loginState.username.length) {
      return 'Username is required fill.';
    }
    if (!loginState.password.length) {
      return 'Password is required fill.';
    }
    if (loginState.password.length <= 6) {
      return 'Password must be longer then 6 symbols.';
    }
    return true;
  };

  const loginHandler = async () => {
    const isValid = validate();
    if (isValid === true) {
      const { token, message } = await login(loginState);

      if (token) {
        dispatch(
          setUser({
            token,
            username: loginState.username,
          })
        );
        setIsOpen(false);
        navigate('/welcome');
      } else if (message) {
        let errorMessage: string = '';
        switch (message) {
          case 'Unauthorized':
            errorMessage = 'Username or password is incorrect.';
            break;
          default:
            errorMessage = 'Something goes wrong. Please contact site support.';
            break;
        }
        setError({
          show: true,
          message: errorMessage,
        });
      }
    } else {
      setError({
        show: true,
        message: isValid,
      });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    navigate('/welcome');
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, key: 'username' | 'password') => {
      setError({
        show: false,
        message: '',
      });
      setLoginState((state: ILoginParams) => {
        state[key] = event.target.value;
        return state;
      });
    },
    [error, loginState]
  );

  return (
    <StyledModal
      style={{ width: '60vmin', height: '40vmin' }}
      handleClose={handleClose}
      isOpen={isOpen}
    >
      <LoginWrapper>
        <StyledInput
          label="Username"
          id="username"
          name="username"
          type="text"
          required={true}
          onChange={event => handleChange(event, 'username')}
        />
        <StyledInput
          label="Password"
          id="password"
          name="password"
          type="password"
          required={true}
          onChange={event => handleChange(event, 'password')}
        />
        <StyledButton type="submit" style={{ marginTop: '4vmin' }} onClick={loginHandler}>
          Login
        </StyledButton>
        <ErrorSpan $show={error.show}>{error.message}</ErrorSpan>
      </LoginWrapper>
    </StyledModal>
  );
};
