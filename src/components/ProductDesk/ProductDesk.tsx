import React, {useEffect} from 'react';


import Grid from "@mui/material/Grid";
import {productApi} from "../../redux/api";
import {getProductsAC} from "../../redux/reducers/productsReducer";

import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import FilterBlock from "./FilterBlock/FilterBlock";
import Preloader from "../helpers/Preloader";
import ProductItem from "./ProductItem/ProductItem";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => createStyles({
    gridContainer:{
        padding: '0 50px',
        minHeight:'1200px',
    },
}));

const ProductDesk = () => {

    const classes = useStyles()

    const products = useAppSelector(
        (state) => state.productReducer.products
    );


    const dispatch = useAppDispatch()


    useEffect( () => {

         const fetchData = async ()=> {
             const data = await productApi.getProducts()
             console.log('data' , data)
            dispatch(getProductsAC(data))

         }

           fetchData()



    } , [])


    return (
        <>
            <FilterBlock/>

    <Grid container className={classes.gridContainer} marginTop={'50px'}   spacing={1}>
        { products.length > 1 ? products.map((el)=>{
            return (

                <Grid  key={el.id} item  xs={12} sm={6} md={4} lg={3}>
                    <ProductItem
                                 category={el.category}
                                 title={el.title}
                                 price={el.price}
                                 id={el.id}
                                 image={el.image}
                                 description={el.description}
                                 rating={el.rating}
                                   />
                </Grid>

            )

        }) : <Grid item  md={12} > <Preloader/> </Grid>
             }


    </Grid>
        </>

    );
};

export default ProductDesk;