import { createReducer } from '@reduxjs/toolkit';
import { setTheme } from '../actions';
import { Themes } from '../../utils';
import { IThemeInitialState, ITheme } from '../types';

const themeKey: ITheme = (localStorage.getItem('theme') as ITheme) || 'dark';

const initialState: IThemeInitialState = {
  key: themeKey,
  theme: Themes[themeKey],
};

export default createReducer(initialState, builder => {
  builder.addCase(setTheme, (state, { payload }) => {
    state.key = payload;
    state.theme = Themes[payload];
    localStorage.setItem('theme', payload);
  });
});
