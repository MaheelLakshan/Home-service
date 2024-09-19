import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUser, getClerkInstance } from '@clerk/clerk-expo';
import Colors from '../../../Constants/Colors';

const ProfileScreen = () => {
  const { user } = useUser();
  // const { signOut } = useSignOut();

  const profileMenu = [
    {
      id: 1,
      name: 'Home',
      icon: 'home',
    },
    {
      id: 2,
      name: 'My Booking',
      icon: 'bookmark',
    },
    {
      id: 3,
      name: 'Contact Us',
      icon: 'mail',
    },
    {
      id: 4,
      name: 'Logout',
      icon: 'log-out',
      action: async () => {
        const clerk = getClerkInstance();
        await clerk.signOut();
      },
    },
  ];

  const handleMenuClick = (item) => {
    if (item.action) {
      item.action();
    }
  };

  return (
    <View>
      <View style={{ padding: 20, paddingTop: 30, backgroundColor: Colors.PRIMARY }}>
        <Text style={{ fontFamily: 'outfit-semiBold', fontSize: 26 }}>Profile</Text>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <View style={{ borderWidth: 3, borderRadius: 99, padding: 5, borderColor: Colors.WHITE }}>
            <Image source={{ uri: user.imageUrl }} style={{ width: 90, height: 90, borderRadius: 120 }} />
          </View>

          <Text style={{ fontSize: 24, fontFamily: 'outfit-medium', color: Colors.WHITE, marginTop: 15 }}>{user.fullName}</Text>
          <Text style={{ fontSize: 16, fontFamily: 'outfit-medium', color: Colors.WHITE, marginTop: 15 }}>{user.primaryEmailAddress.emailAddress}</Text>
        </View>
      </View>

      <View style={{ paddingTop: 25 }}>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleMenuClick(item)} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 40, paddingHorizontal: 80 }}>
              <Ionicons name={item.icon} size={35} color="black" />
              <Text style={{ fontSize: 20, fontFamily: 'outfit' }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
