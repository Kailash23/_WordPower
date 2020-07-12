import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Placeholder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Currently there are no saved words.</Text>
      <Text style={styles.subHeader}>
        Just click on the add word button above and type in the new word, it
        will find its definitions and save it automatically.
      </Text>
    </View>
  );
};

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
  subHeader: {
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Placeholder;
