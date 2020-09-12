import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NoResult} from '../assets/icons';

export function NoSuggestions({queryToShow}) {
  return (
    <View style={styles.container}>
      <View style={styles.notFound}>
        <NoResult width={'100%'} height={'100%'} />
      </View>
      <Text style={styles.query}>
        No suggestions found for {`\'${queryToShow}\'`}
      </Text>
      <Text style={styles.tip}>
        Please check you have the right spelling, or try different words.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagIcon: {
    marginBottom: 26,
  },
  query: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    letterSpacing: 0.3,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: '70%',
  },
  tip: {
    fontSize: 14,
    color: 'grey',
    marginTop: 22,
    textAlign: 'center',
    maxWidth: '70%',
    lineHeight: 20,
  },
  notFound: {width: '50%', aspectRatio: 1},
});
