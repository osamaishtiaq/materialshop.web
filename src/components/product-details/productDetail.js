import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useStyles from './productDetail.style';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import {TextField} from '@material-ui/core';
import { Button } from '@material-ui/core';

export default function ProductDetail() {
  const classes = useStyles();

  return (
    <div style={{marginTop: '80px'}}>
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={6}>
                    <Grid item xs={6} container>
                        <Carousel className={classes.slider}>
                            <div className={classes.slide}>
                                <img alt="complex" className={classes.img} src="https://lallahoriye.com.tirzee.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" />
                            </div>
                            <div className={classes.slide}>
                                <img alt="complex" className={classes.img} src="https://lallahoriye.com.tirzee.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" />
                            </div>
                            <div className={classes.slide}>
                                <img alt="complex" className={classes.img} src="https://lallahoriye.com.tirzee.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" />
                            </div>
                        </Carousel>
                    </Grid>
                    <Grid item xs={12} md container>
                        <div className={classes.row}>
                            <h1 className={classes.productName}>Product No#2 is pretty pink</h1>
                            <FavoriteBorderTwoToneIcon className={classes.heart} />
                        </div>
                        <br />
                        <div className={classes.row}>
                            <div className={classes.badge}>
                                <p>In Stock</p>
                            </div>
                        </div>
                        <div className={classes.row}>
                            <h2>$40</h2>
                            <TextField
                                id="filled-number"
                                label="Qty"
                                type="number"
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.row}>
                            <p className={classes.desc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit massa a libero dictum, eget faucibus massa tincidunt. Integer at tempus quam. Maecenas condimentum venenatis semper. Nulla sit amet ligula dictum, pellentesque ipsum et, euismod quam. Donec eu tincidunt ante, at pulvinar sem. Sed malesuada vehicula tempus. Duis porttitor pulvinar ultrices. Donec cursus rhoncus urna, pretium tempus dolor pulvinar quis. Nulla consectetur tellus eget dui pharetra, quis consectetur arcu tristique. Curabitur volutpat suscipit arcu non faucibus. Etiam lacinia congue suscipit. Vestibulum vitae rhoncus tellus. Suspendisse in dictum turpis, a tincidunt ipsum. Duis pharetra lorem quis nulla sagittis pulvinar.</p>
                        </div>
                        <div className={classes.row}>
                            <Button style={{width: '48%'}} size="lg" variant="contained" color="secondary">Add to Cart</Button>
                            <Button style={{width: '48%'}} size="lg" variant="contained" color="primary">Add to Wishlist</Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    </div>
  );
}
