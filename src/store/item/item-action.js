import { ITEM_TYPE } from "./item-type";

export const addFood = (item) => ({
    type: ITEM_TYPE.ADD_FOOD,
    payload: item,
});

export const decreaseFood = (item) => ({
    type: ITEM_TYPE.DECREASE_FOOD,
    payload: item,
})
export const removeFood = (item) => ({
    type: ITEM_TYPE.REMOVE_FOOD,
    payload: item,
})