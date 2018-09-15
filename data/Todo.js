import Immutable from 'immutable'

const Todo = Immutable.Record({
    id: '',
    complete: false,
    text: '',
    subText: ''
})

export default Todo