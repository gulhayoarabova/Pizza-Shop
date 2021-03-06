
export const addItemToCard = (food, newFood) => {
   const isExist = food.find((food) => food.label === newFood.label);

   if (isExist) {
       return food.map((item) => {
           return item.label = newFood.label? {...item, count: item.count +1} : item;
    });
   }
   return [...food,{...newFood, count: 1}];
}

export const decreaseItemToCard = (food, newFood) => {
   const isExist = food.find((food) => food.label === newFood.label);

   if (isExist.count === 1) {
       return food.filter((food) => food.label !== newFood.label);
   }
   return food.map((item) =>
   item.label === newFood.label ? {...item, count: item.count - 1 } : item );
}