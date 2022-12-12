import React, {useEffect} from 'react';
import ProductItem from "./ProductItem/ProductItem";
import Grid from "@mui/material/Grid";
import {productApi} from "../../redux/api";
import {getProductsAC} from "../../redux/reducers/productsReducer";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import FilterBlock from "./FilterBlock/FilterBlock";

const ProductDesk = () => {

    const products = useAppSelector(
        (state) => state.productReducer.products
    );


    const dispatch = useAppDispatch()


    useEffect( () => {

         const fetchData = async ()=> {
             const data = await productApi.getProducts()
             console.log('data' , data)
            dispatch(getProductsAC(data))
             // return
         }

           fetchData()



    } , [])

    console.log('products : ' , products)

    return (
        <>
            <FilterBlock/>
    <Grid container  sx={{ padding: '0 50px' , marginTop:'60px' , minHeight:'1200px'}} spacing={1}>
        {products.map((el)=>{
            return (



                <Grid item  xs={12} sm={6} md={4} lg={3}>
                    <ProductItem category={el.category}
                                 title={el.title}
                                 price={el.price}
                                 image={el.image}
                                 description={el.description}
                                 rating={el.rating}
                                   />
                </Grid>

            )

        })}


    </Grid>
        </>

    );
};

export default ProductDesk;