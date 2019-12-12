import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#33d353',
    accent: '#008c3a',
    text: '#fff',
    surface : '#424242',
    background : '#424242',
  },
  dark: true,
  mode : 'exact'
};
