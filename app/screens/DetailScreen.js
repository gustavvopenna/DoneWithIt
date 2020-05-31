import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'

function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.garbageButton} />
        <View style={styles.closeButton} />
      </View>
      <Image
        resizeMode='contain'
        style={styles.customImage}
        source={require('../assets/chair.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'center',
  },
  customImage: {
    width: '100%',
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    right: 20,
  },
  buttonsContainer: {
    position: 'absolute',
    width: '100%',
    top: 30,
    flexDirection: 'row',
  },
  garbageButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    left: 20,
  },
})

export default DetailScreen
