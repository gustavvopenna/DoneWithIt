import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Technology', value: 3 }
]

export default function App() {
  const [category, setCategory] = useState()

  return (
    <View style={styles.container}>
      <AppTextInput icon="email" placeholder="Email" />
      <AppPicker
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Categories" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
})
