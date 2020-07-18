import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../components/AppText'

import colors from '../config/colors'

const MenuListItem = ({ title, icon, iconBackgroundColor, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.icon, { backgroundColor: iconBackgroundColor }]}>
          <MaterialCommunityIcons name={icon} size={24} color={colors.white} />
        </View>
        <AppText style={styles.title}>
          {title}
        </AppText>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  }
})

export default MenuListItem;