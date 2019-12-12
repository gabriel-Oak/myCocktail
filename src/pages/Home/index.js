import React, { Component } from 'react';

import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';


import { Container } from '../../shared/theme/containers';
import DrinksWood from '../../shared/assets/wood-drinks.png';
import { randomDrink } from '../mainActions';

import {
  BottomCard,
  HeaderView,
  PaddedContainer,
  Subheader
} from './styles';

import HomeOptions from './HomeOptions';
import { RectButton } from 'react-native-gesture-handler';

class Homepage extends Component {

  render() {
    const { randomDrink, navigation } = this.props;
    console.log(this.props);
    
    return (
      <Container>
        <HeaderView />

        <Subheader>Procurar Drinks</Subheader>

        <PaddedContainer>
          <HomeOptions />

          <BottomCard
            onPress={() => {            
              randomDrink(navigation.navigate)
            }}
          >
            <RectButton>
              <ImageBackground
                source={DrinksWood}
                style={{
                  width: '100%',
                  height: '100%'
                }}
              >
                <Subheader>Experimente um drink aleatório</Subheader>
              </ImageBackground>
            </RectButton>
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