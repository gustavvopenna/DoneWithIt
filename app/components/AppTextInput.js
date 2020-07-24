import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={25} color={colors.gray} style={styles.icon} />
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.light,
    borderRadius: 40,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  },
  textInput: {
    color: colors.dark,
    fontSize: 18
  }
})

export default AppTextInput