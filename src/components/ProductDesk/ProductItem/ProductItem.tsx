import React from 'react';

import {Box, Card, CardContent, CardMedia, Rating, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {createStyles, makeStyles} from "@mui/styles";
import {useNavigate} from "react-router-dom";



const useStyles = makeStyles(() => createStyles({

    card: {
        padding:'15px 20px' ,
        margin:'0 auto' ,
        width:'250px',
        height:'400px',
        '&:hover': {
           transform : 'scale(1.05)'
        },
    },

    pricePill:{
        width:'80px' ,
        backgroundColor:'yellowgreen',
        borderRadius:'80px',
        textAlign:'center'
    },

    button:{
        width:'100px',
    }
}));

type productItemProps = {
    title: string,
    id:number,
    image:string,
    price:number,
    category:string,
    description:string,
    rating: {
        rate: number,
        count:number
    }
}

const ProductItem = ({title, image, price, id ,  rating }:productItemProps) => {

    const classes = useStyles()

    const navigate = useNavigate()

    const shortTitle = ()=>{

        if(title.length >= 40){
           return title.split(' ' , 5).join(' ') + '...'
        }

        return title

    }

    return (

        <Card onClick={()=>{

            navigate(`/product/${id}`)

        }}
              elevation={7}  className={classes.card} >
            <CardMedia
                sx={{  borderRadius:'10px' , objectFit: "contain" }}
                component="img"
                height="60%"
                image={image}
                alt="product"
            />
            <CardContent >


                <Stack sx={{ textAlign:'center'}} spacing={1}>

               <div style={{height:'100px'}}>
                   <Typography variant='h6' >
                       {shortTitle()}
                   </Typography>
               </div>

                    <Stack direction='row'  alignItems='center' justifyContent='space-around'>
                        <Rating name="read-only" value={rating.rate} readOnly />
                        <Box className={classes.pricePill}  >
                            <Typography variant='h6' >
                                {price}$
                            </Typography>
                        </Box>
                    </Stack>


                </Stack>
            </CardContent>
        </Card>
    );
};

export default ProductItem;