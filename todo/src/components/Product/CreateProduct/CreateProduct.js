import React, {Component} from 'react';
import axios from 'axios';
import './createProduct.css';
import config from '../../../config';

class CreateProduct extends Component {
    constructor(props){
        super(props);
        this.state = {productTitle: '', productBody: ''};
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeTitle(e){
        this.setState({
            productTitle: e.target.value
        });
    }
    handleChangeBody(e){
        this.setState({
            productBody: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const products = {
            title: this.state.productTitle,
            body: this.state.productBody
        };
        let uri = `${config.API_SERVER_URL}products`;
        axios.post(uri, products).then((response) => {
            this.props.history.push( '/display-item', products );
        });
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="title">Product Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" onChange={this.handleChangeTitle} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="body">Product Body</label>
                        </div>
                        <div className="col-75">
                            <input type="text" onChange={this.handleChangeBody}/>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Add product" />
                    </div>
                </form>
            </div>
        );
    }
}
export default CreateProduct;