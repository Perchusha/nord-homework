import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 30vmin);
  padding: 2vmin;
  background: ${({ theme }) => theme.backgroundLight};
`;
