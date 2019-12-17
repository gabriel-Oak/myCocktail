import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';


export default function testHook(runHook) {
  const HookWrapper = () => {
    return <View {...runHook()} />;
  }

  const wrapper = renderer
    .create(<HookWrapper />)
    .toJSON()
    .props;

  return wrapper;
}
