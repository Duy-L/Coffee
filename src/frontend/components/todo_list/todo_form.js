import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false
        };

        this.uniqueId = this.uniqueId.bind(this);
        this.logSubmit = this.logSubmit.bind(this);

    }
    update(property) {
        return e => this.setState({[property]: e.target.value});
    }

    uniqueId(){
        return new Date().getTime();
    }
    logSubmit(event){
        if (this.state.title === "" || this.state.body === ""){
            alert("please dont leave the field blank");
            return 0;
        }
        event.preventDefault();
        const todo = Object.assign({}, this.state, {id: this.uniqueId() });
        this.props.receiveTodo(todo);
        localStorage.setItem('todo', JSON.stringify(todo));
        this.setState({
            title: "",
            body: ""
        });
    }

    render (){
        return (
            <form onSubmit={this.logSubmit}>
                <label>Title:
                    <input onChange={this.update('title')} value={this.state.title} />
                </label>
                <br/>
                <label>Body:
                    <textarea onChange={this.update('body')} value={this.state.body}>
                    </textarea>
                </label>
                <button type="submit">submit</button>
            </form>
        );
    }
};

export default TodoForm;
