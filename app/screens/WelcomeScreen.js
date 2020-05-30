import React from 'react'
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native'

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell what you don´t need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  logoContainer: {
    width: '100%',
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
})

export default WelcomeScreen
