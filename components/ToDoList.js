import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import ToDoItemComponent from './ToDoItemComponent'


function ToDoList({ todos, onDeleteTodo, onToggleTodo }) {
  const todoTestValue = Array.from(todos.values())
  return (
    <FlatList data={todoTestValue}
      renderItem={({ item }) => {
        return (
          <ToDoItemComponent
            onDeleteTodo={onDeleteTodo}
            title={item.text}
            subText={item.subText}
            id={item.id}
            complete={item.complete}
            onToggleTodo={onToggleTodo} />)
      }}/>
  )
}

export default ToDoList