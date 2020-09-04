import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {fetchImage} from '../const';

const styles = StyleSheet.create({
  imageView: {
    width: 200,
    height: 300,
  },
});

export function NetworkImageView(props) {
  return (
    <Image
      source={{
        uri: fetchImage(props.id),
      }}
      style={styles.imageView}
    />
  );
}
