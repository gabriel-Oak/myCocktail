import React, { Component } from 'react';

import { connect } from 'react-redux';

import { PaddedContainer } from './styles';
import { ScrollContainer } from '../../shared/theme/containers';
import DrinkCard from './DrinkCard';
import DrinkIngredients from './DrinkIngredients';

class LookUpPage extends Component {

  render() {
    const { lookUpDrink } = this.props;
    console.log(this.props);

    return (
      <PaddedContainer>
        <ScrollContainer>

          {
            lookUpDrink &&
            <DrinkCard
              {...lookUpDrink}
            />
          }

          {
            lookUpDrink &&
            <DrinkIngredients
              drink={lookUpDrink}
            />
          }
        </ScrollContainer>
      </PaddedContainer>
    );
  }
}

const mapStateToProps = state => {
  const { mainReducer } = state;
  return mainReducer;
};

export default connect(mapStateToProps)(LookUpPage);