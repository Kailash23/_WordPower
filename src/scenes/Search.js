import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, TextInput, ScrollView} from 'react-native';
import BackBtnSearch from '../components/BackBtnSearch';
import SubmitIcon from '../components/SubmitIcon';
import ResultRow from '../components/ResultRow';
import NoSuggestions from '../components/NoSuggestions';
import wordMap from '../common/data/map.json';
import _ from 'lodash';

export const SEARCH_BAR_HEIGHT = 58;

const Search = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleQuery = text => {
    setQuery(text);
    if (text.length >= 3) {
      let res = wordMap[text.substring(0, 3).toLowerCase()];
      if (res && text.length === 3) {
        setResults(res.slice(0, 20));
      } else {
        if (res) {
          let newRes = res.filter(word => word.startsWith(text.toLowerCase()));
          setResults(newRes.slice(0, 20));
        }
      }
    } else {
      setResults([]);
    }
  };

  const handleSubmit = () => {
    console.log(query);
    navigation.goBack();
  };

  const handleResultPress = item => {
    console.log(item);
    navigation.goBack();
  };

  const showEmptyResult = query.length > 3 && !results.length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <>
          <BackBtnSearch
            onPress={() => navigation.goBack()}
            tintColor={'#CBCBCC'}
            textStyle={styles.backBtnIcon}
          />
        </>
        <TextInput
          autoFocus
          numberOfLines={1}
          onChangeText={_.debounce(text => {
            handleQuery(text);
          }, 400)}
          placeholder="Enter word here."
          placeholderTextColor={'#A8A8A9'}
          selectionColor={'white'}
          style={styles.searchInput}
        />
        {query.length > 0 && (
          <SubmitIcon
            size={28}
            color={'#CBCBCC'}
            handlePress={handleSubmit}
            iconStyle={styles.submitIcon}
          />
        )}
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}>
        {results.map((result, ind) => (
          <ResultRow
            key={ind}
            result={result}
            handleResultPress={handleResultPress}
          />
        ))}
        {showEmptyResult && <NoSuggestions queryToShow={query} />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#505153',
  },
  searchBarContainer: {
    backgroundColor: '#505153',
    height: SEARCH_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchIcon: {
    bottom: 0,
    marginLeft: 20,
    padding: 14,
    height: '100%',
    textAlignVertical: 'center',
  },
  backBtnIcon: {
    marginLeft: 20,
    padding: 14,
    height: '100%',
    textAlignVertical: 'center',
  },
  searchInput: {
    fontSize: 16,
    color: 'white',
    height: '100%',
    marginLeft: 4,
    width: '70%',
    letterSpacing: 0.4,
    marginTop: 2,
  },
  clearIcon: {
    position: 'absolute',
    padding: 11.5,
    height: '100%',
    textAlignVertical: 'center',
    right: 0,
    paddingRight: 40,
  },
  submitIcon: {
    position: 'absolute',
    padding: 11.5,
    height: '100%',
    textAlignVertical: 'center',
    right: 0,
    paddingRight: 16,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  scrollContent: {flexGrow: 1},
  indicator: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Search;
