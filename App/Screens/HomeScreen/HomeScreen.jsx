import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Categories from './Categories';
import BusinessList from './BusinessList';

const HomeScreen = () => {
  console.log('homescreen');
  return (
    <SafeAreaView>
      <Header />
      <View style={{ padding: 8 }}>
        <Slider />
        <Categories />
        <BusinessList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
