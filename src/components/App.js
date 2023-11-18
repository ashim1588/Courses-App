import React from 'react';
import {FlatList, Text, View} from 'react-native';
import courses from '../data/courses.json';

const App = () => {
  return (
    <View>
      <FlatList
        data={courses}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default App;
