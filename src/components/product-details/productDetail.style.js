import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      alignSelf: 'center',
      margin: 'auto',

    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: '100%',
    },
    slider: {
      margin: 'auto',
      background: 'white'
    },
    slide: {
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '80vh',
    },
    img: {
      objectFit: 'cover',
      maxWidth: '100%',
      height: '100%',
    },
    productName: {
      fontSize: '2.5em',
      textTransform: 'capitalize',
      float: 'left',
      textAlign: 'left'
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90%',
      margin: 'auto',
      alignItems: 'center'
    },
    heart: {
      fontSize: '2.2em',
    },
    badge: {
      backgroundColor: '#3f51b5',
      height: '25px',
      width: '100px',
      fontSize: '13px',
      lineHeight: '0px',
      display: 'inline-block',
      overflow: 'hidden',
      borderRadius: '20px / 20px',
      color: 'white'
    },
    desc: {
      textAlign: 'left'
    }
  }));