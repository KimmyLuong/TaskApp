import {connect} from 'react-redux'
import {addTodo, toggleTodo, deleteTodo} from '../data/TodoActions'
import TodoInputComponent from '../components/TodoInputComponent'

const mapStateToProps = state => ({
    // todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onAddTodo: (todoTitle, todoSubtext) => dispatch(addTodo(todoTitle, todoSubtext))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoInputComponent)