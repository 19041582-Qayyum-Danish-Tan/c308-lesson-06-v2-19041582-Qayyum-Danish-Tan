import React from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  Button,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Header from 'react-native/Libraries/NewAppScreen/components/Header';

const SECTION_DATA = [
  {
    title: 'ANIMALS',
    description:
      'See the animal exhibits, discover the secrets about the animals we love and how they are cared for daily. Seize the opportunity to interact with some of the animal.',
  },
  {
    title: 'ACTIVITIES',
    description:
      'You, not only get to see animals, but all visitors can satisfy their curiosity, feed the animals and get up-close with the animals and have fun.',
  },
  {
    title: 'FIND US',
    description:
      'Making your way to BuzzForest is easy. No matter where you are, there are many quick and convenient ways to find us.',
  },
];

class SectionDetails extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./rainforest_bg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={{marginTop: '100%'}}>
          <Image
            source={require('./orangutan.jpg')}
            style={{width: '50%', height: '50%'}}
          />
          <Button
            title="Animals"
            style={{color: '#F4F3E4', backgroundColor: '#BF4216'}}
            onPress={() => Alert.alert('Animals button pressed!')}
          />
          <Text style={{backgroundColor: '#557622', color: '#F4F3E4'}}>
            {' '}
            {SECTION_DATA[0].description}{' '}
          </Text>

          <Button
            title="Activities"
            style={{color: '#F4F3E$', backgroundColor: 'BF4216'}}
            onPress={() => Alert.alert('Activities button pressed!')}
          />
          <Text style={{backgroundColor: '#557622', color: '#F4F3E4'}}>
            {' '}
            {SECTION_DATA[1].description}{' '}
          </Text>

          <Button
            title="Find us"
            style={{color: '#F4F3E$', backgroundColor: 'BF4216'}}
            onPress={() => Alert.alert('Find us button pressed!')}
          />
          <Text style={{backgroundColor: '#557622', color: '#F4F3E4'}}>
            {' '}
            {SECTION_DATA[2].description}{' '}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

export default SectionDetails;
