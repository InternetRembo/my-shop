import {productStateTypes} from "../types/productTypes";


export enum productActionTypes {

    SET_TABLE = "SET_TABLE",
}

let initialState: productStateTypes = {
    name: 'a'
};

export  const productReducer = (state :productStateTypes = initialState , action: ) => {

}