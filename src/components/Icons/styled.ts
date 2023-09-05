import styled from 'styled-components';

export const StyledSVG = styled.svg<{ $isHovering: boolean }>`
  ${({ $isHovering, theme }) => {
    if ($isHovering) {
      return `
				&:hover {
			    filter: brightness(0.5);
			  }
			
			  &:focus {
			    outline: unset;
			  }
			
			  &:focus-visible {
			    box-shadow: 0 0 0 0.2vmin ${theme.active};
			  }
			`;
    }
  }}
`;
