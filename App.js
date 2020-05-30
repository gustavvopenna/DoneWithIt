import React from 'react'
import { View, Platform, StyleSheet, Image, Text } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/background.jpg')}
        style={styles.splash}
      />
      <View style={styles.logoContainer}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('./assets/logo-red.png')}
            style={styles.logo}
          />
          <Text style={{ marginTop: 15 }}>Sell what you don't need</Text>
        </View>
      </View>
      <View style={styles.login} />
      <View style={styles.register} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash: {
    width: '100%',
    flex: 8,
  },
  logoContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 80,
  },
  logoWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  login: {
    backgroundColor: 'lightcoral',
    width: '100%',
    flex: 1,
  },
  register: {
    backgroundColor: 'skyblue',
    width: '100%',
    flex: 1,
  },
})
