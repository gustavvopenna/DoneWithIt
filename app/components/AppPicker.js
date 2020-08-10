import React, { useState } from 'react'
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

const AppPicker = ({ icon, items, placeholder, selectedItem, onSelectedItem, width }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          <MaterialCommunityIcons
            name={icon}
            size={25}
            color={defaultStyles.colors.gray}
            style={styles.icon}
          />
          <AppText style={[styles.text, selectedItem ? defaultStyles.text : styles.placeholder]}>{selectedItem ? selectedItem : placeholder}</AppText>
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
            title="Close"
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                item={item}
                onPress={() => {
                  setModalVisible(false)
                  onSelectedItem(item.label)
                }}
              />
            )}
            numColumns={3}
            horizontal={false}
            columnWrapperStyle={{ justifyContent: 'space-between', marginHorizontal: 15, marginTop: 20 }}
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
  icon: {
    marginRight: 10
  },
  text: {
    flex: 1
  },
  placeholder: {
    color: '#c1c4c9'
  }
})

export default AppPicker