import React, {useRef, useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHomeAnim from '../common/hooks/useHomeAnim';
import ListOfWords from '../components/ListOfWords';
import FeaturedWord from '../components/FeaturedWord';
import Header from '../components/Header';
import AddWordBtn from '../components/AddWordBtn';
import ScreenTitle from '../components/ScreenTitle';
import UIHelper from '../common/helpers/UIHelper';
import {useSelector} from 'react-redux';
import {getWordsList} from '../redux/selectors';

const Home = ({navigation}) => {
  const offsetY = useRef(new Animated.Value(0)).current;
  const {heightAnim, opacityAnim, translateAnim} = useHomeAnim(offsetY);
  const [scrollViewHeight, setScrollViewHeight] = useState(100);
  const wordsList = useSelector(getWordsList);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <Header navigation={navigation} />
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
        <AddWordBtn
          offsetY={offsetY}
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
        <Animated.ScrollView
          // Todo fix this - extra re-render
          onLayout={e => setScrollViewHeight(e.nativeEvent.layout.height)}
          bounces={false}
          decelerationRate={0.994}
          overScrollMode="never"
          onScroll={UIHelper.onScroll({y: offsetY})}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          style={[{transform: [{translateY: translateAnim}]}]}
          contentContainerStyle={[
            styles.scrollContent,
            {
              paddingBottom: scrollViewHeight * 0.76,
            },
          ]}>
          <ListOfWords wordsList={wordsList} />
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
