import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';

const Slider = () => {
  const [slider, setSlider] = useState();

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    GlobalApi.getSlider().then((res) => {
      setSlider(res?.sliders);
    });
  };

  return (
    <View>
      <Heading title={'Offers for you'} />
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <Image source={{ uri: item?.image?.url }} style={styles.sliderImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderImage: {
    height: 120,
    width: 270,
    borderRadius: 20,
    objectFit: 'contain',
  },
});

export default Slider;
