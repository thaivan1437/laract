import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './updateProduct.css';
import config from '../../../config';

class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', body: '' };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`${config.API_SERVER_URL}products/${this.props.match.params.id}/edit`)
            .then(response => {
                this.setState({ title: response.data.title, body: response.data.body });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    handleChangeBody(e) {
        this.setState({
            body: e.target.value
        })
    }


    handleSubmit(event) {
        event.preventDefault();
        const products = {
            title: this.state.title,
            body: this.state.body
        }
        let uri = `${config.API_SERVER_URL}products/` + this.props.match.params.id;
        axios.put(uri, products).then((response) => {
            this.props.history.push('/display-item', products);
        });
    }
    render() {
        return (
            <div>
                <h1>Update Product</h1>
                <div>
                    <Link to="/display-item">Return to Product</Link>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="title">Product Title</label>
                            </div>
                            <div className="col-75">
                                <textarea type="text"
                                          value={this.state.title}
                                          onChange={this.handleChangeTitle} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="body">Product Body</label>
                            </div>
                            <div className="col-75">
                                <textarea className="form-control"
                                          onChange={this.handleChangeBody} value={this.state.body}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" value="Update" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default UpdateProduct;