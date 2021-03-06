import React, { Component } from 'react';

import { ProgressBar } from 'react-native-paper';
import { ScrollContainer, PaddedContainer } from '../../shared/theme/containers';
import ListFilters from './filters';
import { fetchFilters, fetchDrinks, lookUpDrink, changeNameFilter } from './listActions';
import { connect } from 'react-redux';
import { theme } from '../../shared/theme';
import DrinksList from './DrinksList';

class ListPage extends Component {

  constructor(props) {
    super(props);
    props.fetchFilters(props.navigation.state.params.type);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query) {
    this.props.fetchDrinks(query);
  }

  render() {

    const {
      loading,
      categories,
      ingredients,
      glass,
      drinks,
      nameFilter,
      fetchDrinks,
      lookUpDrink,
      changeNameFilter,
      navigation: {
        state: {
          params: { type }
        },
        navigate
      }
    } = this.props;

    return (
      <ScrollContainer>
        {
          loading &&
          <ProgressBar
            indeterminate
            color={theme.colors.primary}
          />
        }

        <PaddedContainer>

          <ListFilters
            type={type}
            onSubmit={fetchDrinks}
            {...this.props}
          />

          {
            !!drinks.length &&
            <DrinksList
              navigate={navigate}
              {...this.props}
            />
          }
        </PaddedContainer>
      </ScrollContainer>
    );
  }
}

const mapStateToProps = state => {
  const { mainReducer, listReducer } = state;
  return {
    ...mainReducer,
    ...listReducer
  };
}

const mapDispatchToProps = {
  fetchFilters,
  fetchDrinks,
  lookUpDrink,
  changeNameFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
