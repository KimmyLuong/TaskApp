import {connect} from 'react-redux'
import {addTodo, toggleTodo, deleteTodo} from '../data/TodoActions'
import ToDoList from '../components/ToDoList'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onAddTodo: todoString => dispatch(addTodo(todoString))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)