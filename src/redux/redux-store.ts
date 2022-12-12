import { combineReducers, createStore , applyMiddleware } from 'redux';
import {productReducer} from "./reducers/productsReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    productReducer: productReducer,

});
export const store = createStore(reducers ,  applyMiddleware(thunkMiddleware));


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;