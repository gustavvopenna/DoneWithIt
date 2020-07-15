import React from 'react'
import { View, StyleSheet } from 'react-native'

import AccountScreen from './app/screens/AccountScreen'

export default function App() {
  return (
    <AccountScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
})
