import React from 'react';

export interface IStyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

export interface IStyledSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  ref?: React.RefObject<HTMLSelectElement>;
}
