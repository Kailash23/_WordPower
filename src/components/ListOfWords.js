import React from 'react';
import {View, FlatList} from 'react-native';
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
        />
      </View>
    </View>
  );
}
