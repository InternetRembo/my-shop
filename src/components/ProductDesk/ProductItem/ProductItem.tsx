import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
} from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addProductInBasketAC } from "../../../redux/reducers/shoppingReducer";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      padding: "15px 10px",
      margin: "0 auto",
      width: "300px",
      height: "400px",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    fake: {
      opacity: "70%",
    },

    button: {
      width: "100px",
      height: "40px",
      borderRadius: "80px",
      textAlign: "center",
    },
  })
);

type productItemProps = {
  title: string;
  id: number;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  fake?: boolean;
  openAlert: any;
  setOpenAlert: any;
};

const ProductItem = ({
  title,
  image,
  price,
  id,
  rating,
  fake,
  setOpenAlert,
}: productItemProps) => {
  const classes = useStyles();

  const [buttonHover, setButtonHover] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const productsInBasket = useAppSelector(
    (state) => state.shoppingReducer.productsInBasket
  );

  const addProductInBasketHandler = () => {
    const currentProduct = {
      title: title,
      id: id,
      image: image,
      price: price,
    };

    dispatch(addProductInBasketAC([...productsInBasket, currentProduct]));
  };

  const shortTitle = () => {
    if (title.length >= 40) {
      return title.split(" ", 5).join(" ") + "...";
    }
    return title;
  };

  return (
    <Card
      onClick={() => {
        if (!fake) {
          navigate(`/product/${id}`);
        }
      }}
      elevation={7}
      className={fake ? `${classes.card} ${classes.fake}` : classes.card}
    >
      <CardMedia
        sx={{ borderRadius: "10px", objectFit: "contain" }}
        component="img"
        height="60%"
        image={image}
        alt="product"
      />
      <CardContent>
        <Stack height={"140px"} sx={{ textAlign: "center" }} spacing={1}>
          <Box height={"80px"}>
            <Typography variant="h6">{shortTitle()}</Typography>
          </Box>

          <Stack
            height={"50px"}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Rating name="read-only" value={rating.rate} readOnly />
            <Box>
              <Button
                variant={"contained"}
                color={"primary"}
                className={classes.button}
                onClick={(e) => {
                  e.stopPropagation();
                  addProductInBasketHandler();
                  setOpenAlert(true);
                }}
                onMouseOver={() => setButtonHover(true)}
                onMouseOut={() => setButtonHover(false)}
              >
                {buttonHover ? (
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    variant="subtitle1"
                  >
                    <Typography>Add &nbsp;</Typography>
                    <ShoppingBasketOutlinedIcon fontSize={"small"} />
                  </Typography>
                ) : (
                  <Typography variant="h6">{price}$</Typography>
                )}
              </Button>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
