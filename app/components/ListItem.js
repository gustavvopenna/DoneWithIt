import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from './AppText';

import colors from '../config/colors'

const IMAGE_WIDTH = 60

function ListItem({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: IMAGE_WIDTH / 2,
    marginRight: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '700'
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
  },
  contentContainer: {

  }
})

export default ListItem;