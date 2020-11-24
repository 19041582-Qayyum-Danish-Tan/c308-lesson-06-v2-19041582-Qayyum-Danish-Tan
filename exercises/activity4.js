import React from 'react';
import {View, Button} from 'react-native';
import {Alert} from 'react-native';

const Activity4 = () => {
  return (
    <View>
      <Button
        title="Confirm"
        style={{color: '#f9769a'}}
        onPress={() => Alert.alert('Hi there!')}
      />
    </View>
  );
};

export default Activity4;
