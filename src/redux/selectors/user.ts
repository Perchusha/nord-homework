import { IMainState } from '../../types';

export const selectToken = (state: IMainState) => state.User.token;

export const selectUsername = (state: IMainState) => state.User.username;

export const selectUser = (state: IMainState) => state.User;
