import React from 'react';
import {Button, FlatList, Linking, StyleSheet, View} from 'react-native';
import courses from '../data/courses.json';
import {Appbar, Card, Paragraph, Title} from 'react-native-paper';

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
    <View style={styles.container}>
      <Appbar style={styles.bar}>
        <Appbar.Content title="Courses" />
      </Appbar>
      <FlatList
        data={courses}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <Card.Cover source={{uri: item.image}} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button
                onPress={() => {
                  handleClick(item.link);
                }}
                title="Tap to view course"
              />
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 110,
  },
  bar: {
    marginTop: 40,
  },
  card: {
    marginBottom: 20,
  },
});

export default App;
