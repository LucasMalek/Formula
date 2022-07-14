import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Buttonn from '../../Utils/Buttonn';
const useStyles = makeStyles({
    toolbar: {
      backgroundColor: '#ad2d2d',
      width: '100%',
      position: 'fixed',
      height: '70px',
      display: 'flex'
     },
     menuButton: {
        marginRight: 5,
      },
      div: {
        flexGrow: 1
      },
      for: {
        
      },
      bu: {
       marginBottom: 1000,
      paddingLeft: 200
      }
  });

function Header() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const options = [
    'Login'
  ]

    return(
     <AppBar className = {classes.toolbar}>
         <Toolbar>
         
         <img src="formula.png" className={classes.for}></img>
          <div className={classes.div}></div>
         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
         <IconButton
        aria-label="Apps"
        aria-controls="long-menu"
        aria-haspopup="true"
        children = "Apps"
        onClick={handleClick}
        size = "small"
      >
       <Avatar fontsize = "large"/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
          </IconButton>
         </Toolbar>
     </AppBar>
    );
}

export default Header;