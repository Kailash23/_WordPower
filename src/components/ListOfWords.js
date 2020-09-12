import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {WordListItem} from './WordListItem';

export function ListOfWords({wordsList}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
        }}>
        <FlatList
          data={wordsList}
          renderItem={({item}) => {
            let word = Object.keys(item)[0];
            return <WordListItem word={word} info={item[word]} />;
          }}
          initialNumToRender={5}
          keyExtractor={(_, ind) => ind.toString()}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.message}>Saved words will appear here </Text>
            </View>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    width: '100%',
    aspectRatio: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontFamily: 'OpenSans-Regular',
  },
});
