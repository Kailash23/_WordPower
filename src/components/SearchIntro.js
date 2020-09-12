import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {LookUp} from '../assets/icons';
import {runTiming} from '../utils';

export const SearchIntro = React.memo(() => {
  const clock = new Animated.Clock();
  const opacityAnim = runTiming(clock, 0, 1, 4000);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacityAnim,
        },
      ]}>
      <View style={styles.image}>
        <LookUp width={'90%'} height={'90%'} />
      </View>
      <Text style={styles.header}>Look up a word in our dictionary</Text>
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
  image: {width: '33%', aspectRatio: 1},
});
