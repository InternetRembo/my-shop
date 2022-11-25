import React from 'react';
import ProductItem from "./ProductItem/ProductItem";
import Grid from "@mui/material/Grid";

const ProductDesk = () => {
    return (
        // <Box sx={{backgroundColor:'orange' , marginTop:'60px' , height:'1200px'}}>
        //     <Flex sx={{}}>
        //         <ProductItem/>
        //     </Flex>
        // </Box>

    <Grid container  sx={{ padding: '20px auto' , marginTop:'60px' , minHeight:'1200px'}} spacing={2}>
        <Grid item  xs={12} md={4}>
            <ProductItem/>
        </Grid>
        <Grid item xs={12} md={4}>
            <ProductItem/>
        </Grid>
        <Grid item xs={12} md={4}>
            <ProductItem/>
        </Grid>
        <Grid item xs={12} md={4}>
            <ProductItem/>
        </Grid>
        <Grid item xs={12} md={4}>
            <ProductItem/>
        </Grid>
        <Grid item xs={12} md={4}>
            <ProductItem/>
        </Grid>
        <Grid item xs={12} md={4}>
            <ProductItem/>
        </Grid>
        <Grid item xs={12} md={4}>
            <ProductItem/>
        </Grid>
        <Grid item xs={12} md={4}>
            <ProductItem/>
        </Grid>
        <Grid item xs={12} md={4}>
            <ProductItem/>
        </Grid>

    </Grid>

    );
};

export default ProductDesk;