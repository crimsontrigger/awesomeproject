import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Cbutton from './cButton';
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Gigsy</Text>
      <Cbutton />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
    height: 80,
    paddingTop: 25,
    backgroundColor: 'black',
  },
  title: {
    marginStart: 25,
    textAlign: 'left',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
