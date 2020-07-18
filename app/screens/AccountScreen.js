import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import MenuListItem from '../components/MenuListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Spacer from '../components/Spacer'

import colors from '../config/colors'

const menus = [
  {
    id: 1,
    title: 'My listings',
    icon: 'format-list-bulleted',
    iconBackgroundColor: colors.primary
  },
  {
    id: 2,
    title: 'My Messages',
    icon: 'email',
    iconBackgroundColor: colors.secondary
  }
]

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <ListItem
        title="Gustavo Peña"
        subtitle="gustavo.pema@gmail.com"
        image={require('../assets/mosh.jpg')}
      />
      <Spacer height={40} />
      <View>
        <FlatList
          data={menus}
          keyExtractor={(menu) => menu.id.toString()}
          renderItem={({ item }) => (
            <MenuListItem
              title={item.title}
              icon={item.icon}
              iconBackgroundColor={item.iconBackgroundColor}
              onPress={() => console.log('hello')}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <Spacer height={20} />
      <MenuListItem
        title="Log Out"
        icon="logout"
        iconBackgroundColor={colors.alert}
        onPress={() => console.log('hello')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight * 1.5,
    backgroundColor: colors.light
  }
})

export default AccountScreen;