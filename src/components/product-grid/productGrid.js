import React from 'react';
import useStyles from './productGrid.style';
import SubCategory from '../sub-category/subCategory';
import { Container } from "@material-ui/core";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

export default function ProductGrid({ categories }) {
    let match = useRouteMatch();
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {categories.map((item, index) => {
                    if(item.subcategory === false) {
                        return null;
                        // return (
                        //     <div key={index + item.id} className={classes.card}>
                        //         <img className={classes.cardImg} src={item.image} alt={item.name} />
                        //         <p className={classes.cardText}>{item.name.toLowerCase()}</p>
                        //     </div>
                        // );
                    }
                    else if(item.subcategory === true){
                        return (
                            <div key={index + item.id} className={classes.card}>
                                <img className={classes.cardImg} src={item.image} alt={item.name} />
                                <Link to={`${match.url}/${item.id}`}>
                                    <p className={classes.cardText}>{item.name.toLowerCase()}</p>
                                </Link>
                            </div> 
                        );
                    }
                    else{
                        return (
                            <h1>No Categories found</h1>
                        );
                    }
                }
            )}
            <br/>
            <Container>
                <Switch>
                    <Route path={`${match.path}/:catId`} >
                        <SubCategory data={categories} />
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}

