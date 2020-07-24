import React from 'react'
import { StyleSheet, View } from 'react-native'

import AccountScreen from './app/screens/AccountScreen'
import ListingScreen from './app/screens/ListingsScreen'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'

export default function App() {
  return (
    <View style={styles.container}>
      <AppTextInput icon="email" placeholder="Email" />
      <AppPicker icon="apps" placeholder="Categories" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
})
