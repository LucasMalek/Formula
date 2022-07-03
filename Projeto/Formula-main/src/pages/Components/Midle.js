import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import '@fontsource/roboto';

const useStyles = makeStyles((theme) => ({
    C1: {
        backgroundImage: 'url(/fantasy.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
       height: '700px',
       maxWidth: '100%',
    },
    C2: {
       height: '700px',
       maxWidth: '100%',
       backgroundColor: '#660066',
       backgroundImage: 'url(d2.jpg)',
       backgroundPosition: 'center'
        
       
    },
    root: {
        flexDirection: 'column'
    },
    grid: {
        backgroundImage: 'url(/e.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    grid2: {
        
        
        position: 'relative',
        marginLeft: 220,
        marginTop: 90,

        
    },
    dist: {
        marginLeft: 275,
        width: '200px',
        height: '200px',
        
    },
    div2: {
        
       paddingLeft: 100,
        position: 'absolute'
      
    },
    img: {
        width: '600px',
        height: '700px',
        
        
    },
    img2: {
        marginBottom: 300,
    },
    text: {
        paddingLeft: 150,
        
    },
    lumus: {
        paddingLeft: 140,
       
    },
    ajuba: {
        paddingLeft: 145,
    },
    U: {
        paddingLeft: 160
    },
    ze: {
        paddingLeft: 155
    },
    sem: {
        paddingLeft: 120
    },
    bu: {
        paddingTop: 30,
        width: '900px',
        
    },
    h: {
        width: '500px',
        height: '680px',
        paddingLeft: 450,
    
    }
  }));


function Midle() {
    const classes = useStyles();

    return(
        <div className= {classes.root}>
        <Container className = {classes.C1}>
       <img src="fada.png" className={classes.bu}></img>
       
       </Container>
       
        <Grid container className= {classes.C2}>
        <Grid item xs = {6} >
        <div className={classes.div2}>
        <img src='pp.png' className={classes.img}></img>
        </div>
         <div className={classes.grid2}>
          <img src="3.png" ></img>
        <Typography variant="h6" className={classes.text}>Jim</Typography>
        <Typography variant="h6" className={classes.text}>Avin</Typography>
        <Typography variant="h6" className={classes.lumus}>Lumus</Typography>
        <Typography variant="h6" className={classes.ajuba}>Ajubá</Typography>
        <Typography variant="h6" className={classes.U}>U</Typography>
        <Typography variant="h6" className={classes.ze}>Zé</Typography>
        <Typography variant="h6" className={classes.text}>Blob</Typography>
      
        <Typography variant="h6" className={classes.sem}>Sem nome</Typography>
        
        
         </div>
        </Grid>
        <Grid item xs = {6} className={classes.grid}>
          
        </Grid>
       </Grid>
      
        </div>
       
    )
}

export default Midle;