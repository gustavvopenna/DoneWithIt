import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../config/colors'

const ListItemSeparator = () => {
  return (
    <View style={styles.saparator} />
  );
}

const styles = StyleSheet.create({
  saparator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.light
  }
})

export default ListItemSeparator;