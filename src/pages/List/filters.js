import React, { useState } from 'react';

import { Title } from 'react-native-paper';
import { Switch } from 'react-native';
import { Input, Form, RowContainer } from './styles';
import SelectFilter from './Select';
import { theme } from '../../shared/theme';

//State separated from view for unit test
export const ListFiltersState = props => {
  const { onSubmit, type } = props;

  const [name, setName] = useState();
  const [alcholic, setAlcholic] = useState();
  const [filter, setFilter] = useState();

  return {
    input: {
      value: name,
      onChangeText: text => setName(text)
    },
    pickerState: {
      selectedValue: filter,
      onValueChange: (value, _index) => {
        setFilter(value);
        onSubmit(`${type}=${value}`);
      }
    },
    switchState: {
      value: alcholic,
      onValueChange: (value) => {
        setAlcholic(value);

        onSubmit(`${type}=${value ? 'Alcoholic' : 'Non_Alcoholic'}`);
      }
    }
  };
}

const ListFilters = props => {
  const { type, categories, ingredients, glass } = props;
  const { input, pickerState, switchState } = ListFiltersState(props);

  if (switchState.value === undefined && type === 'a') {
    switchState.onValueChange(true);
  }

  return (
    <Form>

      {
        type === 'i' &&
        <SelectFilter
          state={pickerState}
          list={ingredients}
        />
      }

      {
        type === 'a' &&
        <RowContainer>
          <Title>Alcholic Drinks</Title>
          <Switch
            thumbColor={theme.colors.primary}
            trackColor={theme.colors.accent}
            {...switchState}
          />
        </RowContainer>
      }

      {
        type === 'c' &&
        <SelectFilter
          state={pickerState}
          list={categories}
        />
      }

      {
        type === 'g' &&
        <SelectFilter
          state={pickerState}
          list={glass}
        />
      }

      <Input
        placeholder='Filter by drink Name'
        mode='flat'
        {...input}
      />
    </Form>
  );
}

export default ListFilters;
