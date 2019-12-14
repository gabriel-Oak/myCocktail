import React, { useState, useEffect } from 'react';

import { Text, ActivityIndicator } from 'react-native';
import {
  List,
  ListItem,
  ListThumb,
  ListItemContent,
  ListItemTitle
} from './styles';
import { theme } from '../../shared/theme';

const DrinksList = props => {
  const {
    drinks,
    lookUpDrink,
    navigate,
    nameFilter,
    loading,
    selectedDrink
  } = props;

  return (
    <List>
      {
        drinks && drinks.map((drink, index) =>
          (!nameFilter.length || drink.strDrink.includes(nameFilter)) &&
          (
            <ListItem key={index}>
              <ListItemContent
                onPress={() => !loading && lookUpDrink(drink.idDrink, navigate)}
              >

                <ListItemTitle>
                  <Text>{drink.strDrink}</Text>
                </ListItemTitle>



                <ListThumb source={{ uri: drink.strDrinkThumb }}>
                  {
                    selectedDrink === drink.idDrink && loading &&
                    <ActivityIndicator size="large" color={theme.colors.accent} />
                  }
                </ListThumb>

              </ListItemContent>
            </ListItem>
          )
        )
      }
    </List>
  );
}

export default DrinksList;
