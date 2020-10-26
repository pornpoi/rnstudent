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
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', backgroundColor: 'yellow'}}>Hey</Text>
    </View>
  );
}
