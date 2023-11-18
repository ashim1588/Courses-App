import React from 'react';
import {Button, FlatList, Linking, View} from 'react-native';
import courses from '../data/courses.json';

const handleClick = link => {
  Linking.canOpenURL(link).then(supported => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log("Can't open URL:" + link);
    }
  });
};

const App = () => {
  return (
    <View>
      <FlatList
        data={courses}
        renderItem={({item}) => (
          <Button
            onPress={() => {
              handleClick(item.link);
            }}
            title="Tap to view course"
          />
        )}
      />
    </View>
  );
};

export default App;
