import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

function AppText({ children, type = 'text' }) {
  return <Text style={styles[type]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  base: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  sm: {
    fontSize: 14,
    fontWeight: '400',
    color: 'dodgerblue',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#20b2aa',
    fontWeight: '500',
  }
})

export default AppText
