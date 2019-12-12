import React, { Component } from 'react';

import { Text } from 'react-native';
import { Subheading } from 'react-native-paper';

import { Container } from '../../shared/theme/containers';

import {
  BottomCard,
  HeaderView,
  PaddedContainer,
  Subheader
} from './styles';

import HomeOptions from './HomeOptions';

class Homepage extends Component {
  render() {
    return (
      <Container>

        <HeaderView />

        <Subheader>Procurar Drinks</Subheader>

        <PaddedContainer>

          <HomeOptions />

          <BottomCard>
            <Text>
              Esperimente um drink aleatório
          </Text>
          </BottomCard>

        </PaddedContainer>
      </Container>
    );
  }
}

export default Homepage;