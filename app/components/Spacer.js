import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ height }) => {
  return (
    <View
      style={[styles.container, { height }]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

export default Spacer;