import {
    getSelectedProductData,
    product, ProductActionTypes,
    productStateTypes,
    setProductListAction,
    setSelectedProductId
} from "../types/productTypes";
import {productApi} from "../api";
import {Dispatch} from "redux";



export enum productActionTypes {

    GET_PRODUCTS = "GET_PRODUCTS",
    SET_PRODUCT_ID = "SET_PRODUCT_ID",
    GET_PRODUCT_DATA = "GET_PRODUCT_DATA"
}

const defaultProductData = {
    category: "category",
    title:'title',
    description: "default",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 1.0,
    rating: {
        count: 0,
        rate: 0
    },

}

let initialState: productStateTypes = {
    products: [defaultProductData],
    selectedProductId : 0 ,
    selectedProductData: defaultProductData,
}

export  const productReducer = (state :productStateTypes = initialState , action: any):productStateTypes => {
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
        default:
            return state;
    }
}

export const setSelectedProductIdAC = (payload: number): setSelectedProductId => ({
    payload,
    type: productActionTypes.SET_PRODUCT_ID,
});

export const getSelectedProductDataAC = (payload: product): getSelectedProductData => ({
    payload,
    type: productActionTypes.GET_PRODUCT_DATA,
});

export const getProductsAC = (payload: product[]): setProductListAction => ({
    payload,
    type: productActionTypes.GET_PRODUCTS,
});



// export const GetArticlesParamsTC = (id) => async (dispatch) => {
//     let articlesParams = await MainAPI.paramsById(id);
//     dispatch(GetArticlesParamsAC(articlesParams));
// };

export const getSelectedProductDataTC = (id:number) : any => async (dispatch:Dispatch<ProductActionTypes>) => {
    let productData = await productApi.getDataByID(id);
    dispatch(getSelectedProductDataAC(productData));
}


