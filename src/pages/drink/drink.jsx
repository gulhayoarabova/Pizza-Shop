import React, {useEffect, useState,useStyles} from 'react'
import CardItem from '../../components/card/card'
import Filter from '../../components/filter/filter'
import { UseFetch } from "../../components/useFetch";
import "../../pages/Main/main.css"

import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';



const Drink = () => {
  const APP_ID = "57e2140e";
  const APP_KEY = "8296dd333e28a28ed070e8554821dfeb";
  const resData = UseFetch (
    (`https://api.edamam.com/search?q=drink&app_id=${APP_ID}&app_key=${APP_KEY}&from=6&to=12`)
    );

    const label = resData.more && resData.hits.map((item) => item.recipe);


        // const classes = useStyles();
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

      {/* <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
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
               <div className="dessert-salads-wrapper-div">
                   <div className="dessert">
                       <fieldset className="second-fieldset">
                           <legend className="dessert-legend"> Desserts
                       </legend>
                       <h3 className="dessert-heading-three"> <span className="dessert-black">|</span> Chocolate cake</h3>
                       <h4 className="dessert-heading-four">Rich chocolate brownie, broken into pieces; chocolate “sand” made with tapioca maltodextrin</h4>
                       <h3 className="dessert-heading-three"><span className="dessert-black">|</span>  Whipped cream</h3>
                       <h4 className="dessert-heading-four"> Crème fraiche – shaped into a quenelle  with tapioca maltodextrin</h4>
                       <h3 className="dessert-heading-three"><span className="dessert-black">|</span>  Cherries soaked in kirsch</h3>
                       <h4 className="dessert-heading-four"> Candied cherries and cherry–kirsch sorbet black forest cake (chocolate, cherries, and whipped cream)</h4>
                       </fieldset>
                   </div>

                     <div className="dessert">
                       <fieldset className="second-fieldset">
                           <legend className="dessert-legend"> Desserts
                       </legend>
                       <h3 className="dessert-heading-three"> <span className="dessert-black">|</span> Chocolate cake</h3>
                       <h4 className="dessert-heading-four">Rich chocolate brownie, broken into pieces; chocolate “sand” made with tapioca maltodextrin</h4>
                       <h3 className="dessert-heading-three"><span className="dessert-black">|</span>  Whipped cream</h3>
                       <h4 className="dessert-heading-four"> Crème fraiche – shaped into a quenelle  with tapioca maltodextrin</h4>
                       <h3 className="dessert-heading-three"><span className="dessert-black">|</span>  Cherries soaked in kirsch</h3>
                       <h4 className="dessert-heading-four"> Candied cherries and cherry–kirsch sorbet black forest cake (chocolate, cherries, and whipped cream)</h4>
                       </fieldset>
                   </div>
                   
               </div>
           </div>
            </div>
               <div className="copyright">
                 <h2>© 2021 Copyright</h2>   
               </div>
        </div>
    )
}

export default Drink;
