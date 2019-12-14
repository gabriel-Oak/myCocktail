import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Card, Button } from 'react-native-paper';
import { theme } from '../theme';

const Dialogue = props => {
  const modalState = useSelector(store => store.mainReducer.modal);
  const dispatch = useDispatch();
  const { visible, text, title } = modalState;

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onDismiss={() => {
        dispatch({ type: 'CLOSE_MODAL' })
      }}
    >

      <View style={{ paddingHorizontal: 16 }}>
        <Card>

          <Card.Title title={title} />

          <Card.Content>
            <Text>{text}</Text>
          </Card.Content>

          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <Button
              mode='outlined'
              color={theme.colors.accent}
              onPress={() => {
                dispatch({ type: 'CLOSE_MODAL' })
              }}
            >
              Close
            </Button>
          </Card.Actions>

        </Card>
      </View>

    </Modal >
  );
}


export default Dialogue;
