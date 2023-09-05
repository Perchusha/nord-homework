import styled from 'styled-components';

export const LogoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.span``;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin: 2vmin 2vmin 0 auto;

  button:not(:last-child) {
    margin-right: 1vmin;
  }
`;
