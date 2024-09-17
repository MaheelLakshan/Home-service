import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../../Constants/Colors';
import Heading from '../../Components/Heading';
import BusinessPhoto from './BusinessPhoto';

const BusinessDetailsScreen = () => {
  const param = useRoute().params;
  const [business, setBusiness] = useState();
  const [isReadMore, setIsReadMore] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    param && setBusiness(param?.business);
  }, [param]);

  return (
    <View>
      <ScrollView style={{ height: '90%' }}>
        <TouchableOpacity style={styles.backBtnContainer} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Image source={{ uri: business?.images?.url }} style={{ width: '100%', height: 300 }} />
        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 25 }}>{business?.name}</Text>
          <View style={styles.subContainer}>
            <Text style={{ fontFamily: 'outfit-medium', color: Colors.PRIMARY, fontSize: 20 }}>{business?.contactPerson} - </Text>
            <View style={{ backgroundColor: Colors.DARK_GRAY, padding: 3, borderRadius: 10 }}>
              <Text style={{ color: Colors.WHITE, margin: 2 }}>{business?.category.name}</Text>
            </View>
          </View>
          <Text style={{ fontSize: 17, fontFamily: 'outfit', color: Colors.DARK_GRAY }}>
            <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
            {business?.address}
          </Text>

          <View style={{ borderWidth: 0.4, color: Colors.DARK_GRAY, marginVertical: 20 }}></View>

          <View>
            <Heading title={'About Me'} />
            <Text style={{ fontFamily: 'outfit', fontSize: 16, color: Colors.DARK_GRAY, lineHeight: 28 }} numberOfLines={isReadMore ? 20 : 5}>
              {business?.about}
            </Text>
            <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
              <Text style={{ color: Colors.PRIMARY, fontSize: 16, fontFamily: 'outfit-regular' }}>{isReadMore ? 'Read Less' : 'Read More'}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderWidth: 0.4, color: Colors.DARK_GRAY, marginVertical: 20 }}></View>

          {/* <View>
          <BusinessPhoto business={business} />
        </View> */}
        </View>
      </ScrollView>
      <View style={{ display: 'flex', flexDirection: 'row', margin: 10, gap: 15 }}>
        <TouchableOpacity style={styles.messageBtn}>
          <Text style={{ textAlign: 'center', fontFamily: 'outfit-medium', color: Colors.PRIMARY, fontSize: 18 }}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={{ textAlign: 'center', fontFamily: 'outfit-medium', color: Colors.WHITE, fontSize: 18 }}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtnContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: 'flex',
    gap: 7,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  messageBtn: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
  bookBtn: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
});

export default BusinessDetailsScreen;
