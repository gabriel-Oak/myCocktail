import React, { useState } from 'react';

import { Title } from 'react-native-paper';
import { Switch } from 'react-native';
import { Input, Form, RowContainer } from './styles';
import SelectFilter from './Select';
import { theme } from '../../shared/theme';
import { ListFiltersState } from './hooks';

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
