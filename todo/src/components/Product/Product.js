import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './product.css';

class Product extends Component {
    removeProduct = (event, id) => {
        event.preventDefault();
        this.props.click(this.props.id);
    }
    render () {
        return (
            <tr>
                <td>
                    { this.props.id}
                </td>
                <td>
                    { this.props.title}
                </td>
                <td>
                    { this.props.body}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.id} className="button button2">Edit</Link>
                </td>
                <td>
                    <form id="form-delete" onSubmit={this.removeProduct}>
                        <input type="submit" value="Delete" className="btn btn-danger"/>
                    </form>
                </td>
            </tr>
        )
    }
}

export default Product;