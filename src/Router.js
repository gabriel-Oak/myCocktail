import { createAppContainer, ThemeContext } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { theme } from './shared/theme/';

import Homepage from "./pages/Home";

const Router = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Homepage,
        navigationOptions: {
          title: 'MyCocktail',
          headerTintColor: theme.colors.contrastPrimaryText,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          }
        }
      }
    },
    {
      initialRouteName: 'Home',
      headerMode: "screen",
    }
  )
);

export default Router;