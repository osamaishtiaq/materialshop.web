import React, { Component } from "react";
import { GetCategories } from '../../services/categoryService';
import ProductGrid from '../product-grid/productGrid';
import { Container, CircularProgress } from '@material-ui/core';


class Home extends Component {
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
                <Container maxWidth="lg">
                    <ProductGrid categories={this.state.categories} />
                </Container>
            </div>
            
            : <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <CircularProgress />
                <h3>Loading</h3>
            </div>
        );
    }
}

export default Home;