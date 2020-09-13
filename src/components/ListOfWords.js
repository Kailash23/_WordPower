import React from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import {WordListItem} from './WordListItem';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {deleteWord} from '../redux/slices/wordsSlice';

export function ListOfWords({wordsList}) {
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    let word = Object.keys(item)[0];
    return (
      <Pressable
        android_ripple={{color: '#9c9cc1'}}
        onLongPress={() => {
          Alert.alert(
            'Delete?',
            `Are you sure you want to delete the word '${word}'?`,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  dispatch(deleteWord(word));
                },
              },
            ],
            {cancelable: false},
          );
        }}>
        <WordListItem word={word} info={item[word]} />
      </Pressable>
    );
  };

  return (
    <FlatList
      data={wordsList}
      renderItem={renderItem}
      initialNumToRender={5}
      keyExtractor={(_, ind) => ind.toString()}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text style={styles.message}>Saved words will appear here </Text>
        </View>
      }
    />
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
