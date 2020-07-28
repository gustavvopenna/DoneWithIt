import React, { useState } from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction'
import Screen from '../components/Screen'

const initialMessages = [
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

const MessagesScreen = () => {

  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefresing] = useState(false)

  const handleDelete = selectedMessage => setMessages(messages.filter(message => message.id !== selectedMessage.id))

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
          renderRightActions={() => (
            <ListItemDeleteAction
              onPress={() => handleDelete(item)}
            />
          )}
        />}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([{
            id: 2,
            title: 'T2',
            description: 'D2',
            image: require('../assets/mosh.jpg')
          }])
        }}
      />
    </Screen>
  )
}

export default MessagesScreen;