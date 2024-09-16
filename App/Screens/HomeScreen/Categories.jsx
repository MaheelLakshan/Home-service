import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';
import Colors from '../../../Constants/Colors';

const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    GlobalApi.getCategories().then((res) => {
      setCategory(res?.categories);
    });
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Heading title={'Categories'} isViewAll={true} />
      <FlatList
        data={category}
        // horizontal={true}
        numColumns={4}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.iconsContainer}>
              <Image source={{ uri: item?.icon?.url }} style={styles.categoriesImage} />
            </View>
            <Text style={{ fontFamily: 'outfit-medium', marginTop: 5 }}>{item?.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  iconsContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
  },

  categoriesImage: {
    height: 30,
    width: 30,
  },
});

export default Categories;
