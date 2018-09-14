import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import ToDoItemComponent from  './ToDoItemComponent'


function ToDoList ({todos}){
  const todoTestValue = Array.from(todos.values())
  return(
    // <Text>HELLO</Text>
    <FlatList data={todoTestValue}
      renderItem={({item}) => {
        console.log(item)
        return <ToDoItemComponent title={item.text} subText={item.id}/>}
      }/>
  )
}

export default ToDoList