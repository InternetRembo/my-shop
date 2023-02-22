import axios from "axios";

export const productApi = {
  getProducts() {
    return axios
      .get("https://fakestoreapi.com/products")
      .then((response) => response.data);
  },

  getDataByID(id: number) {
    return axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.data);
  },

  getCategories() {
    return axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => response.data);
  },
};
