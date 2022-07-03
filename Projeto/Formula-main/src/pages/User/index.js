import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Carousel from 'react-elastic-carousel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import GroupIcon from '@material-ui/icons/Group';
const useStyles = makeStyles({
    root: {
      flexDirection: "column",
      width: '100%',
      height: '100vh'
    },
    grid1: {
       maxWidth: '100%',
       height: 600,
       backgroundImage: 'url(/b2.jpg)',
       backgroundPosition: 'center',
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'column'
    },
    grid2: {
        maxWidth: '100%',
        height: 340,
        backgroundColor: 'blue',
        justifyContent: 'center',
        backgroundImage: 'url(/1.jpg)',
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    avatar: {
      marginRight: 50,
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
        card: {
          width: '200px',
          height: '250px',
          borderRadius: '25px',
          justifyContent: 'center',
          backgroundColor: 'grey'
          
        },
        ca: {
          paddingTop: 40,
          paddingRight: 45,
          
        },
        media: {
          height: '165px',
          width: '100%',
        },
        content: {
          backgroundImage: 'url('
        },
        div2: {
         display: 'flex',
          display: 'block'
        },
        image: {
          backgroundColor: 'black'
        },
       but: {
        backgroundImage: 'cover'
       }
  })


function User() {
    const classes = useStyles();
    const items = [
      {id: 1, title: 'Jim',  ataquefisico: 30, defesa: 40, img: "/jack.jpg", img2: "/jim.png", df: 3, dm: 3},
      {id: 2, title: 'Blob', ataqueMagico: 30, defesa: 41, img: "Slime.jpg", img2: "/Blob.png", df: 10, dm:2},
      {id: 3, title: 'Avin', ataquefisico: 35, defesa: 30, img: "aguia.png", img2: "Avin.png", df: 8, dm: 5}
    ]
    return (
      <div className={classes.root}>
        <Grid container className={classes.grid1}>
          <Avatar className={classes.avatar}>
            <img src="fizz.jpg"></img>
          </Avatar>

          <div className={classes.div}>
            <Typography variant="h4">Luxbolado</Typography>
            <div className={classes.but}></div>
            <Button
              variant="contained"
              color="secondary"
              className={classes.but}
              endIcon={<GroupIcon />}
            >
              Troque Cartas
            </Button>
          </div>
        </Grid>
        <Grid container className={classes.grid2}>
          <Carousel className={classes.ca}>
            {items.map((item) => (
              <Card className={classes.card}>
                <CardMedia
                  image={item.img}
                  title={item.description}
                  className={classes.media}
                ></CardMedia>
                <div>.</div>

                <CardActions className={classes.image}>
                  <Avatar className={classes.image}>{item.df}</Avatar>
                  <img src={item.img2}></img>
                  <Avatar className={classes.image}>{item.dm}</Avatar>
                </CardActions>
              </Card>
            ))}
          </Carousel>
        </Grid>
      </div>
    );
}

export default User