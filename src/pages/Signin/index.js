import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Buttonn from '../../Utils/Buttonn';
import { Button } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100vh',
      backgroundImage: 'url(/i.jpg)',
      backgroundPosition: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    div: {
      borderRadius: '25px',
      backgroundColor: 'white',
      position: 'absolute',
      width: '20%',
      marginTop: 150,
      marginLeft:750,
      height: '40%',

    },
    img: {
     marginLeft: 80,
     paddingBottom: 30
    },
    bu: {
        width: '90px',
        height: '50px',
        paddingLeft: 140
    },
    dragon: {
      marginTop: 450,
      marginLeft:1065,
       width: '60px',
       height: '60px',
       position: 'absolute'
       
    },
    back: {
      position: 'relative'
    }
  });

function Signin(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
          
          <Box  display= 'flex' flexDirection='column' m={5}  className={classes.div}>
            
            <img src="formula.png" ></img>
         <form >
           
         <TextField id="outlined-basic" label="Login" variant="outlined" className={classes.img}/>
         <TextField id="outlined-basic" label="Senha" variant="outlined" className={classes.img}/>
         </form>
          
          
         
         <div className={classes.bu}> 
         <Button variant="contained" color="primary" fullWidth>
          Entrar
         </Button>
         </div>
         </Box>
         
          
        </div>
    )
}

export default Signin;