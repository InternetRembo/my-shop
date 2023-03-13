import React from "react";
import { Box, Button, Paper, Stack, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import ProductInBasket from "./ProductInBasket";
import { useAppSelector } from "../../../redux/hooks";
import { productInBasket } from "../../../redux/types/shoppingBasketType";

const useStyles = makeStyles((myTheme: Theme) =>
  createStyles({
    modal: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      marginTop: "20px",
      width: "900px",
      height: "1000px",
      zIndex: "2",
      padding: "10px",
    },
    itemBlock: {
      margin: "10px",
      width: "100%",
      maxHeight: "700px",
      minHeight: "700px",
      overflowY: "auto",
    },
    button: {
      marginTop: "20px",
      width: "260px",
      height: "60px",
    },
    orderInfoBlock: {
      marginBottom: "50px",
      width: "100%",
      height: "80px",
      borderTop: `3px solid ${myTheme.palette.primary.light}`,
      borderBottom: `3px solid ${myTheme.palette.primary.light}`,
    },
    header: {
      backgroundColor: `${myTheme.palette.primary.light}`,
      width: "100%",
      textAlign: "center",
    },
    outSpace: {
      width: "99vw",
      height: "99vh",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: " translate(-50%, -50%)",
      zIndex: "3",
    },
  })
);

const OrderParamBlock = (params: { param: string; value: string }) => {
  return (
    <Stack
      height={"50px"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography variant={"h6"}>{params.param}</Typography>
      <Typography variant={"h4"}> {params.value}</Typography>
    </Stack>
  );
};

type ShoppingBasketModalProps = {
  setShowModal: (value: boolean) => void;
};

const ShoppingBasketModal: React.FC<ShoppingBasketModalProps> = ({
  setShowModal,
}) => {
  const classes = useStyles();
  const productsInBasket = useAppSelector(
    (state) => state.shoppingReducer.productsInBasket
  );
  return (
    <Box onClick={() => setShowModal(false)} className={classes.outSpace}>
      <Paper
        onClick={(e) => e.stopPropagation()}
        className={classes.modal}
        elevation={2}
      >
        <Stack justifyContent="space-around" alignItems="center">
          <Box className={classes.header}>
            <Typography variant={"h4"}> Here is your list </Typography>
          </Box>
          <Stack direction={"column"} spacing={2} className={classes.itemBlock}>
            {productsInBasket.map((el: productInBasket) => (
              <ProductInBasket
                price={el.price}
                image={el.image}
                title={el.title}
                id={el.id}
                key={el.id}
              />
            ))}
          </Stack>
          <Stack
            className={classes.orderInfoBlock}
            direction={"row"}
            justifyContent="space-around"
          >
            <OrderParamBlock param={"Order sum"} value={"1"} />
            <OrderParamBlock param={"Shipping sum"} value={"1"} />
            <OrderParamBlock param={"Total sum"} value={"1"} />
          </Stack>

          <Button className={classes.button} variant={"contained"}>
            <Typography variant={"h6"}>Order it!</Typography>
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default ShoppingBasketModal;
