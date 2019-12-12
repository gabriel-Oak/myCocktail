import React from 'react';

import { Text } from 'react-native';

import { CenterView, Option } from './styles';

const HomeOptions = props => {
  return (
    <>
      <CenterView>

        <Option>
          <Text> Por nome </Text>
        </Option>

        <Option>
          <Text> Drinks alcolicos </Text>
        </Option>

        <Option>
          <Text> Categoria </Text>
        </Option>

        <Option>
          <Text> Copos </Text>
        </Option>

      </CenterView>
    </>
  );
}

export default HomeOptions;
