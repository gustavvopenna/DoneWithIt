import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import Screen from '../components/Screen'

const MessagesScreen = () => {

  const messages = [
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/mosh.jpg')
    },
    {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assets/mosh.jpg')
    }
  ]

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => <ListItem
          title={item.title}
          subtitle={item.description}
          image={item.image}
          onPress={() => console.log('item pressed')}
          renderRightActions={ListItemDeleteAction}
        />}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}

export default MessagesScreen;