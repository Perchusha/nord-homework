import { ITheme, IThemeProps } from '../types';

export type IMainState = {
  Theme: { key: ITheme; theme: IThemeProps };
};

export interface IThemeInitialState {
  key: ITheme;
  theme: IThemeProps;
}
