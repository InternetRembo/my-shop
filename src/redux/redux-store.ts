import { combineReducers, createStore, applyMiddleware } from "redux";
import { productReducer } from "./reducers/productsReducer";
import thunkMiddleware from "redux-thunk";
import { shoppingReducer } from "./reducers/shoppingReducer";

let reducers = combineReducers({
  productReducer: productReducer,
  shoppingReducer: shoppingReducer,
});
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
