import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
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
      <FlatList
        data={wordsList}
        renderItem={({item}) => {
          let word = Object.keys(item)[0];
          return <WordListItem word={word} info={item[word]} />;
        }}
        ListEmptyComponent={
          <View style={styles.container}>
            <Text style={styles.header}>
              Currently there are no saved words.
            </Text>
            <Text style={styles.subheader}>
              Just click on the add word button above and type in the new word, it
              will find its definitions and save it automatically.
            </Text>
          </View>
        }
        initialNumToRender={5}
        keyExtractor={(_, ind) => ind.toString()}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontWeight: '600',
    fontSize: 16,
    color: 'grey',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
    textAlign: 'center',
  },
});
export default ListOfTracks;
