import React, {useRef, useState} from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHomeAnim from '../common/hooks/useHomeAnim';
import ListOfWords from '../components/ListOfWords';
import FeaturedWord from '../components/FeaturedWord';
import Header from '../components/Header';
import SuffleButton from '../components/SuffleButton';
import ScreenTitle from '../components/ScreenTitle';

const onScroll = contentOffset =>
  Animated.event([
    {
      nativeEvent: {
        contentOffset,
      },
    },
  ]);

const Home = () => {
  const offsetY = useRef(new Animated.Value(0)).current;
  const {heightAnim, opacityAnim, translateAnim} = useHomeAnim(offsetY);
  const [scrollViewHeight, setScrollViewHeight] = useState(100);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <Header />
      <>
        <ScreenTitle name={'My Vocab'} />
        <Animated.View
          style={[
            styles.gradientContainer,
            {
              height: Animated.concat(heightAnim, '%'),
              opacity: opacityAnim,
            },
          ]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.7}}
            colors={['white', '#57BDDA']}
            style={styles.gradient}
          />
        </Animated.View>
        <View style={styles.inputContainer}>
          <FeaturedWord
            offsetY={offsetY}
            word={'Undermining'}
            meaning={
              'The action or process of lessening the effectiveness, power, or ability of someone or something, especially gradually or insidiously.'
            }
          />
        </View>
        <SuffleButton offsetY={offsetY} />
        <Animated.ScrollView
          onLayout={e => setScrollViewHeight(e.nativeEvent.layout.height)}
          bounces={false}
          decelerationRate={0.994}
          overScrollMode="never"
          onScroll={onScroll({y: offsetY})}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          style={[{transform: [{translateY: translateAnim}]}]}
          contentContainerStyle={[
            styles.scrollContent,
            {
              paddingBottom: scrollViewHeight * 0.85,
            },
          ]}>
          <ListOfWords />
        </Animated.ScrollView>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    alignSelf: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  inputContainer: {
    ...StyleSheet.absoluteFillObject,
    marginTop: -10,
    top: 100,
  },
  scrollContent: {
    marginTop: 360,
    zIndex: 5,
  },
});

export default Home;
