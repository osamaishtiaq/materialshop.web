import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import useStyles from './productGrid.style';

export default function ProductGrid({ categories }) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Explore Categories</ListSubheader>
                </GridListTile>
                {categories.map((item) => (
                    <GridListTile key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <GridListTileBar
                            title={item.name}
                            subtitle={item.subcategory ? "Explore more" : ""}
                            actionIcon={
                                <IconButton aria-label={`info about ${item.name}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}