import Animated, {Easing} from 'react-native-reanimated';

export const btnScaleAnim = {
  in: {toValue: 0.98, duration: 50, easing: Easing.inOut(Easing.ease)},
  out: {
    toValue: 1,
    duration: 50,
    easing: Easing.inOut(Easing.ease),
  },
};

const {
  Value,
  timing,
  clockRunning,
  startClock,
  block,
  cond,
  stopClock,
} = Animated;

export const runTiming = (clock, start, end, duration) => {
  const state = {
    finished: new Value(0),
    position: new Value(start),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration,
    toValue: new Value(end),
    easing: Easing.out(Easing.exp),
  };

  return block([
    cond(clockRunning(clock), 0, startClock(clock)),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ]);
};
