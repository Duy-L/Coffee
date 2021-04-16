import React from 'react';
import TodoListItem from './todo_list_item.js';
import TodoForm from './todo_form.js';
class TodoList extends React.Component {
    render(){
        const {todos, receiveTodo, removeTodo} = this.props;
        return(
            <div>
                <h3>Notes:</h3> 
                <ul>
                    {todos.map(todo => <TodoListItem todo={todo} removeTodo={removeTodo}/>)}
                </ul>
                <TodoForm receiveTodo={receiveTodo}/>
            </div>
        )
    }
}

export default TodoList;