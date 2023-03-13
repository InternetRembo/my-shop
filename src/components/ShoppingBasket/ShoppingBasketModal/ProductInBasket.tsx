import React from "react";
import { Box, IconButton, Stack, Theme, Typography } from "@mui/material";
import Image from "mui-image";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { createStyles, makeStyles } from "@mui/styles";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { removeProductFromTheBasketAC } from "../../../redux/reducers/shoppingReducer";

const useStyles = makeStyles((myTheme: Theme) =>
  createStyles({
    container: {
      position: "relative",
      height: "150px",
    },
    productFlexBlock: {
      borderBottom: `2px solid ${myTheme.palette.primary.light}`,
      height: "150px",
    },
    removeIcon: {
      position: "absolute",
      top: "-10px",
      left: "95%",
    },
  })
);

type ProductInBasketProps = {
  title: string;
  image: string;
  price: number;
  id: number;
};

const ProductInBasket: React.FC<ProductInBasketProps> = ({
  image,
  title,
  price,
  id,
}) => {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const productsInBasket = useAppSelector(
    (state) => state.shoppingReducer.productsInBasket
  );

  const removeProductHandler = () => {
    dispatch(
      removeProductFromTheBasketAC(
        productsInBasket.filter((el) => el.id !== id)
      )
    );
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.removeIcon}>
        <IconButton onClick={() => removeProductHandler()}>
          <DangerousIcon color={"error"} fontSize={"medium"} />
        </IconButton>
      </Box>

      <Stack
        className={classes.productFlexBlock}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
      >
        <Image
          fit={"contain"}
          src={`${image}`}
          showLoading={true}
          width={"120px"}
          height={"120px"}
        />
        <Typography width={"300px"} variant={"h5"}>
          {title}
        </Typography>

        <Box width={"120px"}>
          <Stack
            width={"110px"}
            sx={{ border: "1px solid pink" }}
            alignItems={"center"}
            spacing={1}
            direction={"row"}
          >
            <IconButton>
              <HorizontalRuleIcon />
            </IconButton>
            <Typography variant={"h5"}>4</Typography>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Stack>
        </Box>
        <Box width={"150px"}>
          <Typography variant={"h5"}>{price}$</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductInBasket;
