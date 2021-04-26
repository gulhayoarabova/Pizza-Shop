import './App.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

// import { CardItem } from "../src/components/card/card";
import { useEffect } from "react";
import { useState } from "react";
import  Main  from "./pages/Main/main";
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import Product from './components/Product/product';
import { CardData } from "../src/service/Api";
import Filtered from './pages/filtered/filtered';
import Store from './pages/Store/store';
import Example from './components/example';

import { makeStyles } from '@material-ui/core/styles';
import { UseFetch } from "../src/components/useFetch";
import Pizza from './pages/pizza/pizza';
import Drink from './pages/drink/drink';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


function App() {
  
  
  // const APP_ID = "57e2140e";
  // const APP_KEY = "8296dd333e28a28ed070e8554821dfeb";
  // const resData = UseFetch (
  //   (`https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&from=6&to=12`)
  //   );
    // const label = resData.more && resData.hits.map((item) => item.recipe);

  //   const classes = useStyles();
  //  const [open, setOpen] = useState(false);
  //  const handleClose = () => {
  //    setOpen(false);
   
  //  const loaderFunction = () => {
  //     return label ? setOpen(false) : setOpen(true);
  // }

  // useEffect(() => {
  //   loaderFunction()
  // }, [label])

  //     console.log(label);
  return (
    <div className="App">
            {/* <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop> */}

      <Header/>
      {/* <Example/>  */}
      <Switch>

      <Route path="/" exact render={() => <Pizza/>} />
      <Route path="/drink" exact render={() => <Drink/>} />


    <Route path="/" exact render = {() => <Main />} />
    <Route path="/product/:id" render = {(props) => {
      return <Product  {...props}  />
    }} />

     {/* <Route
      path="/product/:id"
      render={(props) => {
       return <Product  props={props} label={label}  />;
      }}
      /> */}
      <Route
      path="/filtered/:id"
      render={(props) => {
       return <Filtered {...props} />;
      }}
      />

      <Route path="/store" render={(props) => {
        return <Store {...props} />;
      }}component={Store}/>
      </Switch>
      {/* <Footer /> */}
     
    </div>
  );
// }
};
export default App;


// import React from 'react'
// // import './App.css';
// import  APPlication  from "./components/Hometask/APPlication";
// import { BrowserRouter as Router} from "react-router-dom";
// import  Create  from "./materialUI/pages/Create";
// import { Notes}  from "./materialUI/pages/Notes";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import { purple } from "@material-ui/core/colors";


// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#f23f4f"
//     },
//     secondary: purple
//   },
//   typography: {
//     fontFamily: "Quicksand",
//     fontWeightLight:400,
//     fontWeightRegular:500,
//     fontWeightMedium:600,
//     fontWeightBold:700
//   }
// })


// function App() {
//   return (
   
//   <Router>
//   <Switch>
//     <Route exact path="/" >
//      <Notes />
//     </Route>
//     <Route path="/create">
//       <Create/>
//     </Route>
//     <Route>
//       <APPlication />
//     </Route>
//   </Switch>
// </Router>
  
//   )
// }

// export default App;
