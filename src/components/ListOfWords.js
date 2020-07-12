import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import WordListItem from './WordListItem';

const {width, height} = Dimensions.get('window');
const HEIGHT = 60;
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const createNewDataProvider = () => new DataProvider((r1, r2) => r1 !== r2);

const ListOfTracks = ({wordsList}) => {
  const [dataProvider, setDataProvider] = React.useState(
    createNewDataProvider().cloneWithRows(wordsList),
  );

  const layoutProviderRef = React.useRef();

  layoutProviderRef.current = new LayoutProvider(
    () => 1,
    (_, dim) => {
      dim.width = width;
      dim.height = HEIGHT;
    },
  );

  const computedStyles = styles({...{width, height}});

  React.useEffect(() => {
    setDataProvider(createNewDataProvider().cloneWithRows(wordsList));
  }, [wordsList]);

  return (
    <View style={{width, height: HEIGHT * wordsList.length}}>
      <RecyclerListView
        layoutProvider={layoutProviderRef.current}
        dataProvider={dataProvider}
        rowRenderer={(_, data) => {
          let word = Object.keys(data)[0];
          return <WordListItem word={word} info={data[word]} />;
        }}
        canChangeSize
        useWindowScroll
      />
    </View>
  );
};

const styles = ({height, width}) =>
  StyleSheet.create({
    container: {
      height,
      width,
    },
  });

export default ListOfTracks;
