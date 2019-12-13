import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0d47a1',
    accent: '#2196f3',
    contrastPrimaryText: '#fff',
    contrastAccentText: '#fff',
    background: '#fafafa',
    surface: '#fff'
  },
  dark: true,
  mode : 'exact'
};
