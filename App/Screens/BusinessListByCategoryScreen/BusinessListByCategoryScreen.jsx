import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import Colors from '../../../Constants/Colors';

const BusinessListByCategoryScreen = () => {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [businessListByCategory, setBusinessListByCategory] = useState();

  useEffect(() => {
    param && getBusinessByCategory();
  }, [param]);

  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(param.category).then((res) => setBusinessListByCategory(res.businessLists));
  };

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', paddingBottom: 18 }} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={{ fontSize: 20, fontFamily: 'outfit-medium' }}>{param?.category}</Text>
      </TouchableOpacity>
      {businessListByCategory?.length > 0 ? (
        <FlatList data={businessListByCategory} renderItem={({ item, index }) => <BusinessListItem business={item} />} />
      ) : (
        <View>
          <Text
            style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
              textAlign: 'center',
              marginTop: '20%',
              color: Colors.DARK_GRAY,
            }}
          >
            No Business Found
          </Text>
          <View style={{ alignItems: 'center', marginTop: 15 }}>
            <FontAwesome5 name="search-minus" size={48} color={Colors.DARK_GRAY} />
          </View>
        </View>
      )}
    </View>
  );
};

export default BusinessListByCategoryScreen;
