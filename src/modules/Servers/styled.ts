import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4vmin 6vmin;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryText};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  font-size: ${({ theme }) => theme.fontSize};
`;

export const LoginTitle = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: ${({ theme }) => theme.titleSize};
  text-align: center;
  margin-bottom: 2vmin;
  font-weight: 700;
`;

export const ListElement = styled.div`
  padding: 1vmin 2vmin;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0.1vmin solid ${({ theme }) => theme.border};
`;

export const SortBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const ListControls = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  padding: 1vmin;
`;

export const ListWrapper = styled.div`
  overflow-y: auto;
  padding: 1vmin;
  background: ${({ theme }) => theme.backgroundDark};
  border: 0.3vmin solid ${({ theme }) => theme.border};

  ${ListElement}:not(:last-child) {
    margin-bottom: 1vmin;
  }
`;
