import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productLikeReducer } from "./productLikeReducer";


export const rootReducer = combineReducers({
    productsLikeState:productLikeReducer,
    productsInCart:cartReducer,
})