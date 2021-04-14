import React from 'react';

class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status: 'Done'
        }
        this.toggle = this.toggle.bind(this);
        this.remove = this.remove.bind(this);
    }
    toggle(){
        if (this.state.status === 'Done'){
            this.setState({status: 'Undo'})
        }else{
            this.setState({status: 'Done'})
        }
    }
    remove(){
        this.props.removeTodo(this.props.todo);
    }
    render(){
        const {todo} = this.props;
  
        return(
            <li>
                {todo.title}
                <button onClick={this.remove}>x</button>
                <button onClick={this.toggle}>{this.state.status}</button>
            </li>
        )
    }
}

export default TodoListItem;