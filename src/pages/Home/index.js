import React, { Component } from 'react';

import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';


import { Container } from '../../shared/theme/containers';
import { Progress } from '../../shared/theme/progress';
import DrinksWood from '../../shared/assets/wood-drinks.png';
import { randomDrink } from '../mainActions';

import {
  BottomCard,
  PaddedContainer,
  Subheader
} from './styles';

import HomeOptions from './HomeOptions';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../shared/theme';

class Homepage extends Component {

  render() {
    const { randomDrink, navigation, loading } = this.props;

    return (
      <Container>
        <Subheader>Search For Drinks</Subheader>

        <PaddedContainer>
          <HomeOptions
            navigate={navigation.navigate}
          />

          <BottomCard
            onPress={() => {
              !loading && randomDrink(navigation.navigate);
            }}
          >
            <ImageBackground
              source={DrinksWood}
              style={{
                width: '100%',
                height: '100%'
              }}
            >
              {
                loading &&
                <Progress indeterminate color={theme.colors.primary} />
              }
              <Subheader>Try a random drink today!</Subheader>
            </ImageBackground>
          </BottomCard>

        </PaddedContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { mainReducer } = state;
  return mainReducer;
};

const mapDispatchToProps = {
  randomDrink
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);