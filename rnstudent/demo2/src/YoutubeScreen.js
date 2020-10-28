import React from 'react';
import {View, Text, StyleSheet, PixelRatio, ScrollView} from 'react-native';

const YoutubeScreen = ({navigation, route}) => {
  const setNavigationOption = () => {
    navigation.setOptions({
      title: route.params.item.title,
      headerStyle: {
        backgroundColor: '#339CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
    });
  };

  React.useEffect(() => {
    setNavigationOption();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>{route.params.item.title}</Text>
    </View>
  );
};

export default YoutubeScreen;
