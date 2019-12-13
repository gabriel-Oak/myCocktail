import React from 'react';

import { Text } from 'react-native';
import { List, ListItem, ListThumb, ListItemContent, ListItemTitle } from './styles';

const DrinksList = props => {
  const { drinks, lookUp, navigate } = props;

  return (
    <List>
      {
        drinks && drinks.map((drink, index) => (
          <ListItem key={index}>
            <ListItemContent
              onPress={() => {
                lookUp(drink.idDrink, navigate);
              }}
            >
              
              <ListItemTitle>
                <Text>{drink.strDrink}</Text>
              </ListItemTitle>

              <ListThumb source={{ uri: drink.strDrinkThumb }} />

            </ListItemContent>
          </ListItem>
        ))
      }
    </List>
  );
}

export default DrinksList;
