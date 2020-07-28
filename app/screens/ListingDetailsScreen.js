import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem'

import colors from '../config/colors'

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Gustavo Peña"
            subtitle="4 listings"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 15
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40
  }
})

export default ListingDetailsScreen;