import React, {useRef} from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import Animated from 'react-native-reanimated';
import {HEADER_HEIGHT} from './Header';
import {btnScaleAnim} from '../utils';

export const SHUFFLE_BUTTON_HEIGHT = 50;
const TOP = 340;

const OFFSET_TOP = HEADER_HEIGHT + 20;

export function AddWordBtn({offsetY, onPress}) {
  const translateY = useRef(
    offsetY.interpolate({
      inputRange: [0, 300],
      outputRange: [0, -350 + OFFSET_TOP],
      extrapolate: Animated.Extrapolate.CLAMP,
    }),
  ).current;

  const scale = new Animated.Value(1);

  return (
    <Animated.View
      style={[
        styles.container,
        {transform: [{translateY: translateY}, {scale}]},
      ]}>
      <Pressable
        android_disableSound={false}
        android_ripple={{color: 'white'}}
        activeOpacity={1}
        style={styles.button}
        onPressIn={() => Animated.timing(scale, btnScaleAnim.in).start()}
        onPressOut={() => Animated.timing(scale, btnScaleAnim.out).start()}
        onPress={onPress}>
        <Text style={styles.btnText}>Add Word</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: TOP,
    alignItems: 'center',
    height: SHUFFLE_BUTTON_HEIGHT,
    zIndex: 1,
  },
  button: {
    width: 230,
    height: SHUFFLE_BUTTON_HEIGHT,
    backgroundColor: '#1E2125',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});
