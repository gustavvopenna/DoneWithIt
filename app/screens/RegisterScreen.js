import React from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const RegisterScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name='name'
          keyboardType="default"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name='email'
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name='password'
          placeholder="Password"
          secureTextEntry={true}
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  screen: {
    marginHorizontal: 15
  }
})

export default RegisterScreen