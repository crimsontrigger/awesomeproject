import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Posts() {
  return (
    <View style={styles.posts}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  posts: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
