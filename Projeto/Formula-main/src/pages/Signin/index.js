import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import './button.css'
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
      alignItems: 'center'
    },
    img: {
     marginLeft: 80,
     paddingBottom: 30
    },
    bu1: {
        marginRight: 100
    },
    bu2: {
        marginRight: 20
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
    },
    conatinerbutton: {
          display: 'flex',
          
    },

  });


function Signin(){
    const classes = useStyles();
    <link href="./button.css"></link>
    return (
        <div className={classes.root}>
          
          <Box  display= 'flex' flexDirection='column' m={5}  className={classes.div}>
            <div>
            <img src="formula.png" ></img>
            </div>
            
         <form >
           
         <TextField id="outlined-basic" label="Login" variant="outlined" className={classes.img}/>
         <TextField id="outlined-basic" label="Senha" variant="outlined" className={classes.img}/>
         </form>
          
         <div className={classes.conatinerbutton}>
         <div className={classes.bu1}>
         <button class="hover-underline-animation" >Entrar</button>
         </div>
         <div className={classes.bu2}>
         <button class="hover-underline-animation" >Registrar</button>
         </div>
         </div>
         </Box>
        </div>
    )
}

export default Signin;