import React from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, width, ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      <MaterialCommunityIcons name={icon} size={25} color={defaultStyles.colors.gray} style={styles.icon} />
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 40,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  }
})

export default AppTextInput