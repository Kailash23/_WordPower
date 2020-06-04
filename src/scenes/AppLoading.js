import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export default function AppLoading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
