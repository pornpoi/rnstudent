import React from 'react';
import {View, Text, ImageBackground, Image, TextInput} from 'react-native';

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
          padding: 16,
          borderRadius: 10,
        }}>
        {/* Username */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* Icon */}
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: 'red',
              borderRadius: 20,
            }}
          />

          <TextInput
            style={{
              marginLeft: 8,
              flex: 1,
              paddingLeft: 16,
              borderWidth: 1,
              borderColor: '#0007',
              borderRadius: 5,
            }}
            placeholder="Username"
          />
        </View>

        {/* Password */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* Icon */}
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: 'yellow',
              borderRadius: 20,
            }}
          />

          <TextInput
            style={{
              marginLeft: 8,
              flex: 1,
              paddingLeft: 16,
              borderWidth: 1,
              borderColor: '#0007',
              borderRadius: 5,
            }}
            placeholder="Password"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
