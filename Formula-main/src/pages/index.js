import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import Midle from './Components/Midle';
const useStyles = makeStyles({
    root: {
      flexDirection: "column"
    },
  });
    
function Home() {
  const classes = useStyles();
  
    return (
      <div className = {classes.root}>
       <Header/>
       <Midle/>
      </div>
    );
}

export default Home;