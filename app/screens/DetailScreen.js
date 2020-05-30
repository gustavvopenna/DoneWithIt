import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.garbageButton} />
        <View style={styles.closeButton} />
      </View>
      <Image
        style={styles.customImage}
        source={require('../assets/chair.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
  },
  customImage: {
    width: '100%',
    height: '70%',
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
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
    backgroundColor: '#4ecdc4',
    position: 'absolute',
    left: 20,
  },
})

export default DetailScreen
