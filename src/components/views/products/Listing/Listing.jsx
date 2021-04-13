import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import HttpService from '../../../services/HttpService';

/**
 * Product Listing Component
 * 
 */
class Listing extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            rows: [],
        };

        this.fetchProducts = this.fetchProducts.bind(this);
        this.formatRows = this.formatRows.bind(this);
    }

    componentDidMount() {
        this.fetchProducts();
    }

    //Fetch Product listing from api request

    fetchProducts() {
        this.setState({loading: true});
        HttpService.Get({url: "products.json"})
            .then(response => {
                if (response.data.status === "success") {
                    this.formatRows(response.data.products);
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            });
    }

    //Format Products data 
    formatRows(data) {
        const rows = data.map((p,i)=> {
            return {
                id: (i+1),
                name: p.name,
                category: p.category,
                price: p.price,
                actions: [
                    <a className="btn btn-secondary btn-sm" href={`/products/${i}/detail`} key="detail"><i className="fa fa-eye"></i> </a>
                ],
            };
        })
        this.setState({ rows, loading: false});
    }

    render() {
        return (
            <div className="">
                <h1>Product Listing</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.loading && <tr>
                            <td colSpan="5" className="text-center">
                                <i className="fa fa-spinner fa-spin"></i>
                            </td>
                        </tr>}
                        {!this.state.loading && this.state.rows.map((product, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td className="text-right">{product.price}</td>
                                    <td>{product.actions}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Listing;
