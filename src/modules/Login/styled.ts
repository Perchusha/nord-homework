import styled from 'styled-components';
import { StyledButton } from '../../components';

export const LoginButton = styled(StyledButton)`
  margin: auto auto 2vmin;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
`;

export const ErrorSpan = styled.span<{ $show: boolean }>`
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  position: absolute;
  bottom: -2vmin;
  width: 100%;
  text-align: center;
  font-size: 1.5vmin;
  color: ${({ theme }) => theme.dangerText};
`;
