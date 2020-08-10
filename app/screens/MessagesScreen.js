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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
          showChevrons={true}
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