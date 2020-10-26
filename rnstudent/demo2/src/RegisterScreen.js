import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

export default function RegisterScreen() {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('./assets/img/gradient_bg.png')}>
      {/* Banner */}
      <Image
        style={{height: 120, width: '100%'}}
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
      />

      {/* Authen section */}
      <View style={{height: 100, backgroundColor: 'white'}}></View>
    </ImageBackground>
  );
}
