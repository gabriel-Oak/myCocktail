import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Homepage from "./pages/Home";

const Router = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Homepage,
        navigationOptions: {
          title: 'MyCocktail'
        }
      }
    },
    {
      initialRouteName: 'Home',
      headerMode: "screen"
    }
  )
);

export default Router;