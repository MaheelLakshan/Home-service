import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Categories from './Categories';

const HomeScreen = () => {
  console.log('homescreen');
  return (
    <SafeAreaView>
      <Header />
      <View style={{ padding: 20 }}>
        <Slider />
        <Categories />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
