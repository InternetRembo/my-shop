import React, {useEffect} from 'react';

import {
    Box, Button,
    Paper,
    Rating,
    Stack,
    Typography
} from "@mui/material";
import Image from 'mui-image';
import {Dispatch} from "redux";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getSelectedProductDataTC} from "../../redux/reducers/productsReducer";
import {ProductActionTypes} from "../../redux/types/productTypes";
import Preloader from "../helpers/Preloader";
import {createStyles, makeStyles} from "@mui/styles";
import {myTheme} from "../../App";


const useStyles = makeStyles(() => createStyles({

    container: {
        width:'100%',
        height:'100vh',
        marginTop:'50px',
        padding:'50px',
        paddingTop:'50px'
    },

    infoBlock:{
        backgroundColor:`${myTheme.palette.primary.light}`,
        borderRadius:'40px',
        display: 'flex',
        justifyContent:'center',
        width:'75%',
        padding: '20px'

    },

    descriptionBlock:{
        backgroundColor:`${myTheme.palette.primary.light}`,
        borderRadius:'40px',
        padding:'10px',
        marginTop :'50px',
    }
}));

const ProductInfo = () => {

    const classes = useStyles()

    const dispatch = useAppDispatch();

    let {id} = useParams()

    let idToNum = Number(id)

    useEffect(() => {

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



           if(productData.id === 0){return <Preloader/>}


    return (

         <Paper className={classes.container}>
            <Stack  direction="row"  spacing={'50px'}>

            <Stack spacing={'50px'} alignItems='center' >
                <Image
                    fit={'contain'}
                    src = {productData.image}
                    showLoading={false}
                    width={'400px'}
                    height={'400px'}
                />
                <Stack direction="row" spacing={2}>
                    <Button sx={{ width:'150px' , height:'40px'}} variant="contained">By now!</Button>
                    <Button sx={{ width:'150px' , height:'40px'}} variant="contained"> Add to basket </Button>
                </Stack>
            </Stack>

                <Box className={classes.infoBlock} >
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

             <Box className={classes.descriptionBlock}>
            <Typography variant={'h6'}  >
                {productData.description}{lorem}
            </Typography>
             </Box>

        </Paper>
    );
};

export default ProductInfo;