import { createAction } from '@reduxjs/toolkit';
import { ITheme } from '../types';

export const setTheme = createAction<ITheme>('theme/SET_DATA');
