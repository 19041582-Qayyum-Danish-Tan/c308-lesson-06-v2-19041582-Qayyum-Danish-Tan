import React from 'react';
import {View, Button} from 'react-native';
import {StyleSheet, ImageBackground, Image} from 'react-native';
import { Alert } from 'react-native';



const style = StyleSheet.create({
  boxStyle: {
    width: 150,
    height: 150,
    padding: 20,
    backgroundColor: '#00629e',
  },
});

const Activity3 = () => {
  return (
    <ImageBackground
      source={require('./images/flames_bg.jpg')}
      style={{width: '100%', height: '100%'}}>
      <View style={style.boxStyle}>
        <Button title="Press Me" style={{color: '#f9769a'}} />
      </View>
    </ImageBackground>
  );
};

export default Activity3;
