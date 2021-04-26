import React from 'react'
import "../Product/product.css"

import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';



const Product = ({data, props}) => {
    const {match, history} = props;
    console.log(match, history)
    const filterData = data && data.filter((d) => d.label === match.params.id);
    const handleGoBack = () => {
       history.goBack();
    }
    return (
        <div className="wrapper">
          { filterData && filterData.map((item) => {
              return (
              <div key={item.label}>
                  {/* <p> {item.text} </p> */}
                  <div className="card-go-back-x">
                          <button 
                          className="btn-card"
                          variant="default"
                          color="warning"
                          onClick={handleGoBack}
                          >
                            Go Back
                          </button>
                           <IconButton  aria-label="show 11 new notifications" color="inherit" variant="outlined">
                             <DeleteForeverRoundedIcon />
                          </IconButton>
                      </div>
                  <div className="card-pizza-wrapper">
                      <div className="card-of-pizza">
                            <div className="card-of-pizza-image">
                          <img src={item.image}alt="pizza-left-image" className="pizza-left-image"/>
                    <div className="pizza-card-buttons">
                       <button 
                       className="pizza-card-btn-one"> 
                       <span className="span-txt"> Add</span>
                       </button>
                       <div> 0 </div>
                       <button 
                       className="pizza-card-btn-one">  
                       <span className="span-txt"> Remove</span>

                       </button>
                    </div>
                          </div>

                          <div className="txt-pizza-right">
                          {/* <h2> {item.label} </h2> */}
                          <p> {item.calories} </p>
                          <button className="pizza-card-btn-one two">
                             $ Purchase pizza $
                          </button>
                          </div>

                    

                      </div>

                  </div>
              </div>
          )
          })}
          
           {/* <h1 onClick={handleGoBack}>{match.params.id}</h1> */}
        </div>
    )
}

export default Product;
