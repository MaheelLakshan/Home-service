import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../../Constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';

const Header = () => {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text style={{ color: Colors.WHITE, fontFamily: 'PlaypenSans' }}>Welcome,</Text>
              <Text style={{ color: Colors.WHITE, fontSize: 20, fontFamily: 'Outfit-SemiBold' }}>{user?.fullName}</Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>

        <View style={styles.serchBarContainer}>
          <TextInput placeholder="search" style={styles.textInput} />
          <View style={styles.searchBtnContainer}>
            <FontAwesome name="search" size={24} color={Colors.PRIMARY} />
          </View>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  serchBarContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  searchBtnContainer: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: Colors.WHITE,
    // backgroundColor: Colors.WHITE,
    // padding: 8,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: '85%',
    fontSize: 16,
    fontFamily: 'Outfit',
  },
});

export default Header;
