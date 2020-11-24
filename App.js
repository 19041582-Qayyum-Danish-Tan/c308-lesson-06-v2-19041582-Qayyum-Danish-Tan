/**
 * @format
 * @flow
 */


import React from 'react';
import {View, ScrollView, Button} from 'react-native';
import Activity1 from './exercises/activity1';
import Activity2 from './exercises/activity2';
import Activity3 from './exercises/activity3';
import Activity4 from './exercises/activity4';


const App = () => {
  return (
    <View>
      <ScrollView>
        <Activity1 />
        <Activity2 />
        <Activity3 />
        <Activity4 />
      </ScrollView>
    </View>
  );
};

export default App;


