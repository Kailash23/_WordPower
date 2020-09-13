import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function WordListItem({word, info}) {
  return (
    <View style={styles.container}>
      <Text style={styles.word} numberOfLines={1}>
        {word}
      </Text>
      <Text style={styles.meaning}>{info?.definition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    aspectRatio: 5.5,
    marginHorizontal: 10,
    flex: 1,
  },
  word: {
    color: 'black',
    fontSize: 16,
    letterSpacing: 0.6,
    marginRight: 15,
  },
  meaning: {color: 'grey', fontSize: 12.5, letterSpacing: 0.6, marginTop: 5},
});
