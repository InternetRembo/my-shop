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
  currentPage: number;
  totalProductCount: number;
  filterParams: FilterFormValues;
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

export type setNewCurrentPage = {
  type: productActionTypes.SET_CURRENT_PAGE;
  payload: number;
};
export type setFilterParams = {
  type: productActionTypes.SET_FILTER_PARAMS;
  payload: FilterFormValues;
};

export type ProductActionTypes =
  | setProductListAction
  | setSelectedProductId
  | getSelectedProductData
  | setNewCurrentPage
  | setFilterParams;

export type LocationActions = setProductListAction;
