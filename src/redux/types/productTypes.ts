import { productActionTypes } from "../reducers/productsReducer";

export type product = {
  category: string;
  description: string;
  title: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  fake?: boolean;
};

export type FilterFormValues = {
  category: string;
  sorting: string;
  priceMin: number;
  priceMax: number;
  noFakeOnly: boolean;
};

export type productStateTypes = {
  products: product[];
  selectedProductId: number;
  selectedProductData: product;
  totalProductCount: number;
  filterParams: FilterFormValues;
  searchQuery: string;
};

export type setProductListAction = {
  type: productActionTypes.GET_PRODUCTS;
  payload: product[];
};

export type setSelectedProductId = {
  type: productActionTypes.SET_PRODUCT_ID;
  payload: number;
};

export type getSelectedProductData = {
  type: productActionTypes.GET_PRODUCT_DATA;
  payload: product;
};
export type setFilterParams = {
  type: productActionTypes.SET_FILTER_PARAMS;
  payload: FilterFormValues;
};
export type setSearchQuery = {
  type: productActionTypes.SET_SEARCH_QUERY;
  payload: string;
};

export type ProductActionTypes =
  | setProductListAction
  | setSelectedProductId
  | getSelectedProductData
  | setFilterParams
  | setSearchQuery;

export type LocationActions = setProductListAction;
