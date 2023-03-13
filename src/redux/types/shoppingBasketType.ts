import { shoppingActionTypes } from "../reducers/shoppingReducer";

export type productInBasket = {
  title: string;
  id: number;
  image: string;
  price: number;
};

export type shoppingBasketStateTypes = {
  productsInBasket: productInBasket[];
};

export type addProductInBasket = {
  type: shoppingActionTypes.ADD_PRODUCT_IN_BASKET;
  payload: productInBasket[];
};

export type removeProductFromTheBasket = {
  type: shoppingActionTypes.REMOVE_PRODUCT_FROM_THE_BASKET;
  payload: productInBasket[];
};

export type shoppingBasketActionTypes =
  | addProductInBasket
  | removeProductFromTheBasket;

export type LocationActions = addProductInBasket;
