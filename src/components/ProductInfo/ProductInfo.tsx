import React, {useEffect} from 'react';
import {
    Box, Button,
    Paper,
    Rating,
    Stack,
    Typography
} from "@mui/material";
import Image from 'mui-image';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {useParams} from "react-router-dom";
import {getSelectedProductDataTC} from "../../redux/reducers/productsReducer";
import {ProductActionTypes} from "../../redux/types/productTypes";
import {Dispatch} from "redux";

const ProductInfo = () => {

    const dispatch = useAppDispatch();

    let {id} = useParams()

    let idToNum = Number(id)

    useEffect(() => {

        console.log('id' , id)

        const fetchData = async (dispatch:Dispatch<ProductActionTypes>) => {
            return await dispatch(getSelectedProductDataTC(idToNum));

        };
        fetchData(dispatch);
    }, []);

         const productData =  useAppSelector((state) => state.productReducer.selectedProductData)

         const lorem = 'Since the description is too short, I will add this text here and duplicate it several times.' +
             'Since the description is too short, I will add this text here and duplicate it several times. Since the description is too short, ' +
             'I will add this text here and duplicate it several times. Since the description is too short, I will add this text here and duplicate it several times. ' +
             'Since the description is too short, I will add this text here and duplicate it several times. Since the description is too short,' +
             ' I will add this text here and duplicate it several times.'

    return (
        <Paper sx={{width:'100%' , height:'100vh' , padding:'50px'}}>

            <Button>a</Button>
            <Stack direction="row"  spacing={'50px'}>

            <Image
                src = {productData.image}
                width={'400px'}
                height={'400px'}
            />

                <Box sx={{display: 'flex'  , justifyContent:'center' , width:'75%'}} >
                <Stack alignItems={'start'} justifyContent='space-around' >
                    <Typography variant={'h3'}> {productData.title} </Typography>

                    <Typography variant={'h4'} > Price : {productData.price}$</Typography>

                    <Typography variant={'h4'} > Category : {productData.category}</Typography>

                    <Stack spacing={1} alignItems='center' direction="row">
                        <Typography variant={'h4'} > Rating : </Typography>
                        <Rating size="large" name="read-only" value={productData.rating.rate} readOnly />
                        <Typography variant={'h4'} >  ({productData.rating.count} users rated) </Typography>
                    </Stack>
                </Stack>
                </Box>




            </Stack>

            <Typography variant={'h6'} sx={{marginTop : '80px'}} >
                {productData.description}{lorem}
            </Typography>

        </Paper>
    );
};

export default ProductInfo;