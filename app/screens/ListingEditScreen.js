import React from 'react'
import { StyleSheet } from 'react-native';
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms'

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothes', value: 2 },
  { label: 'Technology', value: 3 },
  { label: 'Home Appliances', value: 4 }
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
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Categories"
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