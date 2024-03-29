import {
  FilterFormValues,
  getSelectedProductData,
  product,
  ProductActionTypes,
  productStateTypes,
  setFilterParams,
  setProductListAction,
  setSearchQuery,
  setSelectedProductId,
} from "../types/productTypes";
import { productApi } from "../api";
import { Dispatch } from "redux";

const defaultProductData = {
  category: "category",
  title: "title",
  description: "default",
  id: 0,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 1.0,
  rating: {
    count: 0,
    rate: 0,
  },
};

export enum productActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  SET_PRODUCT_ID = "SET_PRODUCT_ID",
  GET_PRODUCT_DATA = "GET_PRODUCT_DATA",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_FILTER_PARAMS = "SET_FILTER_PARAMS",
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
}

let initialState: productStateTypes = {
  products: [defaultProductData],
  selectedProductId: 0,
  selectedProductData: defaultProductData,
  totalProductCount: 0,
  filterParams: {
    category: "all",
    sorting: "no_sorting",
    priceMin: 0,
    priceMax: Infinity,
    noFakeOnly: false,
  },
  searchQuery: "",
};

export const productReducer = (
  state: productStateTypes = initialState,
  action: any
): productStateTypes => {
  switch (action.type) {
    case productActionTypes.GET_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    case productActionTypes.SET_PRODUCT_ID: {
      return { ...state, selectedProductId: action.payload };
    }
    case productActionTypes.GET_PRODUCT_DATA: {
      return { ...state, selectedProductData: action.payload };
    }
    case productActionTypes.SET_FILTER_PARAMS: {
      return { ...state, filterParams: action.payload };
    }
    case productActionTypes.SET_SEARCH_QUERY: {
      return { ...state, searchQuery: action.payload };
    }
    default:
      return state;
  }
};

export const setSelectedProductIdAC = (
  payload: number
): setSelectedProductId => ({
  payload,
  type: productActionTypes.SET_PRODUCT_ID,
});

export const getSelectedProductDataAC = (
  payload: product
): getSelectedProductData => ({
  payload,
  type: productActionTypes.GET_PRODUCT_DATA,
});

export const getProductsAC = (payload: product[]): setProductListAction => ({
  payload,
  type: productActionTypes.GET_PRODUCTS,
});

export const setFilterParamsAC = (
  payload: FilterFormValues
): setFilterParams => ({
  payload,
  type: productActionTypes.SET_FILTER_PARAMS,
});
export const setSearchQueryAC = (payload: string): setSearchQuery => ({
  payload,
  type: productActionTypes.SET_SEARCH_QUERY,
});

export const getSelectedProductDataTC =
  (id: number): any =>
  async (dispatch: Dispatch<ProductActionTypes>) => {
    let productData = await productApi.getDataByID(id);
    dispatch(getSelectedProductDataAC(productData));
  };
