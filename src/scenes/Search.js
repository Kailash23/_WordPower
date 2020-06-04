import React, {useState, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import BackBtnSearch from '../components/BackBtnSearch';
import SubmitIcon from '../components/SubmitIcon';
import ResultRow from '../components/ResultRow';
import NoSuggestions from '../components/NoSuggestions';
import throttle from 'lodash/throttle';
import {memGetSuggestions} from '../services/WordCompletion';
import {fetchWordInfo} from '../services/FetchWordInfo';
import {filterUptoLimit} from '../common/utils/filter';

export const SEARCH_BAR_HEIGHT = 58;

const Search = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceDataFetch = useCallback(
    throttle(fetchWordSuggestions, 1500),
    [],
  );

  async function fetchWordSuggestions(text) {
    console.log('called');
    if (text.length >= 3) {
      text = text.toLowerCase();
      let suggestions = await memGetSuggestions(text.substring(0, 3));
      let filteredWords = filterUptoLimit(
        suggestions,
        word => word.startsWith(text),
        10,
      );
      setResults(filteredWords);
      setLoading(false);
    } else {
      setResults([]);
    }
  }

  const handleSubmit = async () => {
    setLoading(true);
    let info = await fetchWordInfo(query);
    setLoading(true);
    navigation.goBack();
  };

  const handleSuggestionPress = async item => {
    setLoading(true);
    let info = await fetchWordInfo(item);
    setLoading(false);
    console.log(info);
    navigation.goBack();
  };

  const showEmptyResult = query.length >= 3 && !results.length && !loading;
  const showLoading = query.length >= 3 && loading;

  const handleOnChangeText = text => {
    setQuery(text);
    debounceDataFetch(text);
    if (!loading) {
      setLoading(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <>
          <BackBtnSearch
            onPress={() => navigation.goBack()}
            tintColor={'#CBCBCC'}
            textStyle={styles.searchBtnIcon}
          />
        </>
        <TextInput
          autoFocus
          numberOfLines={1}
          onChangeText={handleOnChangeText}
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
            handleResultPress={handleSuggestionPress}
          />
        ))}
        {showEmptyResult && <NoSuggestions queryToShow={query} />}
        {showLoading && (
          <ActivityIndicator
            style={styles.indicator}
            size={50}
            color={'grey'}
          />
        )}
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
  searchBtnIcon: {
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
