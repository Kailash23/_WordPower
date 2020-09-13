import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useScrollAnim} from '../hooks/useScrollAnim';
import RNBootSplash from 'react-native-bootsplash';
import {useSelector} from 'react-redux';
import {getWordsList} from '../redux/selectors';
import {
  FeaturedWord,
  ListOfWords,
  Header,
  AddWordBtn,
  ScreenTitle,
} from '../components';

const Home = ({navigation}) => {
  const offsetY = useRef(new Animated.Value(0)).current;
  const {heightAnim, opacityAnim, translateAnim} = useScrollAnim(offsetY);
  const [scrollViewHeight, setScrollViewHeight] = useState(100);
  const wordsList = useSelector(getWordsList);

  useEffect(() => {
    RNBootSplash.hide({duration: 0});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#9c9cc1'} />
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
            end={{x: 0, y: 1}}
            colors={['#9c9cc1', '#FFF']}
            style={styles.gradient}
          />
        </Animated.View>
        <View style={styles.featuredContainer}>
          <FeaturedWord offsetY={offsetY} item={wordsList[0] || {}} />
        </View>
        <AddWordBtn
          offsetY={offsetY}
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
        <Animated.ScrollView
          onLayout={e => setScrollViewHeight(e.nativeEvent.layout.height)}
          bounces={false}
          decelerationRate={0.994}
          overScrollMode="never"
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: offsetY}}},
          ])}
          scrollEnabled={!!wordsList.length}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          style={{transform: [{translateY: translateAnim}]}}
          contentContainerStyle={[
            styles.scrollContent,
            {
              paddingBottom: scrollViewHeight * 0.85,
            },
          ]}>
          <ListOfWords wordsList={wordsList} />
        </Animated.ScrollView>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
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
  featuredContainer: {
    ...StyleSheet.absoluteFillObject,
    top: 100,
  },
  scrollContent: {
    marginTop: 360,
    zIndex: 5,
  },
});

export default Home;
