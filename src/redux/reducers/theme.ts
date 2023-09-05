import { createReducer } from '@reduxjs/toolkit';
import { setTheme } from '../actions';
import { Themes } from '../../utils';
import { IThemeInitialState } from '../../types';
import { ITheme } from '../../types';

const themeKey: ITheme = (localStorage.getItem('theme') as ITheme) || 'dark';

const initialState: IThemeInitialState = {
  key: themeKey,
  theme: Themes[themeKey],
};

const root = document.documentElement;
root.style.setProperty('color-scheme', themeKey === 'dark' ? 'dark' : 'light');

export default createReducer(initialState, builder => {
  builder.addCase(setTheme, (state, { payload }) => {
    state.key = payload;
    state.theme = Themes[payload];
    localStorage.setItem('theme', payload);
  });
});
