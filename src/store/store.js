import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../store/root-reducer";
import Logger from "redux-logger";

const middleware = [Logger]

 export const store = createStore(rootReducer, applyMiddleware(...middleware));
 
