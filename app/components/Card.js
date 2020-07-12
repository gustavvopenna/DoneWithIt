// TODO: Create Divider component

import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'

const BORDER_RADIUS = 12

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.header} />
      <View style={styles.detailsContainer}>
        <AppText type='text' style={{ marginBottom: 5 }}>{title}</AppText>
        <AppText type='cardSubtitle'>{subtitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden'
  },
  header: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 10
  }
})

export default Card
