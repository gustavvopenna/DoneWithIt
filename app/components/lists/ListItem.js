import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppText from '../AppText';

import defaultStyles from '../../config/styles'
import colors from '../../config/colors'

const IMAGE_WIDTH = 60

function ListItem({ title, subtitle, IconComponent, image, onPress, renderRightActions, showChevrons }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.gray} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.contentContainer}>
            <AppText
              numberOfLines={1}
              style={styles.title}
            >
              {title}
            </AppText>
            {subtitle && <AppText numberOfLines={2} style={styles.subtitle}>{subtitle}</AppText>}
          </View>
          {
            showChevrons &&
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={defaultStyles.colors.gray}
            />
          }
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: IMAGE_WIDTH / 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700'
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  }
})

export default ListItem;