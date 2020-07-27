import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import ErrorMessage from '../components/ErrorMessage'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
              placeholder="Password"
              secureTextEntry={true}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton
              title="Log in"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
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

export default LoginScreen