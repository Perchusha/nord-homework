import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { IButtonMode } from './types';

const ButtonDefaultCSS = css`
  all: unset;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
  height: fit-content;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 400;

  &:hover {
    ${({ theme }) => theme.hover};
  }

  &:active {
    box-shadow: 0 0 0 0.3vmin ${({ theme }) => theme.active};
  }

  &:focus-visible {
    box-shadow: 0 0 0 0.2vmin ${({ theme }) => theme.focus};
  }
`;

export const Button = styled.button<{ mode: IButtonMode; $active: boolean }>`
  ${ButtonDefaultCSS};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  padding: 0.8vmin 1.6vmin;

  ${({ $active }) => {
    return $active ? `filter: brightness(70%) !important;` : '';
  }}

  ${({ mode, theme }) => {
    switch (mode) {
      case 'base':
        return `color: ${theme.primaryText}; background: ${theme.primary};`;
      case 'success':
        return `color: ${theme.successText}; background: ${theme.success};`;
      case 'error':
        return `color: ${theme.dangerText}; background: ${theme.danger};`;
    }
  }}
`;

export const Navigate = styled(Link)<{ $active: boolean }>`
  ${ButtonDefaultCSS};
  padding: 1vmin 2vmin;

  color: ${({ theme }) => theme.primaryText};

  background: ${({ $active, theme }) => {
    return $active ? theme.primary : '';
  }};
`;
