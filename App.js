import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton'
import WelcomeScreen from './app/screens/WelcomeScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
