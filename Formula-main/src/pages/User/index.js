import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import CardDisplay from '../../Utils/CardDisplay';

const useStyles = makeStyles({
    gridroot: {
      display: 'flex',
       width: '100vw',
       height: '100vh',
       alignItems: 'center',
       justifyContent: 'center',
       backgroundImage: 'url(/b2.jpg)',
       backgroundPosition: 'center'
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
          backgroundColor: 'red',
          height: '100%'
        },
  })
    function User() {
    let {info} = useParams();
    info = info.replace('%7B', '{');
    info = info.replace('%7D', '}');
    info = info.replace(':', '');
    info = JSON.parse(info);
    const classes = useStyles();
    const [displayoption, setDisplayoption] = useState({minhascartas: false, trocarcartas: false})
    const alternarEstados = (element) => {
              document.querySelectorAll('.boxbutton').forEach(b => {
                b.style.display = "none"
              })
              {element.currentTarget.id == 'cartas' ?(
                  setDisplayoption({minhascartas: true})
              ): (
                setDisplayoption({trocarcartas: true})
              )}
              
    }
    const items = [
      {id: 1, title: 'Jim',  ataquefisico: 30, defesa: 40, img: "/jack.jpg", img2: "/jim.png", df: 3, dm: 3},
      {id: 2, title: 'Blob', ataqueMagico: 30, defesa: 41, img: "/Slime.jpg", img2: "/Blob.png", df: 10, dm:2},
      {id: 3, title: 'Avin', ataquefisico: 35, defesa: 30, img: "/aguia.png", img2: "/Avin.png", df: 8, dm: 5}
    ]
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
            {displayoption.minhascartas && <CardDisplay itens = {items} />}
            <Button id = 'cartas' className='boxbutton' onClick={alternarEstados}>Minhas Cartas</Button>
            <Button id = 'troca' className='boxbutton'>CONFIGURACAO</Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
}

export default User