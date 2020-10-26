import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

export default function RegisterScreen() {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('./assets/img/gradient_bg.png')}>
      <Image
        style={{height: 80, width: '100%'}}
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
      />
      <Text>RegisterScreen</Text>
    </ImageBackground>
  );
}
