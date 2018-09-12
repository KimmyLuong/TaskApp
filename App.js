import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoItemComponent from './components/ToDoItemComponent'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ToDoItemComponent title="TODO TITLE" subText="WOW THIS IS THE SUBTEXT OF OUR TODO. IT CONTAINS MORE INFORMATION ABOU THINGS"/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
