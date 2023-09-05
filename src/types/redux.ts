import { ITheme, IThemeProps } from './theme';

export type IMainState = {
  Theme: { key: ITheme; theme: IThemeProps };
  User: IUser;
};

export interface IThemeInitialState {
  key: ITheme;
  theme: IThemeProps;
}

export interface IUser {
  token: string;
  username: string;
}
