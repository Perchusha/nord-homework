import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
`;

export const Modal = styled.div`
  width: 40%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryText};
  font-size: ${({ theme }) => theme.fontSize};
  padding: 4vmin;

  @media screen and ${({ theme }) => theme.devices.mobile} {
    width: 80%;
    height: 16%;
  }

  @media screen and ${({ theme }) => theme.devices.tablet} {
    width: 80%;
    height: 26%;
  }
`;

export const ModalContent = styled.div<{ $withButton: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: ${({ $withButton }) => ($withButton ? 'calc(100% - 8vmin)' : '100%')};
  width: 100%;
`;

export const ModalBottomBar = styled.div`
  height: 8vmin;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1vmin 2vmin;
`;
