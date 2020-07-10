// TODO: Create Divider component

import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText'

const BORDER_RADIUS = 12

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.header} />
      <View style={styles.body}>
        <AppText type='text'>{title}</AppText>
        <View style={{ height: 5 }} />
        <AppText type='cardSubtitle'>{subtitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: BORDER_RADIUS
  },
  header: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS
  },
  body: {
    padding: 10
  }
})

export default Card
