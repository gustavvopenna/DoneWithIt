import React from 'react'
import { StyleSheet } from 'react-native';
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms'

const categories = [
  { label: 'Furniture', value: 1, color: '#fc5c65', icon: 'floor-lamp' },
  { label: 'Cars', value: 2, color: '#fd9644', icon: 'car' },
  { label: 'Cameras', value: 3, color: '#fed330', icon: 'camera' },
  { label: 'Games', value: 5, color: '#26de81', icon: 'cards' },
  { label: 'Clothin', value: 6, color: '#2bcbba', icon: 'shoe-heel' },
  { label: 'Sports', value: 7, color: '#45aaf2', icon: 'basketball' },
  { label: 'Movies & Music', value: 8, color: '#4b7bec', icon: 'headphones' },
  { label: 'Books', value: 9, color: '#4b7bec', icon: 'headphones' },
  { label: 'Other', value: 10, color: '#4b7bec', icon: 'headphones' }
]

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label('Title'),
  price: Yup.number().positive().required().label('Price'),
  category: Yup.string().required().label('Category'),
  description: Yup.string().required().min(4).label('Description')
})

const ListingEditScreen = () => {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ title: '', price: '', description: '', category: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          name='title'
          placeholder="Title"
        />
        <AppFormField
          autoCorrect={false}
          name='price'
          placeholder="Price"
          width="33%"
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Categories"
          width="50%"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name='description'
          placeholder="Description"
        />
        <SubmitButton title="Post" />
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

export default ListingEditScreen