import React, { useEffect, useState } from 'react';

import { CoverCard } from './styles';
import { Card, Paragraph } from 'react-native-paper';

const DrinkIngredients = props => {
  const [ingredients, setIngredients] = useState('');
  const { drink } = props;

  useEffect(() => {
    let tempItems = '';
    const tempIngredients = Object.keys(drink).filter(
      key => /Ingredient/i.test(key) && drink[key]
    );
    const tempMeasures = Object.keys(drink).filter(
      key => /Measure/i.test(key) && drink[key]
    );

    tempIngredients.forEach((key, index) => {

      tempItems += `${drink[tempMeasures[index]]} ${drink[key]} ${tempItems.length ? ' / ' : ' / '}`

    });

    setIngredients(tempItems);
  });

  return (
    <CoverCard>
      <Card.Title title="Ingredients" />
      <Card.Content>

        <Paragraph>
          {ingredients}
        </Paragraph>

      </Card.Content>

    </CoverCard>
  );
}

export default DrinkIngredients;
