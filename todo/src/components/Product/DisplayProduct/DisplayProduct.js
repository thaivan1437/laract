import React, { Component } from 'react';
import Product from '../Product';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { findIndex } from 'lodash';
import '../DisplayProduct/displayProduct.css';
import config from '../../../config';

class DisplayProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct = (id, state) => {
        axios.delete(`${config.API_SERVER_URL}products/` + id).then((response) => {
            let currentProduct = [...this.state.products];
            let productIndex = findIndex(currentProduct, p => p.id === id);
            currentProduct.splice(productIndex, 1);
            this.setState({
                products: currentProduct
            })
        });
    }

    componentDidMount() {
        axios.get(`${config.API_SERVER_URL}products`)
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        const products = this.state.products.map((product) => {
            return <Product click={this.deleteProduct} key={product.id} id={product.id} title={product.title} body={product.body} />;
        })
        return (
            <div>
                <h1>Products</h1>
                <div className="row">
                    <div className="col-md-2">
                        <Link to="/add-item">Create Product</Link>
                    </div>
                </div><br />
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Title</th>
                        <th>Product Body</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayProduct;