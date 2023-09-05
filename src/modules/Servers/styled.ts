import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4vmin 6vmin;
  background: ${({ theme }) => theme.backgroundLight};
  color: ${({ theme }) => theme.primaryText};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
