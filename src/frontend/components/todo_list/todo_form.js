import React from 'react';
import {v4 as uuidv4 } from "uuid";
import "./assets/todo.css";
var randomColor = require('randomcolor');

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: "",
            show: false,
            color: randomColor({luminosity:"light",}),
            defaultPos: {x:100, y:0},
        };
        this.logSubmit = this.logSubmit.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.display = this.display.bind(this);

    }
    update(property) {
        return e => this.setState({[property]: e.target.value});    }


    keyPress(e){
        var code = e.keyCode || e.which;
        if (code === 13){
            this.logSubmit();
        }
        
    }

    logSubmit(){
        if (this.state.body === ""){
            alert("type in something");
            return 0;
        }
        this.setState({color: randomColor({luminosity:"light",})});
        const todo = Object.assign({}, this.state, {id: uuidv4()});
        this.props.receiveTodo(todo);
        this.setState({
            body: ""
        });
    }
    display(){
        if(!this.state.show){
            this.setState({show: true});
        }else{
            this.setState({show: false});
        }
    }

    render (){
        return (
            <div>
                <button 
                    id="todo_button"
                    onClick={this.display}
                >+</button>
                {this.state.show && 
                (<div class="div_effect">
                    <input 
                        class="effect"
                        onChange={this.update('body')}
                        value={this.state.body}
                        placeholder="enter something..."
                        onKeyPress={(e) => this.keyPress(e)}
                    />
                     <span class="focus-border"></span>
                </div>)}
            </div>
        );
    }
};

export default TodoForm;
