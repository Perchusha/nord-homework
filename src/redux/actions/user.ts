import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../types';

export const setToken = createAction<string>('user/SET_TOKEN');

export const setUsername = createAction<string>('user/SET_USERNAME');

export const setUser = createAction<IUser>('user/SET_DATA');
