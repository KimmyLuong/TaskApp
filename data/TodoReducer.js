import Immutable from 'immutable'
import TodoActionType from './TodoActionTypes'
import Todo from './Todo'

const todoInitializationState = Immutable.OrderedMap()
const realTodoInitializationState = todoInitializationState.set("hi1", new Todo({
    id: "hi1",
    text: "my first todo",
    complete:false
}))

const todoReducer = (state = realTodoInitializationState, action) => {
    switch(action.type) {
        case TodoActionType.ADD_TODO:
            return state.set(action.id, new Todo({
                id: action.id,
                text: action.text,
                complete:false
            }))
    }
    return state
}

export default todoReducer