import React from 'react';

import { Text } from 'react-native';
import { List, ListItem, ListThumb, ListItemContent, ListItemTitle } from './styles';

const DrinksList = props => {
  const { drinks, lookUp, navigate, nameFilter } = props;
  console.log(nameFilter.length);
  

  return (
    <List>
      {
        drinks && drinks.map((drink, index) =>
          (!nameFilter.length || drink.strDrink.includes(nameFilter)) &&
          (
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
          )
        )
      }
    </List>
  );
}

export default DrinksList;
