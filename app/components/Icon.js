import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Icon = ({
  name,
  size = 20,
  backgroundColor = '#000',
  iconColor = '#fff'
}) => {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.6} />
    </View>
  )
}

export default Icon