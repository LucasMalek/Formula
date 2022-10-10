import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Components/Header";
import Tradedisplay from "../Components/tradedisplay";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/MenuList'
import Menuitem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
     root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #2e0000,#54007f)',
        height: '100vh',
        width: '100vw'
     },
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
        height: '80px',
        width: '80px',
        borderRadius: '50%',
        backgroundColor: 'RED',
        "&:hover": {
            backgroundColor: 'purple',
            
        }
       },
       
})

function Tradepage() {
    const classes = useStyles()
  return (
      <div className={classes.root}>
        <Header></Header>
        <div className={classes.divroot}>
        <Menu className={classes.selectroot}>
            <Menuitem className={classes.divlabel}>
                <Avatar className={classes.avatarsize}></Avatar>
            </Menuitem>
       </Menu>
       <Menu className={classes.teste}>
        <Menuitem className={classes.divlabel}>
        <Avatar className={classes.avatarsize}></Avatar>
        </Menuitem>
       </Menu>
       <Button variant="contained" className={classes.buttonsubmit}>APERTA</Button>
        </div>
      </div>
  )
}

export default Tradepage