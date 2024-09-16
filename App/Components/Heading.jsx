import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Heading = ({ title, isViewAll = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      {isViewAll && <Text>View All</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'outfit-medium',
    marginBottom: 10,
  },
});
export default Heading;
