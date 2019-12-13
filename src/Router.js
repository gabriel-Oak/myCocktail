import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { theme } from './shared/theme/';

import Homepage from "./pages/Home";
import LookUpPage from "./pages/LookUp";

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
      },
      LookUp: {
        screen: LookUpPage,
        navigationOptions: ({ navigation }) => ({
          title: navigation.state.params.title,
          headerTintColor: theme.colors.contrastAccentText,
          headerStyle: {
            backgroundColor: theme.colors.accent
          },
        })
      }
    },
    {
      initialRouteName: 'Home',
      headerMode: "screen",
      cardStyle: {
        backgroundColor: theme.colors.background
      }
    }
  )
);

export default Router;