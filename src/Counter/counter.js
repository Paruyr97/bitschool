import React, { Component } from 'react';
import './counter.css';


export default class Counter extends Component {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        count: 0
    }

    handleClick(type){
        return () => {
            switch(type){
                case 'inc':
                    this.setState({ count: this.state.count + 1 });
                    break;
                case 'dec':
                    if(!this.state.count){
                        return;
                    }
                    this.setState({ count: this.state.count - 1 });
                    break;
                case 'reset':
                    this.setState({ count: 0 });
                    break;

            }
        }
    }

    render(){
        const {count} = this.state;
        return (
            <div className='wrap'>
                <h1>{count}</h1>
                <div>
                    <button className={`decrement ${!count ? 'disabled' : ''}`} onClick={this.handleClick('dec')} >decrement</button>
                    <button className='increment' onClick={this.handleClick('inc')}>increment</button>
                    <button className='reset' onClick={this.handleClick('reset')}>reset</button>
                </div>
            </div>
        )
    }
}