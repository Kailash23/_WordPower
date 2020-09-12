import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function WordListItem({word, info}) {
  return (
    <View style={styles.container}>
      <View style={styles.wordContainer}>
        <Text style={styles.word} numberOfLines={1}>
          {word}
        </Text>
        <Text style={styles.meaning}>{info?.definition}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12.5,
  },
  wordContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  word: {
    color: 'black',
    fontSize: 16,
    letterSpacing: 0.6,
    marginRight: 15,
  },
  meaning: {color: 'grey', fontSize: 12.5, letterSpacing: 0.6},
});
