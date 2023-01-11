import React from 'react';

import {Formik, Form} from "formik";
import {Box, Button, Stack} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {createStyles, makeStyles} from "@mui/styles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {FilterFormValues} from "../../../redux/types/productTypes";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {setFilterParamsAC} from "../../../redux/reducers/productsReducer";

const useStyles = makeStyles(() => createStyles({

    form:{
        width: '300px',
        height: '90%',
    },
    wrapperBox:{
      padding : '20px 10px',
    },
    priceInput:{
        width: '240px',
    }

}));



const FilterList = () => {

    const classes = useStyles()

    const dispatch = useAppDispatch()

    const filterParams = useAppSelector(
        (state) => state.productReducer.filterParams
    );


    return (
        <Box className={classes.wrapperBox}>

            <Formik
                initialValues={filterParams}
                onSubmit={(
                    values: FilterFormValues,
                    ) => {
                    dispatch(setFilterParamsAC(values))
                    console.log(values , 'values')
                    console.log(filterParams , 'filterParams')
                }}

            >
                {({handleChange, handleSubmit})=>(

                <Form>
            <FormControl className={classes.form} >
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                <Select
                    name={'category'}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={'age'}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>

                </Select>
            </FormControl>

            <FormControl>

                <RadioGroup
                    name={'sorting'}
                    onChange={handleChange}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                >
                    <FormControlLabel value="no_sorting" control={<Radio />} label="No sorting" />
                    <FormControlLabel  value="rating" control={<Radio />} label="Rating" />
                    <FormControlLabel value="cheap_at_first" control={<Radio />} label="Cheap at first" />
                    <FormControlLabel value="expensive_at_first" control={<Radio />} label="Expensive at first" />
                </RadioGroup>

                <FormControlLabel control={<Checkbox />} label="In stock only" />

                <Typography> Price range </Typography >
                <Stack className={classes.priceInput}   spacing={1} direction={"row"}>
                    <TextField name={'priceMin'} onChange={handleChange} />
                    <TextField name={'priceMax'} onChange={handleChange}  />
                </Stack>

                <Button type="submit" variant={'contained'} sx={{marginTop:'30px'}} >Apply</Button>

            </FormControl>

                </Form>
                )}

            </Formik>

        </Box>
    );
};

export default FilterList;