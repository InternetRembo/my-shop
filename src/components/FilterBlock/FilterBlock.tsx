import React from 'react';
import {Button, Paper, Theme} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";
import Flex from "../helpers/Flex";
import {myTheme} from "../../App";
import FilterList from "./FilterList";

const useStyles = makeStyles((myTheme: Theme) => createStyles({
    paper:{
      maxHeight: '800px',
      width : '340px',
      position :'fixed',
        top:'80px',
        left:'20px',
        textAlign:'center',
        padding:'5px '
    },
    button:{
        width: '400px',
        height: '90%',
    },

}));

const FilterBlock = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}  elevation={2} >
            <Flex justifyContent='space-around' alignItems='center' >
                <Button className={classes.button} size='small' color={'secondary'} variant="contained">
                    <Typography variant="h5" component="p">
                        Show filters
                    </Typography>
                </Button>
            </Flex>

            <FilterList/>


        </Paper >
    );
};

export default FilterBlock;