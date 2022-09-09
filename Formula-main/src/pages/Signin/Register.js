import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './button.css'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {Navigate} from 'react-router-dom'
const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100vh',
      backgroundImage: 'url(/i.jpg)',
      backgroundPosition: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    div: {
      borderRadius: '25px',
      backgroundColor: 'white',
      position: 'absolute',
      width: '30%',
      height: '60%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    img: {
       
    },
    container: {
          paddingLeft: 20,
    },
    textbox: {
      width: '85%',
      padding: 13,
    },
    button: {
      paddingLeft: 175,
      
    }
  });

function Register(){
    const classes = useStyles();
    const {register, handleSubmit, formState: {erros} } = useForm();
    const [state, setState] = useState([false, null]);

    const postregister = async (data) => {
        try{
            const response = await axios.post('http://localhost:5000/register', data)
            {(typeof(response.data) === "string") ?(
              alert(response.data)
            ): (
              setState([true, response.data])
            )}
        }catch (error){
           console.log(error.response)
        }
    }
    return (
        <div className={classes.root}>
          <Box  display= 'flex' flexDirection='column' m={2}  className={classes.div}>
            <div>
            <img src="formula.png"></img>
            </div>
            <form onSubmit={handleSubmit(postregister)}>
            <Grid container  className={classes.container}>
            <Grid item xs={6}>
             <item><TextField   helperText="E-mail" className={classes.img} name="email" {...register("email")}/></item>
            </Grid>
            <Grid item xs={6} >
            <item><TextField   helperText="Senha" className={classes.img} name="senha" {...register("senha")}/></item>
            </Grid>
            <Grid item xs={6}>
             <item><TextField    helperText="Nome"className={classes.img} name="nome" {...register("nome")}/></item>
            </Grid>
            <Grid item xs={6} >
            <item><TextField     helperText="Cidade" className={classes.img} name="cidade" {...register("cidade")}/></item>
            </Grid>
            <Grid item xs={12}>
            <item><TextField   variant="outlined"  multiline rows={4} className={classes.textbox} helperText="Descrição" name="descricao" {...register("descricao")}/></item>
            </Grid>
            <div className={classes.button}>
            <button class="hover-underline-animation" type='submit'>Cadastrar usuário</button>
            </div>
            </Grid>
            </form>
         </Box>
         {state[0] == true && <Navigate to={`/User/:${JSON.stringify(state[1])}`}/>}
        </div> 
    )
}
export default Register;