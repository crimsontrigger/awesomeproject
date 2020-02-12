import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
export default function Cbutton() {
  return (
    <View style={styles.header}>
      <Button color="coral" style={styles.cButton} title="Share" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    right: 0,
    alignSelf: 'flex-end',
    marginRight: 25,
    width: 80,
    height: 80,
    paddingTop: 25,
    backgroundColor: 'transparent',
  },
  cbutton: {
    marginRight: 25,
    textAlign: 'right',
    backgroundColor: 'coral',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
