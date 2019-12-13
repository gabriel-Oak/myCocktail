import React, { Component } from 'react';

import { connect } from 'react-redux';

import { ScrollContainer, PaddedContainer } from '../../shared/theme/containers';
import DrinkCard from './DrinkCard';
import DrinkIngredients from './DrinkIngredients';

class LookUpPage extends Component {

  render() {
    const { lookUpDrink } = this.props;
    console.log(this.props);

    return (
      <ScrollContainer>
        <PaddedContainer>

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
        </PaddedContainer>
      </ScrollContainer>
    );
  }
}

const mapStateToProps = state => {
  const { mainReducer } = state;
  return mainReducer;
};

export default connect(mapStateToProps)(LookUpPage);