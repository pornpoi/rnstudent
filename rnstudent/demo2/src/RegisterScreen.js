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
      <View
        style={{
          height: 100,
          backgroundColor: '#FFF3',
          marginLeft: 30,
          marginRight: 30,
          marginTop: 30,
          borderRadius: 10,
        }}>
        {/* Username */}
        <View style={{flexDirection: 'row'}}>
          {/* Icon */}
          <View style={{height: 40, width: 40, backgroundColor: 'red'}} />
        </View>
      </View>
    </ImageBackground>
  );
}
