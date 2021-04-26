import { ITEM_TYPE } from "../item/item-type";
import { addItemToCard, decreaseItemToCard } from "../item/item-utils";
const initialState = {
    food: []
};

 const cardData = (state = initialState, action) => {
     const payload = action.payload;
    switch(action.type) {
       case ITEM_TYPE.ADD_FOOD:
       return {
           ...state,
           food: addItemToCard(state.food, payload),
        };
         case ITEM_TYPE.DECREASE_FOOD:
       return {
           ...state,
           food: decreaseItemToCard(state.food, payload),
        };
         case ITEM_TYPE.REMOVE_FOOD:
       return {
           ...state,
           food: [],
        };
                default:
                     return state;
    };
};
export default cardData;