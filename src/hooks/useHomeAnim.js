import Animated from 'react-native-reanimated';
import {useRef} from 'react';

export function useHomeAnim(offsetY) {
  const opacityAnim = useRef(
    offsetY.interpolate({
      inputRange: [0, 220],
      outputRange: [1, 0.4],
      extrapolate: Animated.Extrapolate.CLAMP,
    }),
  ).current;

  const heightAnim = useRef(
    offsetY.interpolate({
      inputRange: [0, 300],
      outputRange: [60, 14],
      extrapolate: Animated.Extrapolate.CLAMP,
    }),
  ).current;

  const translateAnim = useRef(
    offsetY.interpolate({
      inputRange: [0, 300],
      outputRange: [0, 70],
      extrapolate: Animated.Extrapolate.CLAMP,
    }),
  ).current;
  return {opacityAnim, heightAnim, translateAnim};
}
