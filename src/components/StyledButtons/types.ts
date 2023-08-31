import React from 'react';
import { LinkProps } from 'react-router-dom';

export type IButtonMode = 'base' | 'success' | 'error';

export interface IStyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: IButtonMode;
  ref?: React.RefObject<HTMLButtonElement>;
  $active?: boolean;
}

export interface INavigatorButtonProps extends LinkProps {
  $active?: boolean;
}
