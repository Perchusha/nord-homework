import React from 'react';

export type onCloseHandlerType = (event: React.MouseEvent) => void;

export interface IStyledModal<T> extends React.HTMLAttributes<T> {
  isOpen: boolean;
  handleClose: onCloseHandlerType;
  withButton?: boolean;
}
