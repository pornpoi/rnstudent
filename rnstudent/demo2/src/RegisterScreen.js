import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

export default function RegisterScreen() {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('./assets/img/gradient_bg.png')}>
      <Text>RegisterScreen</Text>
    </ImageBackground>
  );
}
