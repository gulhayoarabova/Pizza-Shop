import React, {useEffect, useState, useStyles} from 'react'
import CardItem from '../../components/card/card'
import Filter from '../../components/filter/filter'
import { UseFetch } from "../../components/useFetch";
import "../../pages/Main/main.css"
import { makeStyles } from '@material-ui/core/styles';


import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }));



const Pizza = () => {
  const APP_ID = "57e2140e";
  const APP_KEY = "8296dd333e28a28ed070e8554821dfeb";
  const resData = UseFetch (
    (`https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&from=6&to=12`)
    );

    const label = resData.more && resData.hits.map((item) => item.recipe);


//    const classes = useStyles();
   const [open, setOpen] = useState(false);
//    const handleClose = () => {
//      setOpen(false);

       const loaderFunction = () => {
      return label ? setOpen(false) : setOpen(true);
  }
  
  useEffect(() => {
    loaderFunction()
  }, [label]);

 return (
        <div className="mainPage">
{/* 
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop> */}

            <Filter/>
            <div className="flexable-div">
           <div className="cards">
               {label && label.map((c,i ) => {
                   return  <CardItem key={i} {...c}/>
               })}
           </div>
           <div className="second-page">
               <div className="dinner-menu">
               <h1 className="right-bordered-heading-one"> Upcoming </h1>
               <h1>Dinner Menu</h1>
               </div>
               <fieldset className="fieldset">
                   <legend className="legend">
                   Appetizer
                   </legend>
                   <div className="wrapper-div-one">
                       <h3 className="title">ChEESE PLATE</h3>
                       <h4>Assorted asrisan cheeses,fig jam,fresh breads 10</h4>
                       <br/>
                        <h3 className="title">ChEESE PLATE</h3>
                       <h4>Assorted asrisan cheeses,fig jam,fresh breads 10</h4>
                       <br/>
                        <h3 className="title">ChEESE PLATE</h3>
                       <h4>Assorted asrisan cheeses,fig jam,fresh breads 10</h4>
                       <br/>
                   </div>
                   <div
                   className="wrapper-div-two"
                   >
                        <h3 className="title">ChEESE PLATE</h3>
                       <h4>Assorted asrisan cheeses,fig jam,fresh breads 10</h4>
                       <br/>
                        <h3 className="title">ChEESE PLATE</h3>
                       <h4>Assorted asrisan cheeses,fig jam,fresh breads 10</h4>
                       <br/>
                        <h3 className="title">CHEESE PLATE</h3>
                       <h4>Assorted asrisan cheeses,fig jam,fresh breads 10</h4>
                       <br/>
                   </div>
               </fieldset>
              
           </div>
            </div>
               <div className="copyright">
                 <h2>© 2021 Copyright</h2>   
               </div>
        </div>
    )
}

export default Pizza;
