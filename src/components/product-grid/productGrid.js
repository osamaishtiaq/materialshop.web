import React from 'react';
import useStyles from './productGrid.style';
import { Link } from "react-router-dom";

export default function ProductGrid({ categories }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {categories.map((item) => {
                if (item.subcategory === false) {
                    // Render Product Card here 
                    return null;
                }
                else if (item.subcategory === true) {
                    // Render Subcategory Card here
                    return (
                        <div key={item.id} className={classes.card}>
                            <img className={classes.cardImg} src={item.image} alt={item.name} />
                            <Link to={`categories/${item.id}/${item.name}`}>
                                <p className={classes.cardText}>{item.name.toLowerCase()}</p>
                            </Link>
                        </div>
                    );
                }
                else {
                    return (
                        <h1>No Categories found</h1>
                    );
                }
            }
            )}
        </div>
    );
}
