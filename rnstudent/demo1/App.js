import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <View
      // jsx
      style={{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
      <Text
        style={{
          textAlignVertical: 'center',
          height: 100,
          color: 'black',
          backgroundColor: 'yellow',
          textAlign: 'center',
        }}>
        Hey 1234
      </Text>
    </View>
  );
}
