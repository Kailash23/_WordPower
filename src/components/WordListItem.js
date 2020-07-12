import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import showToast from '../common/helpers/showToast';

const WordListItem = ({word, info}) => (
  <View style={styles.container}>
    <View style={styles.wordContainer}>
      <Text style={styles.word} numberOfLines={1}>
        {word}
      </Text>
      <Text
        numberOfLines={2}
        style={styles.meaning}
        onPress={() => {
          showToast(info?.definition);
        }}>
        {info?.definition}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12.5,
    paddingHorizontal: 10,
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

export default WordListItem;
