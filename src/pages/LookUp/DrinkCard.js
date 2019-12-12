import React from 'react';

import { Card, Title, Paragraph } from 'react-native-paper';
import { CoverCard } from './styles';


const DrinkCard = props => {
  const {
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strInstructions
  } = props;

  return (
    <CoverCard>

      <Card.Cover
        source={{ uri: strDrinkThumb }}
      />

      <Card.Content>
        <Title>
          {strAlcoholic}
        </Title>

        <Paragraph>
          {strCategory}
        </Paragraph>

        <Paragraph>
          {strInstructions}
        </Paragraph>
      </Card.Content>

    </CoverCard>
  );
}

export default DrinkCard;
