import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CardDisplay from '../../Utils/CardDisplay';
import { useEffect } from 'react';
import axios from 'axios'
import Tradedisplay from '../Components/tradedisplay';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    gridroot: {
      display: 'flex',
       width: '100vw',
       height: '100vh',
       alignItems: 'center',
       justifyContent: 'center',
       backgroundImage: 'url(/b2.jpg)',
       backgroundPosition: 'center',
       position: 'absolute'
    },
    avatar: {
      width: '300px',
      height: '300px',
        },
        div: {
          marginTop: 15,
          width: '170px',
          height: '40px',
          backgroundColor: 'grey',
          marginRight: 50,
          alignItems: 'center',
          justifyContent: 'center'
        },
        griditem1: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '60vh'
        },
        griditem2: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '40vh'
        },
        divbutton: {
          display: 'flex',
          justifyContent: 'space-between',
          width: '100vw',
          height: '100%'
        }
       
  })
    function User() {
      let {info} = useParams();
      info = info.replace('%7B', '{');
      info = info.replace('%7D', '}');
      info = info.replace(':', '');
      info = JSON.parse(info);
     
      let user_cards
      let all_cards

    useEffect(async() => {
      try {
           await axios.post("http://localhost:5000/getusercards", info)
           .then(response => user_cards = response.data)
           await axios.post("http://localhost:5000/getallcards", info)
           .then(response => all_cards = response.data)
      }catch(e) {
          alert(e)
      }
    }, [])

    const classes = useStyles();
    const [displayoption, setDisplayoption] = useState({minhascartas: false, trocarcartas: false, user_cards: null, all_cards: null})
    const alternarEstados = async(element) => {
              document.querySelectorAll('.boxbutton').forEach(b => {
                b.style.display = "none"
              })
              {element.currentTarget.id == 'cartas' ?(
                  setDisplayoption({minhascartas: true, user_cards: user_cards})
              ): (
                setDisplayoption({trocarcartas: true, all_cards: all_cards, user_cards: user_cards})
              )}
              
    }
    return (
      <div>
        <Grid container spacing= {0} className={classes.gridroot}>
          <div>
          <Grid item className={classes.griditem1}>
          <Avatar className={classes.avatar}>
            <img src="/fizz.jpg"></img>
          </Avatar>
            <Typography variant="h4">{info.nome}</Typography>
          </Grid>
          </div>
          <Grid item className={classes.griditem2}>
            <div className={classes.divbutton}>
            {displayoption.minhascartas && <CardDisplay itens = {displayoption.user_cards} />}
            <Button id = 'cartas' className='boxbutton' onClick={alternarEstados}>Minhas Cartas</Button>
            <Button id = 'troca'  className='boxbutton' onClick={alternarEstados}>CONFIGURACAO</Button>
            </div>
          </Grid>
          {displayoption.trocarcartas && <Tradedisplay users={[displayoption.all_cards, displayoption.user_cards, info]}/>}
        </Grid>
      </div>
    );
}

export default User