import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import Heading from '../../Components/Heading';

const BusinessPhoto = ({ business }) => {
  const imageArray = business?.images?.url ? [business.images.url] : [];
  return (
    <View>
      <Heading title={'Photos'} />

      {business ? (
        <FlatList data={imageArray} numColumns={2} renderItem={({ item }) => <Image source={{ uri: item }} style={{ height: 120, width: '100%', flex: 1, borderRadius: 15, margin: 5 }} />} />
      ) : (
        <Text>No images available</Text> // Show message if no images are found
      )}
    </View>
  );
};

export default BusinessPhoto;
