import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import ToDoItemComponent from './components/ToDoItemComponent'
import ToDoList from './containers/ToDoListContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import myStore from './data'

const store = createStore(myStore)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ToDoList />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
  },
  stretch: {
    flex: 1
  }
});
