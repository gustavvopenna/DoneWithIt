import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Spacer from '../components/Spacer'
import Icon from '../components/Icon'

import colors from '../config/colors'

const menuItems = [
  {
    id: 1,
    title: 'My listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    id: 2,
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  }
]

const AccountScreen = () => {
  return (
    <Screen style={styles.screen} >
      <Spacer height={20} />
      <ListItem
        title="Gustavo Peña"
        subtitle="gustavo.pema@gmail.com"
        image={require('../assets/mosh.jpg')}
      />
      <Spacer height={40} />
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menu) => menu.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => console.log('hello')}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  size={40}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <Spacer height={20} />
      <ListItem
        IconComponent={
          <Icon
            name="logout"
            backgroundColor={colors.alert}
            size={40}
          />
        }
        title="Log Out"
        onPress={() => console.log('hello')}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  }
})

export default AccountScreen;