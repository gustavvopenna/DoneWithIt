import React from 'react'
import { StyleSheet } from 'react-native'

import AccountScreen from './app/screens/AccountScreen'
import ListingScreen from './app/screens/ListingsScreen'

export default function App() {
  return (
    <ListingScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
})
