import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton'
import WelcomeScreen from './app/screens/WelcomeScreen'
import Card from './app/components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#f8f4f4', padding: 20 }}>
        <Card title="Red jacket for sale!" subtitle="$100" image={require('./app/assets/jacket.jpg')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
})
