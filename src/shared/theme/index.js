import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#651fff',
    accent: '#2196f3',
    contrastPrimaryText: '#fff',
    background: '#fff',
    surface: '#fafafa',
    contrastAccentText: '#fff'
  },
  dark: true,
  mode : 'exact'
};
