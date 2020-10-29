import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import QRCode from 'react-native-qrcode-svg';
const PATH_TO_LOGO = './img/cmdev_icon.png';

export default function TabQRcode() {
  const [qrValue, setQrValue] = useState('');

  return (
    <ImageBackground
      source={require('./img/gradient_bg.png')}
      resizeMode={'stretch'}
      style={styles.container}>
      <Image
        resizeMode={'contain'}
        style={{
          width: '100%',
          height: 120,
          ...ifIphoneX({marginTop: 30}, {marginTop: 0}),
          padding: 0,
        }}
        source={require('./img/header_react_native.png')}
      />
      <TextInput
        placeholder="QRCode Value"
        style={{
          fontSize: 18,
          height: 40,
          textAlign: 'center',
          borderWidth: 1,
          borderColor: '#fff3',
          borderRadius: 5,
          marginLeft: 32,
          marginRight: 32,
          marginBottom: 32,
          marginTop: 32,
        }}
        onChangeText={(text) => setQrValue(text)}
      />

      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
         {[1,2,3].map(value=><CMQRCode value={value.toString()} />)} 
      </ScrollView>
    </ImageBackground>
  );
}

class CMQRCodeClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {value} = this.props;
    return (
      <View style={{margin: 8}}>
        <QRCode
          {...this.props}
          value={value != '' ? value : 'www.codemobiles.com'}
        />
      </View>
    );
  }
}

// Functional Component
const CMQRCode = (props) => {
  const {value} = props;
  return (
    <View style={{margin: 8}}>
      <QRCode {...props} value={value != '' ? value : 'www.codemobiles.com'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'stretch',
    paddingTop: 15,
    paddingBottom: 15,
  },
  section: {
    marginTop: 15,
    marginBottom: 15,
  },
});
