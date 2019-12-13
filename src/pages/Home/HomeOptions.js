import React from 'react';

import { Text, ImageBackground } from 'react-native';
import { CenterView, Option } from './styles';

import OrangeDrink from '../../shared/assets/orange-drink.png';
import RedDrink from '../../shared/assets/red-drink.png';
import YellowDrink from '../../shared/assets/yellow-drink.png';
import BlueDrink from '../../shared/assets/blue-drink.png';

const HomeOptions = props => {
  const { navigate } = props;

  const handleNavigate = (title, type) => {
    navigate('List', { title, type });
  };

  return (
    <>
      <CenterView>

        <Option
          onPress={() => handleNavigate('by Ingredient', 'i')}
        >
          <ImageBackground
            source={OrangeDrink}
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <Text> By Ingredient </Text>
          </ImageBackground>
        </Option>

        <Option
          onPress={() => handleNavigate('by Category', 'c')}
        >
          <ImageBackground
            source={BlueDrink}
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <Text> Category </Text>
          </ImageBackground>
        </Option>

        <Option
          onPress={() => handleNavigate('Alcholic Drinks', 'a')}
        >
          <ImageBackground
            source={RedDrink}
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <Text> Alcoholic Drinks </Text>
          </ImageBackground>
        </Option>

        <Option
          onPress={() => handleNavigate('by Glass', 'g')}
        >
          <ImageBackground
            source={YellowDrink}
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <Text> Filter by Glass </Text>
          </ImageBackground>
        </Option>

      </CenterView>
    </>
  );
}

export default HomeOptions;
