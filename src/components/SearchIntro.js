import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SearchIntro = React.memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Look up a word in our dictionary</Text>
      <Text style={styles.subheader}>
        We have over 2 lakh words in our dictionary, which is available to you
        offline.
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal : 20
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

export default SearchIntro;
