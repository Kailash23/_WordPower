import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {LookUp} from '../assets/icons';
import {runTiming} from '../utils';

export const SearchIntro = React.memo(() => {
  const clock = new Animated.Clock();
  const opacityAnim = runTiming(clock, 0, 1, 10000);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacityAnim,
        },
      ]}>
      <View style={styles.image}>
        <LookUp width={'100%'} height={'100%'} />
      </View>
      <Text style={styles.header}>Look up a word in our dictionary</Text>
      <Text style={styles.subheader}>
        We have over 2 lakh words in our dictionary, which is available to you
        offline.
      </Text>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontWeight: '600',
    fontSize: 16,
    color: '#241E20',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
    textAlign: 'center',
  },
  image: {width: '40%', aspectRatio: 1},
});
