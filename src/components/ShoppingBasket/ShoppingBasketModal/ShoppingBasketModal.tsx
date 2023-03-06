import React from "react";
import { Box, Button, Paper, Stack, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import ProductInBasket from "./ProductInBasket";

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
      height: "700px",
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

const ShoppingBasketModal = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.modal} elevation={2}>
      <Stack justifyContent="space-around" alignItems="center">
        <Box className={classes.header}>
          <Typography variant={"h4"}> Here is your list </Typography>
        </Box>
        <Stack direction={"column"} spacing={2} className={classes.itemBlock}>
          <ProductInBasket />
          <ProductInBasket />
          <ProductInBasket />
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
  );
};

export default ShoppingBasketModal;
