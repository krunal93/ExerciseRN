import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NetworkImageView} from './NetworkImageView';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  authorText: {
    fontSize: 20,
    paddingVertical: 20,
  },
});

export function SliderRow(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.authorText} testID={"author-title-"+props.id}>{props.author}</Text>
      <NetworkImageView id={props.id} />
    </View>
  );
}
