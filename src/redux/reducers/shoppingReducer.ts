import {
  productInBasket,
  addProductInBasket,
  shoppingBasketStateTypes,
  removeProductFromTheBasket,
} from "../types/shoppingBasketType";

export enum shoppingActionTypes {
  ADD_PRODUCT_IN_BASKET = "ADD_PRODUCT_IN_BASKET",
  REMOVE_PRODUCT_FROM_THE_BASKET = "REMOVE_PRODUCT_FROM_THE_BASKET",
}

let initialState: shoppingBasketStateTypes = {
  productsInBasket: [],
};

export const shoppingReducer = (
  state: shoppingBasketStateTypes = initialState,
  action: any
): shoppingBasketStateTypes => {
  switch (action.type) {
    case shoppingActionTypes.ADD_PRODUCT_IN_BASKET: {
      return { ...state, productsInBasket: action.payload };
    }
    case shoppingActionTypes.REMOVE_PRODUCT_FROM_THE_BASKET: {
      return { ...state, productsInBasket: action.payload };
    }

    default:
      return state;
  }
};

export const addProductInBasketAC = (
  payload: productInBasket[]
): addProductInBasket => ({
  payload,
  type: shoppingActionTypes.ADD_PRODUCT_IN_BASKET,
});
export const removeProductFromTheBasketAC = (
  payload: productInBasket[]
): removeProductFromTheBasket => ({
  payload,
  type: shoppingActionTypes.REMOVE_PRODUCT_FROM_THE_BASKET,
});
