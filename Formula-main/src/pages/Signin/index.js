import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import './button.css'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {Navigate} from 'react-router-dom'

axios.defaults.withCredentials = true

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
      alignItems: 'center',
      justifyContent: 'center'
    },
    img: {
     marginLeft: 80,
     paddingBottom: 30
    },
    bu1: {
        paddingRight: 70
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
          paddingLeft: 90
          
    },
  });
function Signin(){
    const classes = useStyles();
    <link href="./button.css"></link>
    const {register, handleSubmit, formState: {erros} } = useForm();
    //State to signin
    const [statesignin, setStatesignin] = useState(false)
    //State to register
    const [stateregister, setStateregister] = useState(false)
    const postsignin = (data) => {
      try{
         axios.post('http://localhost:5000/signin', data).then(
          response => {
               var cookies = document.cookie.split(';')
              .map(cookie => cookie.split('='))
              .reduce((acumulator, [key, value]) => ({...acumulator, [key.trim()]: decodeURIComponent(value)}), {})
              const {user} = response.data
              
              {user === undefined ?(
                alert(response.data)
              ): (
                 axios.post('http://localhost:5000/validate', cookies.token).then(
                 response => {
                  {typeof(response.data) != 'boolean' ? alert(response.data) : setStatesignin(response.data)}
                 }
                )
              )}  
          }
         )
    }catch (error){
       console.log(error.response)
    }}
    return (
        <div className={classes.root}>
          <Box  display= 'flex' flexDirection='column' m={5}  className={classes.div}>
            <div>
            <img src="formula.png" ></img>
            </div>
         <form onSubmit={handleSubmit(postsignin)}>
         <TextField label="E-mail" variant="outlined" className={classes.img} name="login" {...register("email")}/>
         <TextField label="Senha" variant="outlined" className={classes.img} name="senha" {...register("senha")}/>
         <div className={classes.conatinerbutton}>
         <div className={classes.bu1}>
         <button class="hover-underline-animation"  type='submit'>Entrar</button>
         </div>
         <button class="hover-underline-animation" onClick={() => setStateregister(true)}>Registrar</button>
         </div>
         </form>
         </Box>
         {statesignin && <Navigate to={'/User'}/>}
         {stateregister && <Navigate to={'/register'}/>}
        </div>
    )
}

export default Signin;