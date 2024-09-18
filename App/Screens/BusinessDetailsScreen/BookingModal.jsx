import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../../../Constants/Colors';
import { FlatList } from 'react-native';
import Heading from '../../Components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment';

const BookingModal = ({ businessId, hideModal }) => {
  const [timeList, setTimeList] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();
  const { user } = useUser();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({ time: i + ':00 AM' });
      timeList.push({ time: i + ':30 AM' });
    }

    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ':00 PM',
      });
      timeList.push({
        time: i + ':30 PM',
      });
    }
    setTimeList(timeList);
  };

  const createNewBooking = () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert(
        'Error', // Title
        'Please Select!', // Message
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }, // Button
        ],
        { cancelable: false } // Optional: Whether the alert can be dismissed by tapping outside it
      );

      return;
    }

    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      time: selectedTime,
      date: moment(selectedDate).format('DD-MMM-YYYY'),
      note: note,
      businessId: businessId,
    };

    GlobalApi.createBooking(data).then((res) => {
      Alert.alert(
        'Success', // Title of the alert
        'Booking Created Successfully!', // Message of the alert
        [
          { text: 'OK', onPress: () => hideModal() }, // Button with callback
        ],
        { cancelable: true } // Optional: Whether the alert can be dismissed by tapping outside
      );
    });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ padding: 20, paddingTop: 30 }} behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', paddingBottom: 18 }} onPress={() => hideModal()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
          <Text style={{ fontSize: 20, fontFamily: 'outfit-medium' }}>Booking</Text>
        </TouchableOpacity>

        <View style={styles.caladerContainer}>
          <CalendarPicker onDateChange={setSelectedDate} width={340} minDate={Date.now()} todayBackgroundColor={Colors.DARK_GRAY} todayTextStyle={{ color: Colors.WHITE }} selectedDayColor={Colors.PRIMARY} selectedDayTextColor={Colors.WHITE} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Heading title={'Select Time Slot'} />
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => setSelectedTime(item.time)}>
                <View style={selectedTime === item.time ? styles.selectedTime : styles.unSelectedTime}>
                  <Text style={{ color: selectedTime === item.time ? Colors.WHITE : Colors.PRIMARY }}>{item.time}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{ paddingTop: 20 }}>
          <Heading title={'Any Suggestion Note'} />
          <TextInput numberOfLines={4} multiline={true} placeholder="Note" style={styles.noteTextArea} onChange={(text) => setNote(text)} />
        </View>

        <TouchableOpacity onPress={createNewBooking} style={{ backgroundColor: Colors.PRIMARY, marginTop: 30, borderRadius: 99 }}>
          <Text style={styles.confirmBtn}>Confirm & Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  caladerContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 20,
    borderRadius: 15,
  },
  selectedTime: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginRight: 10,
  },
  unSelectedTime: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    marginRight: 10,
  },
  noteTextArea: {
    height: 100,
    borderColor: Colors.DARK_GRAY,
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: 'top',
    padding: 20,
    fontSize: 15,
    fontFamily: 'outfit',
  },
  confirmBtn: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'outfit',
    color: Colors.WHITE,
    padding: 15,
    elevation: 2,
  },
});

export default BookingModal;
