import React, {Component} from 'react';


export default class Animal extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const animals = this.props.animals
        return (
            <div>{animals.map(animal => <p>{animal}</p>)}</div>
        )
    }
}