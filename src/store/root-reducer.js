import { combineReducers } from "redux";
import  cardData  from "../store/item/item-reducer";
export  const rootReducer = combineReducers({
    cardData: cardData,
})