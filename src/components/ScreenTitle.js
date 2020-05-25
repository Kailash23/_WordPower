import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const ScreenTitle = ({name}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.content}>
        <View
          style={{
            width: '54%',
          }}>
          <Text numberOfLines={1} style={[styles.title]}>
            {name}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -5,
  },
  content: {
    alignItems: 'center',
    top: 16,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.6,
    color: 'black',
    textAlign: 'center',
    zIndex: -5,
  },
});

export default ScreenTitle;
