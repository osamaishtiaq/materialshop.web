import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: theme.palette.background.paper,
    },
    card: {
      width: '220px',
      height: '220px',
      margin: '10px',
      marginBottom: '50px',
      overflow: 'hidden',
      backgroundColor: 'lightgrey',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)'
    },
    cardImg: {
      width: '220px',
      height: '220px',
      objectFit: 'cover'
    },
    cardText: {
      position: "absolute",
      width: '220px',
      textTransform: 'capitalize'
    }
  }));
  