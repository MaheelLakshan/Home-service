import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', paddingBottom: 18 }} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={{ fontSize: 20, fontFamily: 'outfit-medium' }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
