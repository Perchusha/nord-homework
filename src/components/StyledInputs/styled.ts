import styled, { css } from 'styled-components';

const inputDefault = css`
  padding: 0.5vmin 1vmin;
  font-family: Manrope, serif;
  width: 100%;
  background: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.primaryText};
  border: 0.1vmin solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize};

  &:focus {
    box-shadow: 0 0 0 0.1vmin ${({ theme }) => theme.focus};
  }

  &:active {
    box-shadow: 0 0 0 0.2vmin ${({ theme }) => theme.active};
  }
`;

export const Input = styled.input`
  ${inputDefault}
`;

export const Select = styled.select`
  ${inputDefault}
`;
