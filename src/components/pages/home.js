import React, { Component } from "react";
import { GetCategories } from '../../services/categoryService';
import ProductGrid from '../product-grid/productGrid';
import { Container } from '@material-ui/core';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        GetCategories().then(newData => {
            console.log(newData);

            this.setState({ categories: newData });
        }).catch((err) => {
            console.info("Error in componentDidMount fetch categories");
            console.log(err);
        })
    }

    render() {
        return (
            this.state.categories.length > 0 ? 
            <div style={{ marginTop: "90px" }}>
                <Container fixed>
                    <ProductGrid categories={this.state.categories} />
                </Container>
            </div>
            : <div>Loading...</div>
        );
    }
}

export default Home;