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
      {/* Box1 */}
      <Text
        style={{
          flex: 1,
          textAlignVertical: 'center',
          color: 'black',
          backgroundColor: 'yellow',
          textAlign: 'center',
        }}>
        Hey 1
      </Text>

      {/* Box2 */}
      <Text
        style={{
          flex: 0.5,
          textAlignVertical: 'center',
          color: 'black',
          backgroundColor: 'green',
          textAlign: 'center',
        }}>
        Hey 2
      </Text>

      {/* Box3 */}
      <Text
        style={{
          flex: 1,
          textAlignVertical: 'center',
          color: 'black',
          backgroundColor: '#3377ee30',
          textAlign: 'center',
        }}>
        Hey 3
      </Text>
    </View>
  );
}
