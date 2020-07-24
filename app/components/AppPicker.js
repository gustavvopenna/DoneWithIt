import React, { useState } from 'react'
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

const AppPicker = ({ icon, items, placeholder, selectedItem, onSelectedItem }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={icon}
            size={25}
            color={defaultStyles.colors.gray}
            style={styles.icon}
          />
          <AppText style={styles.text}>{selectedItem ? selectedItem : placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defaultStyles.colors.gray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button
            title="close"
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false)
                  onSelectedItem(item.label)
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 40,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    flex: 1
  },
  icon: {
    marginRight: 10
  }
})

export default AppPicker