import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <View
      // jsx
      style={{
        flex: 0.5,
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hey</Text>
    </View>
  );
}
