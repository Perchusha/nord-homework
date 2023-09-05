import { createReducer } from '@reduxjs/toolkit';
import { setToken, setUsername, setUser } from '../actions';
import { IUser } from '../../types';

const initialState: IUser = {
  username: localStorage.getItem('username') || '',
  token: localStorage.getItem('token') || '',
};

export default createReducer(initialState, builder => {
  builder.addCase(setToken, (state, { payload }) => {
    localStorage.setItem('token', payload);
    state.token = payload;
    return state;
  });
  builder.addCase(setUsername, (state, { payload }) => {
    localStorage.setItem('username', payload);
    state.username = payload;
    return state;
  });
  builder.addCase(setUser, (state, { payload }) => {
    localStorage.setItem('token', payload.token);
    localStorage.setItem('username', payload.username);
    return payload;
  });
});
