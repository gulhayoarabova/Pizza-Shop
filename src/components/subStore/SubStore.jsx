import React from 'react'
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import "../subStore/subStore.css";
import { UseFetch } from '../useFetch';
import { addFood, decreaseFood} from '../../store/item/item-action';
// import {decreaseItemToCard } from "../../store/item/item-reducer";

const SubStore = () => {
    const dispatch =  useDispatch();
    const {food} = useSelector(state => state.cardData)
    return (
        <div>
            <ul>
                <img src="https://www.upmenu.com/blog/wp-content/themes/theme/images/logo.png" className="pizza-card"/>
                {food.length ? food.map((item, index) => {
                   return (
                   <li className="subStore-card-items" key={index}>
                        <img src={item.image}className="subStore-img"/>
                        {/* <img src="https://img.icons8.com/ios-filled/2x/moleskine-icon.png" className=""/> */}
                       <div className="subStore-item-title"> {item.label} </div> {""}

                       {/* <div className="substore-cost-wrapper"> */}
                      
                       {/* </div> */}
                       <div className="subStore-buttons">
                       <button 
                       className="substore-btn-one"
                       onClick={() => dispatch(addFood({...item}))}
                       > 
                       <span className="span-txt"> Add</span>
                       </button>
                       {/* <p className="substore-cost"> {item.totalWeight.toFixed(0)}   </p> */}
                       <span>  {item.count} </span>
                       <button 
                       className="substore-btn-two"
                       onClick={() => dispatch(decreaseFood({...item}))}
                       >  
                       <span className="span-txt"> Remove</span>

                       </button>
                       </div> 
                       {/* <div> {storeItem} </div> */}

                    </li> 
                    );
                }) : <div> You haven't ordered pizza yet</div>}
            </ul>
            <div className="go-store-wrapper">
                <button  className="go-to-store" >
                    Go to the store
                </button>
            </div>
        </div>
    )
}

export default SubStore;
