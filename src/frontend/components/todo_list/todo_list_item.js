import React from 'react';
import { NavItem } from 'react-bootstrap';
import Draggable from 'react-draggable';
import { clearTodo } from '../../action/actions';
import "./assets/todo.css";

class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            defaultPos: {x:205, y:0},
        }
        this.todo = this.props.todo;
        this.toggle = this.toggle.bind(this);
        this.remove = this.remove.bind(this);
        this.updatePos = this.updatePos.bind(this);
        this.defaultPos = this.defaultPos.bind(this);
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
    defaultPos(){
        let rState = localStorage.getItem(this.todo.id)
        let newS = JSON.parse(rState);
        if (newS === null){
            return this.state.defaultPos;
        }else{
            return newS.defaultPos;
        }
    }
    updatePos(data){
        this.todo.defaultPos = {x: data.x, y: data.y};
        this.setState({defaultPos: this.todo.defaultPos});
        let sState = JSON.stringify(this.state);
        localStorage.setItem(this.todo.id, sState);
    }

    render(){
        const {todo} = this.props;
        return(
            
            <Draggable
                key={todo.id}
                defaultPosition = {this.defaultPos()}
                onStop={(e, data) => {
                    this.updatePos(data);
                }}>
                <div style={{backgroundColor: todo.color}} className="box">
                    {todo.body}
                    <button
                        id="delete" 
                        onClick={this.remove}
                        onTouchStart={this.remove}
                    >X</button>
                </div>
            </Draggable>
        )
    }
}

export default TodoListItem;