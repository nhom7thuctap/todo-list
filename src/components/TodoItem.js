import React, { Component } from 'react';
import './TodoItem.css';


class TodoItem extends Component {
 
    render() {
        return (
            <div className="TodoItem">
                <p> {this.props.title} </p>
            </div>
        );
    }
}

export default TodoItem;