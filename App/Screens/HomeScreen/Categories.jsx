import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';
import Colors from '../../../Constants/Colors';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const [category, setCategory] = useState([]);
  const navigation = useNavigation();

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
          <TouchableOpacity
            style={styles.container}
            onPress={() =>
              navigation.push('business-list', {
                category: item.name,
              })
            }
          >
            <View style={styles.iconsContainer}>
              <Image source={{ uri: item?.icon?.url }} style={styles.categoriesImage} />
            </View>
            <Text style={{ fontFamily: 'outfit-medium', marginTop: 5 }}>{item?.name}</Text>
          </TouchableOpacity>
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
