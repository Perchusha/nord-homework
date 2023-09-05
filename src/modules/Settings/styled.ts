import styled from 'styled-components';

export const SettingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vmin;
`;

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

  ${SettingBlock} {
    margin-bottom: 2vmin;
    border-bottom: 0.3vmin solid ${({ theme }) => theme.border};
  }
`;

export const Title = styled.span`
  margin-bottom: 2vmin;
  font-size: ${({ theme }) => theme.titleSize};
`;

export const ThemeButtons = styled.div`
  display: flex;

  button:not(:last-child) {
    margin-right: 2vmin;
  }
`;
