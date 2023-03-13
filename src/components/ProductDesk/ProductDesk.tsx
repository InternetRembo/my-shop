import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { productApi } from "../../redux/api";
import { getProductsAC } from "../../redux/reducers/productsReducer";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import FilterBlock from "./FilterBlock/FilterBlock";
import Preloader from "../helpers/Preloader";
import ProductItem from "./ProductItem/ProductItem";
import { createStyles, makeStyles } from "@mui/styles";
import createFakeProducts from "../../FakeProducts";

import { product } from "../../redux/types/productTypes";
import ShoppingBasketButton from "../ShoppingBasket/ShoppingBasketButton";
import ShoppingBasketModal from "../ShoppingBasket/ShoppingBasketModal/ShoppingBasketModal";
import CustomAlert from "../Header/CustomAlert";

const useStyles = makeStyles(() =>
  createStyles({
    gridContainer: {
      padding: "0 50px",
      minHeight: "1200px",
    },
  })
);

const ProductDesk = () => {
  const classes = useStyles();

  const products = useAppSelector((state) => state.productReducer.products);
  const searchQuery = useAppSelector(
    (state) => state.productReducer.searchQuery
  );
  const filterParams = useAppSelector(
    (state) => state.productReducer.filterParams
  );

  const [showModal, setShowModal] = useState(false);

  const [openAlert, setOpenAlert] = React.useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await productApi.getProducts();
      dispatch(getProductsAC([...data, ...createFakeProducts()]));
    };
    fetchData();
  }, []);

  const productsFiltrationAndSortig = (products: product[]) => {
    let filteredAndSortedProducts = products
      .filter((el) => {
        return (
          (el.category === filterParams.category ||
            filterParams.category === "all") &&
          el.price >= filterParams.priceMin &&
          el.price <= filterParams.priceMax &&
          (el.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            searchQuery === "")
        );
      })
      .sort((a, b) => {
        switch (filterParams.sorting) {
          case "rating":
            return b.rating.rate - a.rating.rate;

          case "cheap_first":
            return a.price - b.price;

          case "expensive_first":
            return b.price - a.price;

          default:
            return 0;
        }
      });

    if (filterParams.noFakeOnly === true) {
      return filteredAndSortedProducts.filter((el) => !el.fake);
    }

    return filteredAndSortedProducts;
  };

  return (
    <>
      <ShoppingBasketButton setShowModal={setShowModal} />

      {openAlert ? <CustomAlert setOpenAlert={setOpenAlert} /> : null}

      {showModal ? <ShoppingBasketModal setShowModal={setShowModal} /> : null}

      <FilterBlock />

      <Grid
        container
        className={classes.gridContainer}
        marginTop={"50px"}
        spacing={1}
      >
        {products.length > 1 ? (
          productsFiltrationAndSortig(products).map((el: product) => {
            return (
              <Grid key={el.id} item xs={12} sm={6} md={4} lg={3}>
                <ProductItem
                  category={el.category}
                  title={el.title}
                  price={el.price}
                  id={el.id}
                  image={el.image}
                  description={el.description}
                  rating={el.rating}
                  fake={el.fake ? el.fake : false}
                  openAlert={openAlert}
                  setOpenAlert={setOpenAlert}
                />
              </Grid>
            );
          })
        ) : (
          <Grid item md={12}>
            <Preloader />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ProductDesk;
