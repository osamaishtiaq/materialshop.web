import React, { Component } from "react";
import { GetAllEntries } from '../../utils/categoryService';
import ProductGrid from '../product-grid/productGrid';
import { Container } from '@material-ui/core';
import Loader from '../common/loader';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        GetAllEntries().then(newData => {
            this.setState({ categories: newData });
        }).catch((err) => {
            console.info("Error in componentDidMount fetch categories: ", err);
        })
    }

    render() {
        const catList = this.state.categories.length > 0 ?

            <ProductGrid categories={this.state.categories} />
            : <Loader />;

        return (
            <div>
                <h2>Explore Our Products</h2>
                {catList}
            </div>
        );
    }
}

export default Home;