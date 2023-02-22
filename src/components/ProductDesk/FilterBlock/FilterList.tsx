import React, { useEffect, useState } from "react";

import { Formik, Form } from "formik";
import { Box, Button, Stack } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { createStyles, makeStyles } from "@mui/styles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FilterFormValues } from "../../../redux/types/productTypes";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setFilterParamsAC } from "../../../redux/reducers/productsReducer";
import { productApi } from "../../../redux/api";

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      width: "300px",
      height: "90%",
    },
    wrapperBox: {
      padding: "20px 10px",
    },
    priceInput: {
      width: "240px",
    },
  })
);

const FilterList = () => {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const filterParams = useAppSelector(
    (state) => state.productReducer.filterParams
  );

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [minPriceValue, setMinPriceValue] = useState("");
  const [maxPriceValue, setMaxPriceValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      return await productApi.getCategories();
    };
    fetchData().then((value) => {
      setCategories(value);
    });
  }, []);

  const firstLetterToUpperCase = (str: string) => {
    return str
      .split("")
      .map((l, i) => {
        if (i === 0) {
          return l.toUpperCase();
        }
        return l;
      })
      .join("");
  };

  const setPriceValue = (value: string, setValue: any) => {
    const regExp = /^[0-9\b]+$/;
    if (value === "" || regExp.test(value)) {
      setValue(value);
    }
  };

  return (
    <Box className={classes.wrapperBox}>
      <Formik
        initialValues={filterParams}
        onSubmit={(values: FilterFormValues) => {
          dispatch(setFilterParamsAC(values));
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form>
            <FormControl className={classes.form}>
              <InputLabel id="demo-simple-select-helper-label">
                Category
              </InputLabel>
              <Select
                name={"category"}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectedCategory}
                label="Category"
                onChange={(e) => {
                  handleChange(e);
                  setSelectedCategory(e.target.value);
                }}
              >
                <MenuItem value={"all"}>All</MenuItem>
                {categories.map((el) => (
                  <MenuItem key={el} value={el}>
                    {firstLetterToUpperCase(el)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <RadioGroup
                name={"sorting"}
                onChange={handleChange}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
              >
                <FormControlLabel
                  value="no_sorting"
                  control={<Radio />}
                  label="No sorting"
                />
                <FormControlLabel
                  value="rating"
                  control={<Radio />}
                  label="Rating"
                />
                <FormControlLabel
                  value="cheap_first"
                  control={<Radio />}
                  label="Cheap first"
                />
                <FormControlLabel
                  value="expensive_first"
                  control={<Radio />}
                  label="Expensive  first"
                />
              </RadioGroup>

              <FormControlLabel
                control={<Checkbox />}
                value={false}
                onChange={handleChange}
                name={"noFakeOnly"}
                label="No fake only"
              />

              <Typography> Price range </Typography>
              <Stack
                className={classes.priceInput}
                spacing={1}
                direction={"row"}
              >
                <TextField
                  value={minPriceValue}
                  name={"priceMin"}
                  onChange={(e) => {
                    handleChange(e);
                    setPriceValue(e.target.value, setMinPriceValue);
                  }}
                />
                <TextField
                  value={maxPriceValue}
                  name={"priceMax"}
                  onChange={(e) => {
                    handleChange(e);
                    setPriceValue(e.target.value, setMaxPriceValue);
                  }}
                />
              </Stack>

              <Button
                type="submit"
                variant={"contained"}
                sx={{ marginTop: "30px" }}
              >
                Apply
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FilterList;
