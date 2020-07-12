import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton'
import WelcomeScreen from './app/screens/WelcomeScreen'
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <ViewImageScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
})
