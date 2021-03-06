import {connect} from 'react-redux'
import {addTodo, toggleTodo, deleteTodo} from '../data/TodoActions'
import ToDoList from '../components/ToDoList'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onDeleteTodo: id => dispatch(deleteTodo(id)),
    onToggleTodo: (id) => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)