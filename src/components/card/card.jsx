import React, {useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import  "../card/card.css";
import { useDispatch } from "react-redux";
import { addFood } from "../../store/item/item-action";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  red: {
    color: "red",
  },
});

export default function CardItem({label, image, totalWeight}){ 
  const item = {label, image, totalWeight}
  const classes = useStyles();

  const ref = useRef();
  const  dispatch = useDispatch();

  const [costColor, setCostColor] = useState(false);

  const handleClickImage = () => {
    setCostColor(!costColor);
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
          onClick={handleClickImage}
          className="cardmeedia"
          />
        <CardContent>
          <div className="flex-between" ref={ref}>
          <Typography gutterBottom variant="button" component="h2" className="title-class">
           {label}
          </Typography>
            <Typography 
           gutterBottom
           variant="button"
           component="h2" 
           className="title-class"
           className={`${costColor ? classes.red : ""}`}
           >
           $ {totalWeight.toFixed(0)} 
          </Typography>
          </div>
          {/* <Typography
          variant="body2"
          component="p"
          className="text-class">
           $ {yield} 
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions className="flex-between">
        <Link to={`/product/${label}`}>
         <Button size="small" color="primary">
        MORE INFO
        </Button>
          </Link>
        <Button 
        size="small"
         color="primary" 
         variant="outlined"
         onClick={() => dispatch(addFood(item))}
         >
         ADD TO CARD
        </Button>
      
      </CardActions>
    </Card>
  );
}

