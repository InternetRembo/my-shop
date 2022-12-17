import React, {useEffect} from 'react';
import {
    Box,
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
import Preloader from "../helpers/Preloader";

const ProductInfo = () => {

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


          if(productData.id === 0){

           return <Preloader/>

         }

    return (
         <Paper sx={{width:'100%' , height:'100vh' , marginTop:'50px' , padding:'50px' , paddingTop:'50px'}}>

            {/*<Button variant="outlined"  sx={{width:'100px' , height:'40px' , marginBottom:'20px'}} >a</Button>*/}
            <Stack  direction="row"  spacing={'50px'}>

            <Image
                src = {productData.image}
                showLoading={false}
                width={'400px'}
                height={'400px'}
            />

                <Box sx={{  backgroundColor:'lightGrey' , borderRadius:'40px', display: 'flex'  , justifyContent:'center' , width:'75%'}} >
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

             <Box sx={{ backgroundColor:'lightGrey' , borderRadius:'40px' , padding:'10px' , marginTop : '50px' }}>
            <Typography variant={'h6'}  >
                {productData.description}{lorem}
            </Typography>
             </Box>

        </Paper>
    );
};

export default ProductInfo;