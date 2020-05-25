import React from 'react';
import {View} from 'react-native';
import WordMeaning from './WordMeaning';

const words = [
  {
    word: 'Speculate',
    meaning: 'To say about something without evidence',
  },
  {
    word: 'Augment',
    meaning: 'Make (something) greater by adding to it; increase.',
  },
  {
    word: 'Reconciliation',
    meaning: 'The restoration of friendly relations.',
  },
  {
    word: 'Shenanigans',
    meaning: 'Secret or dishonest activity or manoeuvring.',
  },
  {
    word: 'Profound',
    meaning: '(of a state, quality, or emotion) very great or intense.',
  },
  {
    word: 'Undermining',
    meaning:
      'The action or process of lessening the effectiveness, power, or ability of someone or something, especially gradually or insidiously.',
  },
  {
    word: 'Notion',
    meaning: 'A conception of or belief about something.',
  },
  {
    word: 'Speculate',
    meaning: 'To say about something without evidence',
  },
  {
    word: 'Augment',
    meaning: 'Make (something) greater by adding to it; increase.',
  },
  {
    word: 'Reconciliation',
    meaning: 'The restoration of friendly relations.',
  },
  {
    word: 'Shenanigans',
    meaning: 'Secret or dishonest activity or manoeuvring.',
  },
  {
    word: 'Profound',
    meaning: '(of a state, quality, or emotion) very great or intense.',
  },
  {
    word: 'Undermining',
    meaning:
      'The action or process of lessening the effectiveness, power, or ability of someone or something, especially gradually or insidiously.',
  },
  {
    word: 'Notion',
    meaning: 'A conception of or belief about something.',
  },
  {
    word: 'Shenanigans',
    meaning: 'Secret or dishonest activity or manoeuvring.',
  },
  {
    word: 'Profound',
    meaning: '(of a state, quality, or emotion) very great or intense.',
  },
  {
    word: 'Undermining',
    meaning:
      'The action or process of lessening the effectiveness, power, or ability of someone or something, especially gradually or insidiously.',
  },
  {
    word: 'Notion',
    meaning: 'A conception of or belief about something.',
  },
  {
    word: 'Speculate',
    meaning: 'To say about something without evidence',
  },
  {
    word: 'Augment',
    meaning: 'Make (something) greater by adding to it; increase.',
  },
  {
    word: 'Reconciliation',
    meaning: 'The restoration of friendly relations.',
  },
  {
    word: 'Shenanigans',
    meaning: 'Secret or dishonest activity or manoeuvring.',
  },
  {
    word: 'Profound',
    meaning: '(of a state, quality, or emotion) very great or intense.',
  },
  {
    word: 'Undermining',
    meaning:
      'The action or process of lessening the effectiveness, power, or ability of someone or something, especially gradually or insidiously.',
  },
  {
    word: 'Notion',
    meaning: 'A conception of or belief about something.',
  },
  {
    word: 'Shenanigans',
    meaning: 'Secret or dishonest activity or manoeuvring.',
  },
  {
    word: 'Profound',
    meaning: '(of a state, quality, or emotion) very great or intense.',
  },
  {
    word: 'Undermining',
    meaning:
      'The action or process of lessening the effectiveness, power, or ability of someone or something, especially gradually or insidiously.',
  },
  {
    word: 'Notion',
    meaning: 'A conception of or belief about something.',
  },
  {
    word: 'Speculate',
    meaning: 'To say about something without evidence',
  },
  {
    word: 'Augment',
    meaning: 'Make (something) greater by adding to it; increase.',
  },
  {
    word: 'Reconciliation',
    meaning: 'The restoration of friendly relations.',
  },
  {
    word: 'Shenanigans',
    meaning: 'Secret or dishonest activity or manoeuvring.',
  },
  {
    word: 'Profound',
    meaning: '(of a state, quality, or emotion) very great or intense.',
  },
  {
    word: 'Undermining',
    meaning:
      'The action or process of lessening the effectiveness, power, or ability of someone or something, especially gradually or insidiously.',
  },
  {
    word: 'Notion',
    meaning: 'A conception of or belief about something1.',
  },
];

const ListOfTracks = () => (
  <View
    style={{
      backgroundColor: 'white',
    }}>
    <View
      style={{
        flex: 1,
        marginHorizontal: 10,
      }}>
      {words.map((item, index) => (
        <WordMeaning key={index} word={item.word} meaning={item.meaning} />
      ))}
    </View>
  </View>
);

export default ListOfTracks;
