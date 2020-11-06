import {
    useParams
} from "react-router-dom";
import useStyles from './subCategory.style';
import React, {useState} from 'react';
import { GetSubCategories } from '../../services/subCategoryService';
import { Button, CircularProgress } from "@material-ui/core";
import {Link} from 'react-router-dom';

let SubData = [];

function SubCategory({data}) {
    
    const classes = useStyles();
    let { catId } = useParams();
    let fetchedData = data.find(x => x.id === catId);
    const [,setState] = useState();

    const getSubCategory = (e) => {
        GetSubCategories(catId).then(newData => {
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
            <h1>{fetchedData.name}</h1>
            <div className={classes.root}>
                {SubData.map((item, index) => {
                    if(item.subcategory === false) {
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
                    else if(item.subcategory === true){
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
                    else{
                        return (
                            <CircularProgress />
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default SubCategory;