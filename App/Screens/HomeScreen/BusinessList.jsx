import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Heading from '../../Components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItemSmall from './BusinessListItemSmall';

const BusinessList = () => {
  const [businessList, setBusinessList] = useState();

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = () => {
    GlobalApi.getBusinessList().then((res) => setBusinessList(res?.businessLists));
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Heading title={'Latest Business'} isViewAll={true} />
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <BusinessListItemSmall business={item} />
          </View>
        )}
      />
    </View>
  );
};

export default BusinessList;
