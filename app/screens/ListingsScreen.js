import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Screen from '../components/Screen'
import Card from '../components/Card'
import Spacer from '../components/Spacer'

import colors from '../config/colors'


const DATA = [
  {
    id: 1,
    title: 'Red jacket for sale',
    subtitle: '$100',
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch in great condition',
    subtitle: '$1500',
    image: require('../assets/jacket.jpg')
  }
]

const ListingsScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          )}
          ItemSeparatorComponent={() => <Spacer height={20} />}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingsScreen