import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './master.css';

class Master extends Component {
    render () {
        return (
            <div className="container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add-item">Create Product</Link></li>
                    <li><Link to="/display-item">Products</Link></li>
                </ul>
                <h1>HELLO</h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Master;