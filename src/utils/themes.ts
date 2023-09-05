import { IThemes } from '../types';

const commonStyles = {
  primary: '#57c3fa',
  success: '#73BB5410',
  successText: '#73BB54',
  danger: '#ff515110',
  dangerText: '#ff5151',
  fontSize: '2vmin',
  titleSize: '5vmin',
  focus: 'rgba(255, 255, 255, 0.3)',
  active: 'rgba(255, 255, 255, 0.4)',
  topBarHeight: '8vmin',
  bottomBarHeight: '8vmin',
  fontFamily: 'Manrope, serif',
  borderRadius: '0.6vmin',
  devices: {
    mobile: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
    laptopL: '(max-width: 1440px)',
    desktop: '(max-width: 2560px)',
  },
};

export const Themes: IThemes = {
  dark: {
    primaryText: '#ffffff',
    background: '#353533',
    backgroundLight: '#484846',
    backgroundDark: '#252522',
    border: '#484846',
    ...commonStyles,
  },
  light: {
    primaryText: '#353533',
    background: '#E3E3E3',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#F0F0F0',
    border: '#48484690',
    ...commonStyles,
  },
  green: {
    primaryText: '#ffffff',
    background: '#99D98C',
    backgroundLight: '#B5E48C',
    backgroundDark: '#76C893',
    border: '#52B69A',
    ...commonStyles,
  },
};
