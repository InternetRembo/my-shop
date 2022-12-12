import React, {useState} from 'react';
import {Button, Paper} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";
import Flex from "../../helpers/Flex";
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
        width: '400px',
        height: '90%',
    },

}));

const FilterBlock = () => {

    const classes = useStyles()

    const [showFilters , setShowFilters] = useState(true)

    return (
        <Paper className={classes.paper}  elevation={2} >
            <Flex justifyContent='space-around' alignItems='center' >
                <Button onClick={()=>{setShowFilters(!showFilters)}} className={classes.button} size='small' color={'secondary'} variant="contained">

                    <Typography variant="h5" component="p">
                        { showFilters? 'Hide filters' : 'Show filters'}
                    </Typography>
                </Button>
            </Flex>

            { showFilters?  <FilterList/> : <div/> }



        </Paper >
    );
};

export default FilterBlock;