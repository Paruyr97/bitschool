import React, { Component } from 'react';
import "./todo.css";

export default class Todo extends Component {

    state = {
        todos: [],
        inputValue: ''
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    }

    addTodo = () => {
        const {inputValue, todos} = this.state;
        const newTodos = [...todos, inputValue]
        this.setState({todos: newTodos, inputValue: ''})
    }

    render(){
        return (
            <div>
                <h1>Todo App</h1>
                <input type="text" placeholder="write your todo" value={this.state.inputValue} onChange={this.handleChange} />
                <button onClick={this.addTodo}>add</button>
                <ol>
                {
                    this.state.todos.map((todo, idx) => {
                        return <li key={idx}>{todo}</li>
                    })
                }
                </ol>
                
            </div>
        )
    }
}