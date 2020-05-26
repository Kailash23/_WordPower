import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import dimensions from '../common/helpers/dimensions';
import {HEADER_HEIGHT} from '../components/Header';

export const SHUFFLE_BUTTON_HEIGHT = 50;
const TOP = 340;

const OFFSET_TOP = HEADER_HEIGHT * dimensions.ratio + 20;

const SuffleButton = ({offsetY}) => {
  const translateY = useRef(
    offsetY.interpolate({
      inputRange: [0, 300],
      outputRange: [0, -350 + OFFSET_TOP],
      extrapolate: Animated.Extrapolate.CLAMP,
    }),
  ).current;
  return (
    <Animated.View
      style={[styles.container, {transform: [{translateY: translateY}]}]}>
      <TouchableOpacity activeOpacity={0.9} style={styles.button}>
        <Text style={styles.btnText}>Suffle Word</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

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

export default SuffleButton;
