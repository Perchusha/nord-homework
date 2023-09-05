import styled from 'styled-components';

export const StyledSVG = styled.svg`
  &:hover {
    filter: brightness(0.5);
  }

  &:focus {
    outline: unset;
  }

  &:focus-visible {
    box-shadow: 0 0 0 0.2vmin ${({ theme }) => theme.active};
  }
`;
