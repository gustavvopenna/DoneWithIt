import React from 'react'
import { TouchableOpacity, StyleSheet, View } from "react-native"
import AppText from './AppText'
import Icon from './Icon'

const ITEM_WIDTH = 80

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name={item.icon} backgroundColor={item.color} size={70} />
        <AppText style={styles.text}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    margin: 15,
    width: ITEM_WIDTH,
    textAlign: 'center'
  }
})

export default PickerItem