
import { combineReducers } from "redux";
import auth from './authReducer'
import loader from './loaderReducer'
import products from './products'
import categories from './categoryReducer'
import cart from './cartReducer'
export default combineReducers({
    auth,
    loader,
    products,
    categories,
    cart
})