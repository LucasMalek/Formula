import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles({
    root: {
      flexDirection: "column",
      width: '100%',
      height: '100vh'
    },
    grid1: {
       maxWidth: '100%',
       height: 600,
       backgroundColor: 'green'
    },
    grid2: {
        maxWidth: '100%',
        height: 340,
        backgroundColor: 'blue'
    }
  });


function User() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
          
           <Grid container className={classes.grid1}>

           </Grid>
           <Grid container className={classes.grid2}>

           </Grid>
        </div>
        
    )
}

export default User;

