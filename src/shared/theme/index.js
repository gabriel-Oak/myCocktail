import { DarkTheme } from 'react-native-paper';

export const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#33d353',
    accent: '#008c3a',
    contrastPrimaryText: '#000',
    background: '#303030',
    surface: '#424242',
    contrastAccentText: '#fff'
  },
  dark: true,
  mode : 'exact'
};
