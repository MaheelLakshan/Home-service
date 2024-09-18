import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../../Constants/Colors';
import { useNavigation } from '@react-navigation/native';

const BusinessListItemSmall = ({ business }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.push('business-details', { business: business })}>
      <Image source={{ uri: business?.images?.url }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={{ fontSize: 17, fontFamily: 'outfit-medium' }}>{business?.name}</Text>
        <Text style={{ fontSize: 12, fontFamily: 'outfit', color: Colors.DARK_GRAY }}>{business?.contactPerson}</Text>
        <Text style={{ fontSize: 12, fontFamily: 'outfit', padding: 1, color: Colors.PRIMARY, backgroundColor: Colors.PRIMARY_LIGHT, borderRadius: 5, alignSelf: 'flex-start' }}>{business?.category?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  infoContainer: {
    display: 'flex',
    gap: 1,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
});

export default BusinessListItemSmall;
