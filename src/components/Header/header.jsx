import React, {useState} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom';
import  "../Header/header.css";
import { useSelector } from "react-redux";

import  "../../pages/Main/main.css";

import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import SubStore from '../subStore/SubStore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mr_2: {
      marginRight:theme.spacing(3),
       fontFamily: ' Sanchez, serif',
       fontSize: "17px",
        "&:hover": {
      backgroundColor: 'transparent',
    },
  },
  
  storeIcon:{
      cursor:"pointer",
  },
  headerColor:{
    // backgroundColor:"#A0522D",
    // backgroundColor:"rgb(128,42,0)",
    position:"fixed",
    backgroundColor:"rgb(61,10,0)"
  }
}));

// const flexDiv = flexable-div2;

export default function Header() {

  const classes = useStyles();
  
  const {food} = useSelector(state => state.cardData)

  const [show, setShow] = useState();

  const handleShowSubStore = () => {
    setShow(!show);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerColor}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              <Link to="/">
            {/* <img src="https://www.freshmenu.com/images/fm-header-logo.svg" class="image2"/> */}
                <span className="span">Pizza Tower</span>
              </Link>
          </Typography>
          <Link to="/drink">
          <Button  className={classes.mr_2} color="inherit" variant="outlined">Drink</Button>
          </Link>

           <Button  className={classes.mr_2} color="inherit" variant="outlined">Login</Button>

             <MenuItem>
        <IconButton onClick={handleShowSubStore} aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={food.length} color="secondary">
           <LocalGroceryStoreIcon className={classes.storeIcon}/>
          </Badge>
        </IconButton>
      </MenuItem>

        </Toolbar>
      </AppBar>
      {show && <div className="subStore">
        <div className="substore-card">
      <SubStore/>
        </div>
      </div>}
    </div>
  );
}
