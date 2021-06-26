import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productLikeReducer } from "./productLikeReducer";
import { countReducer } from "./countReducer";


export const rootReducer = combineReducers({
    productsLikeState:productLikeReducer,
    productsInCart:cartReducer,
    productCount:countReducer,
})