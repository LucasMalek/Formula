import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/MenuList'
import Menuitem from '@material-ui/core/MenuItem'
const useStyles = makeStyles({
       selectroot: {
        display: "flex",
    flexDirection: 'column',
    borderRadius: "25px",
    backgroundColor: "white",
    position: "absolute",
    width: "350px",
    height: "450px",
    alignItems: "center",
    overflowY: 'auto',
    textAlign: 'center',
    outlineColor: "red",
    border: '1px solid black',
    marginRight: 500,
   
       },
       divlabel: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 2,
        width: '100%'
       },
       avatarsize: {
        width: 80,
        height: 80
       },
       divroot: {
        display: 'flex',
        alignItems: "center",
        height: '80%',
        width: '80%',
        
        position: "absolute",
        justifyContent: 'center'
       },
       teste: {
        display: "flex",
    flexDirection: 'column',
    borderRadius: "25px",
    backgroundColor: "white",
    position: "absolute",
    width: "350px",
    height: "450px",
    alignItems: "center",
    overflowY: 'auto',
    textAlign: 'center',
    outlineColor: "red",
    border: '1px solid black',
    marginLeft: 500,
    position: 'absolute'
       },
       buttonsubmit: {
        
       }
  })

  

function Tradedisplay(props) {
    const classes = useStyles();
    const [card1, Setcard1] = useState(null)
    const [card2, Setcard2] = useState(null)
    
    const selectcardtrade = async() => {
            axios.post("http://localhost:5000/tradecards", {card1: card1, card2: card2}).
            then(response => {alert(response)})
    }
    return (
        <div className={classes.divroot}>
        <Menu className={classes.selectroot}>
        {props.users[0].map(element1=> {
            return (
                <Menuitem onClick={(e) => {
                    Setcard1(element1)
                    e.currentTarget.style.backgroundColor = "grey"
                }}className={classes.divlabel}>
                <Avatar className={classes.avatarsize} src={element1.character_img}></Avatar>
                <img src={element1.name_img}></img>
                <Typography variant="subtitle2">{element1.nomeuser}</Typography>
                </Menuitem>
            )
        })}
       </Menu>
       
       <Menu className={classes.teste}>
       {props.users[1].map(element2=> {
            return (
                <Menuitem onClick={(e) => {
                    Setcard2(element2)
                    e.currentTarget.style.backgroundColor = "grey"
                }} className={classes.divlabel}>
                <Avatar className={classes.avatarsize} src={element2.character_img}></Avatar>
                <img src={element2.name_img}></img>
                <Typography variant="subtitle2">{element2.name_user}</Typography>
                </Menuitem>
            )
        })}
       </Menu>
       <button className={classes.buttonsubmit}  onClick={selectcardtrade}>APERTAAAAAAAA</button>
        </div>
    )   
}

export default Tradedisplay