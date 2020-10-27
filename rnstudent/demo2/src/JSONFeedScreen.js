import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function JSONFeedScreen() {
  return (
    <ImageBackground source={require('./assets/img/bg.png')}>
      <Text>JSONScreen</Text>
    </ImageBackground>
  );
}
