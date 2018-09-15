import TodoActionTypes from './TodoActionTypes'
import Counter from '../util/Counter'

export const addTodo = (text, subText) => ({
    type: TodoActionTypes.ADD_TODO,
    id: Counter.increment(),
    text, 
    subText
})

export const toggleTodo = (id) => ({
    type: TodoActionTypes.TOGGLE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: TodoActionTypes.DELETE_TODO,
    id
})