import TodoActionTypes from './TodoActionTypes'
import Counter from '../util/Counter'

export const addTodo = (text) => ({
    type: TodoActionTypes.ADD_TODO,
    id: Counter.increment(),
    text
})

export const toggleTodo = (id) => ({
    type: TodoActionTypes.TOGGLE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: TodoActionTypes.DELETE_TODO,
    id
})