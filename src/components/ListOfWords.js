import React from 'react';
import {View} from 'react-native';
import WordListItem from './WordListItem';

const ListOfTracks = ({wordsList}) => (
  <View
    style={{
      backgroundColor: 'white',
    }}>
    <View
      style={{
        flex: 1,
        marginHorizontal: 10,
      }}>
      {wordsList.map((item, index) => {
        let word = Object.keys(item)[0];
        return <WordListItem key={index} word={word} info={item[word]} />;
      })}
    </View>
  </View>
);

export default ListOfTracks;
