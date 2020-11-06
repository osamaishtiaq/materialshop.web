import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: theme.palette.background.paper,
    },
    card: {
      width: '420px',
      height: '220px',
      margin: '10px',
      marginBottom: '50px',
      backgroundColor: 'white',
      display: 'flex',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'space-around',
      maxWidth: '100%'
    },
    cardImg: {
      width: '160px',
      height: '160px',
      objectFit: 'cover',
      border: '5px solid white',
      boxShadow: '0 0 1px black'
    },
    cardRight: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardText: {
        fontWeight: 600,
        fontSize: '1.2em'
    },
    cardLink: {
      textDecoration: 'none',
      color: 'white'
    }
  }));
  