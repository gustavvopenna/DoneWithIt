// TODO: Refactor to remove all styles

import React from 'react'
import { Text } from 'react-native'

import defaultStyles from '../config/styles'

function AppText({ children, type = 'text', style, ...otherProps }) {
  return <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
}

export default AppText
