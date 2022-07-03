import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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
      width: '30%',
      marginTop: 150,
      marginLeft:650,
      height: '60%',
      alignItems: 'center'

    },
    img: {
       padding: 15,
       
    },
    container: {
          paddingLeft: 40
    },
    textbox: {
      width: '85%',
      padding: 13,
    },
    button: {
      paddingRight: 20
    }
  });

function Register(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
          
          <Box  display= 'flex' flexDirection='column' m={2}  className={classes.div}>
            <div>
            <img src="formula.png"></img>
            </div>
            <form>
            <Grid container  className={classes.container}>
            <Grid item xs={6}>
             <item><TextField id="outlined-basic"    helperText="Login"className={classes.img}/></item>
            </Grid>
            <Grid item xs={6} >
            <item><TextField id="outlined-basic"    helperText="Senha" className={classes.img}/></item>
            </Grid>
            <Grid item xs={6}>
             <item><TextField id="outlined-basic"    helperText="Data de nascimento"className={classes.img}/></item>
            </Grid>
            <Grid item xs={6} >
            <item><TextField id="outlined-basic"    helperText="Cidade" className={classes.img}/></item>
            </Grid>
            <Grid item xs={12}>
            <item><TextField id="outlined-basic"  variant="outlined"  multiline rows={4} className={classes.textbox} helperText="Descrição" /></item>
            </Grid>
            </Grid>
            <div className={classes.button}>
            <button class="hover-underline-animation" formAction='http://localhost:3003/User'>Cadastrar usuário</button>
            </div>
            </form>
         </Box>
        </div>
    )
}
export default Register;