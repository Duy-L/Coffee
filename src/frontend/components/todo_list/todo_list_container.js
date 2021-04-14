import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import TodoList from './todo_list.js';
import {receiveTodo, receiveTodos, removeTodo} from '../../action/actions.js';

const mapStatetoProps = state => ({
    todos: allTodos(state), 
    state
});

const mapDispatchtoProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(TodoList);