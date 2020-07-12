import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'

function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons name="trash-can-outline" size={30} color="white" />
        </View>
        <View style={styles.closeIcon}>
          <MaterialIcons name="close" size={30} color="white" />
        </View>
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
  closeIcon: {
    position: 'absolute',
    right: 20,
  },
  iconsContainer: {
    position: 'absolute',
    width: '100%',
    top: 30,
    flexDirection: 'row',
  },
  deleteIcon: {
    position: 'absolute',
    left: 20,
  },
})

export default DetailScreen
