import React from 'react';

export interface IStyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.RefObject<HTMLInputElement>;
}

export interface IStyledSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  ref?: React.RefObject<HTMLSelectElement>;
}
