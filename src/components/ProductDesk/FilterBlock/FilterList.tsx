import React from 'react';

import {Box, Stack} from "@mui/material";
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

const useStyles = makeStyles(() => createStyles({

    form:{
        width: '300px',
        height: '90%',
    },
    wrapperBox:{
      padding : '20px 10px'
    },

}));

const FilterList = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapperBox}>

            <FormControl className={classes.form} >
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={'age'}
                    label="Age"
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
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="no_sorting" control={<Radio />} label="No sorting" />
                    <FormControlLabel value="cheap_at_first" control={<Radio />} label="Cheap at first" />
                    <FormControlLabel value="expensive_at_first" control={<Radio />} label="Expensive at first" />
                </RadioGroup>

                <FormControlLabel control={<Checkbox />} label="In stock only" />

                <Typography> Price range </Typography >
                <Stack direction={"row"}>
                    <TextField/>
                    <TextField/>
                </Stack>

            </FormControl>


        </Box>
    );
};

export default FilterList;