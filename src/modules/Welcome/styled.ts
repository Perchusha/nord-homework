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

  span:not(:first-child) {
    margin-top: 2vmin;
  }
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.titleSize};
  text-align: center;
  margin-bottom: 2vmin;
  font-weight: 700;
`;

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fontSize};
  text-align: justify;
  text-indent: 3vmin;
`;

export const Remark = styled.span`
  font-weight: 200;
  font-size: 1.5vmin;
  font-style: italic;
  text-align: right;
`;
