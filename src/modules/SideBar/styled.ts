import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  border-right: 0.1vmin solid ${({ theme }) => theme.border};
  width: 30vmin;

  > :not(:last-child) {
    margin-bottom: 2vmin;
  }
`;

export const Logo = styled.a`
  all: unset;
  cursor: pointer;
  padding: 2vmin;
  font-weight: 800;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.3s;
  color: ${({ theme }) => theme.primaryText};
  font-size: ${({ theme }) => theme.fontSize};

  &:hover,
  &:focus-visible {
    text-shadow: 0 0 0.8vmin ${({ theme }) => theme.active};
  }
`;

export const BottomPart = styled.div`
  margin: auto auto 2vmin;
`;
