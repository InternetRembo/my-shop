import { combineReducers, createStore } from 'redux';
import {productReducer} from "./reducers/productsReducer";

let reducers = combineReducers({
    productReducer: productReducer,

});
export const store = createStore(reducers);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;