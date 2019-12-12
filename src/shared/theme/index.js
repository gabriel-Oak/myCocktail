import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#33d353',
    accent: '#008c3a',
    contrastPrimaryText: '#000',
    contrastAccentText: '#fff'
  },
  dark: true,
  mode : 'exact'
};
