import React, {useEffect, useState} from 'react';

import {Button, Paper, Stack} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";

import FilterList from "./FilterList";


const useStyles = makeStyles(() => createStyles({
    paper:{
      maxHeight: '800px',
      width : '340px',
      position :'fixed',
        top:'80px',
        left:'20px',
        textAlign:'center',
        padding:'5px ',
        margin : '0 50px 0 0'


    },
    button:{
        width: '100%',
        height: '90%',
    },

}));

const FilterBlock = () => {

    useEffect(()=>{} , [])

    const classes = useStyles()

    const [showFilters , setShowFilters] = useState(true)


    return (
        <Paper className={classes.paper}  elevation={2} >
            <Stack justifyContent='space-around' alignItems='center' >
                <Button onClick={()=>{setShowFilters(!showFilters)}} className={classes.button} size='small' color={'primary'} variant="contained">

                    <Typography variant="h5" component="p">
                        { showFilters? 'Hide filters' : 'Show filters'}
                    </Typography>
                </Button>
            </Stack>

            { showFilters?  <FilterList/> : <div/> }



        </Paper >
    );
};

export default FilterBlock;