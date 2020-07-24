import React from 'react'
import { TouchableOpacity, StyleSheet } from "react-native"
import AppText from './AppText'

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    margin: 15
  }
})

export default PickerItem