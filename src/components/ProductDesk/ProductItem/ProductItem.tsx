import React from 'react';
import Flex from "../../helpers/Flex";
import {Box, Button, Card, CardContent, CardMedia, Grid, Rating, Stack, Theme} from "@mui/material";
import Typography from "@mui/material/Typography";
import {createStyles, makeStyles} from "@mui/styles";
import {myTheme} from "../../../App";


const useStyles = makeStyles((myTheme: Theme) => createStyles({
    card: {
        padding:'15px 20px' ,
        margin:'0 auto' ,
        width:'250px',
        height:'350px',
    },
    pricePill:{
        width:'50px' ,
        backgroundColor:'yellowgreen',
        borderRadius:'100px',
        textAlign:'center'
    },
    button:{
        width:'100px',
    }

}));

const ProductItem = () => {

    const classes = useStyles()

    return (

        <Card elevation={7}  className={classes.card} >
            <CardMedia
                sx={{borderRadius:'10px'}}
                component="img"
                height="60%"
                image="https://agropolit.com/media/dossier/o-o-w-crop/00/00/4/lyashko-15299-16404.jpg"
                alt="product"
            />
            <CardContent >


                <Stack sx={{textAlign:'center'}} spacing={1}>

                <Typography variant='h5' >
                        Title
                </Typography>

                    <Flex  alignItems='center' justifyContent='space-around'>
                        <Rating name="read-only" value={3} readOnly />
                        <Box className={classes.pricePill}  >
                            <Typography variant='h6' >
                                73$
                            </Typography>
                        </Box>
                    </Flex>

                    <Flex   alignItems='center' justifyContent='space-between'>
                        <Button color={"secondary"} className={classes.button} variant="contained">Contained</Button>
                        <Button color={"secondary"} className={classes.button} variant="contained">Contained</Button>

                    </Flex>


                </Stack>
            </CardContent>
        </Card>
    );
};

export default ProductItem;