import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      backgroundColor: 'red',
      color: props => props.color,
    },
  });

function Home() {
    return (
       <div></div>
    );
}