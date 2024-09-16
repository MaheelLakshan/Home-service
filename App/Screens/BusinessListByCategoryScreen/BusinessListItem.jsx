import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../../Constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const BusinessListItem = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: business?.images?.url }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={{ fontFamily: 'outfit', color: Colors.DARK_GRAY, fontSize: 16 }}>{business.contactPerson}</Text>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 18 }}>{business.name}</Text>
        <Text style={{ fontFamily: 'outfit-Light', color: Colors.DARK_GRAY, fontSize: 16 }}>
          <Ionicons name="location-sharp" size={17} color={Colors.PRIMARY} />
          {business.address}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  subContainer: {
    display: 'flex',
    gap: 8,
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
});

export default BusinessListItem;
