import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../../Constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const BusinessListItem = ({ business, booking }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (!booking?.id) {
          navigation.push('business-details', { business: business });
        }
      }}
    >
      <Image source={{ uri: business?.images?.url }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={{ fontFamily: 'outfit', color: Colors.DARK_GRAY, fontSize: 16 }}>{business.contactPerson}</Text>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 18 }}>{business.name}</Text>

        {!booking?.id && (
          <Text style={{ fontFamily: 'outfit-Light', color: Colors.DARK_GRAY, fontSize: 16 }}>
            <Ionicons name="location-sharp" size={17} color={Colors.PRIMARY} />
            {business.address}
          </Text>
        )}

        {booking?.id && (
          <View>
            {
              <View style={[{ padding: 8, alignSelf: 'flex-start', borderRadius: 10, marginBottom: 6 }, booking?.bookingStatus == 'cancel' ? { backgroundColor: Colors.LIGHT_RED } : booking?.bookingStatus == 'completed' ? { backgroundColor: Colors.LIGHT_GREEN } : { backgroundColor: Colors.DARK_GRAY }]}>
                <Text style={{ fontSize: 17, fontFamily: 'outfit', color: Colors.WHITE }}>{booking?.bookingStatus}</Text>
              </View>
            }
            <Text style={{ fontFamily: 'outfit-Light', color: Colors.DARK_GRAY, fontSize: 16 }}>
              <View style={{ marginRight: 5 }}>
                <AntDesign name="calendar" size={20} color={Colors.PRIMARY} />
              </View>
              {booking.date} at {booking.time}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
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
