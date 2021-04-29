import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import TodoList from './todo_list.js';
import {receiveTodo, receiveTodos, removeTodo, clearTodo} from '../../action/actions.js';

const mapStatetoProps = state => ({
    todos: allTodos(state), 
    state
});

const mapDispatchtoProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)),
    clearTodo: todo => dispatch(clearTodo())
});

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(TodoList);