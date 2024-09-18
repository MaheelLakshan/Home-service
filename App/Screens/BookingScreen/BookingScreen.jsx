import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import BusinessListItem from '../BusinessListByCategoryScreen/BusinessListItem';

const BookingScreen = () => {
  const [bookingList, setBookingList] = useState();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    user && getUserBookings();
  }, [user]);

  const getUserBookings = () => {
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then((res) => {
      setBookingList(res?.bookings);
      setLoading(false);
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: 'outfit-SemiBold', fontSize: 26, paddingBottom: 20, paddingTop: 10 }}>My Bookings</Text>

      <View style={{ height: '100%' }}>
        <FlatList data={bookingList} onRefresh={() => getUserBookings()} refreshing={loading} renderItem={({ item }) => <BusinessListItem business={item?.businessList} booking={item} />} />
      </View>
    </View>
  );
};

export default BookingScreen;
