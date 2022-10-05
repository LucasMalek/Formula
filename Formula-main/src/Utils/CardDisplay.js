import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Carousel from 'react-elastic-carousel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    grid2: {
        maxWidth: '100%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        backgroundImage: 'url(/1.jpg)',
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat'
    },
        card: {
          width: '200px',
          height: '250px',
          borderRadius: '25px',
          justifyContent: 'center',
          backgroundColor: 'grey',
          background: 'linear-gradient(to right, white, grey)',
          marginTop: 3
        },
        media: {
          height: '165px',
          width: '100%',
        },
  })


function CardDisplay(props) {
           const classes = useStyles();

           return(
            <Grid container className={classes.grid2}>
            <Carousel className={classes.ca}>
            {props.itens.map((item) => (
              <Card className={classes.card}>
                <CardMedia
                  image={item.character_img}
                  className={classes.media}
                ></CardMedia>
                <div>.</div>
                <CardActions>
                  <Avatar >{item.ataque}</Avatar>
                  <img src={item.name_img}></img>
                  <Avatar className={classes.ad_color}>{item.defesa}</Avatar>
                </CardActions>
              </Card>
            ))}
          </Carousel>
        </Grid>   
           )       
}

export default CardDisplay;