import React, { useEffect, useState } from 'react';

import { CoverCard } from './styles';
import { Card, Paragraph } from 'react-native-paper';

const DrinkIngredients = props => {
  const [ingredients, setIngredients] = useState('');
  const { drink } = props;

  useEffect(() => {
    let tempItems = '';
  
    Object.keys(drink).forEach(key => {
      if (/strIngredient/i.test(key) && drink[key]) {

        const index = key.slice(13);
        const measure = drink[`strMeasure${index}`] || ''; 
        
        tempItems += `${tempItems.length ? ',' : ''} ${measure} ${drink[key]}`;
      }
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
