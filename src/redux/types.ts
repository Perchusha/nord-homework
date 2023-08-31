export type ITheme = 'dark' | 'light' | 'green';

export interface IThemeProps {
  fontSize: string;
  titleSize: string;
  primary: string;
  primaryText: string;
  success: string;
  successText: string;
  danger: string;
  dangerText: string;
  background: string;
  backgroundLight: string;
  backgroundDark: string;
  border: string;
  focus: string;
  active: string;
  topBarHeight: string;
  bottomBarHeight: string;
  fontFamily: string;
  borderRadius: string;
  devices: {
    mobile: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
  };
}

export type IMainState = {
  Theme: { key: ITheme; theme: IThemeProps };
};

export interface IThemeInitialState {
  key: ITheme;
  theme: IThemeProps;
}
