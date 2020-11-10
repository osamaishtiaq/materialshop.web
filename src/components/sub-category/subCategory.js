import useStyles from './subCategory.style';
import React, { useState } from 'react';
import { GetSubCategories } from '../../utils/subCategoryService';
import { Button, CircularProgress } from "@material-ui/core";
import { Link, useParams } from 'react-router-dom';

let SubData = [];

function SubCategory() {

    const classes = useStyles();
    const { id, name } = useParams();
    const [, setState] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getSubCategory = (e) => {
        GetSubCategories(id).then(newData => {
            SubData = newData;
            setState({});
        }).catch((err) => {
            console.info("Error in fetching sub categories");
            console.log(err);
        })
    }

    getSubCategory();

    return (
        <div>
            <h1>{name}</h1>
            <div className={classes.root}>
                {SubData.map((item, index) => {
                    if (isLoading === false) {
                        if (item.subcategory === false) {
                            return (
                                <div key={index + item.id} className={classes.card}>
                                    <img className={classes.cardImg} src={item.image} alt={item.name} />
                                    <div className={classes.cardRight}>
                                        <p className={classes.cardText}>{item.name}</p>
                                        <Button variant="contained" color="secondary">
                                            <Link className={classes.cardLink} to="/productDetail">Shop All</Link>
                                        </Button>
                                    </div>
                                </div>
                            );
                        }
                        else if (item.subcategory === true) {
                            return (
                                <div key={index + item.id} className={classes.card}>
                                    <img className={classes.cardImg} src={item.image} alt={item.name} />
                                    <div className={classes.cardRight}>
                                        <p className={classes.cardText}>{item.name}</p>
                                        <Button variant="contained" color="secondary">Explore More</Button>
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return (
                                <CircularProgress />
                            );
                        }
                    }
                    else if (isLoading === true) {
                        return (
                            <CircularProgress />
                        )
                    }
                    else {
                        return (
                            <h1>Something went wrong</h1>
                        )
                    }
                })}
            </div>

        </div>
    );
}

export default SubCategory;