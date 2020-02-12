import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import Header from './components/header';
import CircularImageView from './components/circularImageView';
import Posts from './components/posts';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'shaun', id: '1'},
    {name: 'yoshi', id: '2'},
    {name: 'mario', id: '3'},
    {name: 'luigi', id: '4'},
    {name: 'peach', id: '5'},
    {name: 'toad', id: '6'},
    {name: 'bowser', id: '7'},
  ]);

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView>
        <CircularImageView />
        <Text style={styles.username}>Username</Text>
        <Text style={styles.aboutme}>About Me</Text>

        <View style={styles.postscontainer}>
          {people.map(item => (
            <View key={item.id}>
              <Text style={styles.posts}>{item.name}</Text>
            </View>
          ))}
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  username: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  aboutme: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  postscontainer: {
    paddingTop: 40,
  },
  posts: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
  },
});
