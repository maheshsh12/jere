import React, { Component } from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            detail: null,
        }
    }

    componentDidMount() {
        //get product id from url param
        if (this.props.match.params && this.props.match.params.id) {
            this.setState({id: this.props.match.params.id});
            this.fetchProductDetail(this.props.match.params.id)
        } else {
            window.location.href = '/';
        }
    }

    //Fetch product detail 

    fetchProductDetail(id) {
        //Fetch product detail
    }

    render() {
        return (
            <div className="">
                <h1>Product Detail</h1>
            </div>
        );
    }
}

export default Detail;
