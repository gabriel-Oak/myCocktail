import React from 'react';

import { View, Text } from 'react-native';
import { List } from './styles';

const DrinksList = props => {
  const { drinks } = props;

  return (
    <List>
      {
        drinks && drinks.map((drink, index) => (
          <View key={index}><Text>{drink.strDrink}</Text></View>
        ))
      }
    </List>
  );
}

export default DrinksList;
