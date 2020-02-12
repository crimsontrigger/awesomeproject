import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
export default function CircularImageView() {
  return (
    <View style={styles.imageView}>
      <Image source={require('../assets/imageview.jpg')} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden',
    borderBottomLeftRadius: 3000,
    borderBottomRightRadius: 3000,
    borderTopRightRadius: 3000,
    borderTopLeftRadius: 3000,
    width: 150,
    height: 150,
    backgroundColor: 'blue',
  },
  img: {
    width: 150,
    height: 150,
  },
});
