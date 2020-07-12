import React from 'react'
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native'

import AppText from '../components/AppText'
import AppButton from '../components/AppButton'

import colors from '../config/colors'

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <AppText>Sell what you don´t need</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Login' />
        <AppButton title='Register' color="secondary" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    height: 150,
    justifyContent: 'space-evenly',
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
    marginBottom: 20,
  }
})

export default WelcomeScreen
