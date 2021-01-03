import React, { Component } from 'react';
import "./todo.css";
import {Col, Card, Button, Container, Row, InputGroup, FormControl} from 'react-bootstrap';
import EditTodo from './editTodo';


export default class Todo extends Component {

    state = {
        todos: [],
        inputValue: '',
        post: null,
        edit: false
    }

    idGenerator = () => {
        return Math.random().toString(32).slice(2)+ '-' + Math.random().toString(32).slice(2);
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    }

    addTodo = () => {
        const {inputValue, todos} = this.state;
        const newTodos = [{ title: inputValue, id: this.idGenerator() }, ...todos]
        inputValue.trim() && this.setState({todos: newTodos, inputValue: ''})
    }

    removeTodo = (id) => {
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos })
    }

    editTodo = (id) => {
        // this.state.todos.forEach(todo => {
        //     if(todo.id === id){
        //         todo.title
        //     }
        // })
    }


    render(){
        const todos = this.state.todos.map(({ title, id }) => {
                return (
                    <Col key={id} xs={12} sm={6} md={4} lg={3} xl={2}   className="toDo">
                        <Card>Featured
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{title}</Card.Text>
                                <Button 
                                    variant="danger" 
                                    onClick={() => this.editTodo(id)}
                                    >Edit
                                </Button>
                                <Button 
                                    variant="danger" 
                                    onClick={() => this.removeTodo(id)}
                                    >Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })

        return (
            <div>
                <h1 onClick={() => this.setState({edit: !this.state.edit})}>Todo App</h1>

                { this.state.edit && <EditTodo />}
                <Container>
                    <Row className='justify-content-center'>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-describedby="basic-addon1"
                                    placeholder="write your todo" 
                                    value={this.state.inputValue} 
                                    onChange={this.handleChange}/>
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={this.addTodo}>add</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    {todos}
                </Row>
            </div>
        )
    }
}