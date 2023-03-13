import React from "react";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Button, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((myTheme: Theme) =>
  createStyles({
    button: {
      width: "100px",
      height: "100px",
      position: "fixed",
      top: "100px",
      right: "60px",
      display: "flex",
      alignItems: "center",
    },
  })
);

type ShoppingBasketButtonProps = {
  setShowModal: (value: boolean) => void;
};

const ShoppingBasketButton: React.FC<ShoppingBasketButtonProps> = ({
  setShowModal,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button
        onClick={() => setShowModal(true)}
        sx={{ borderRadius: "400px", height: "100%" }} // потрібно переробити і дізнатись чому через класи не працює
        variant={"contained"}
        fullWidth
        size="large"
        color="primary"
        aria-label="add to shopping cart"
      >
        <LocalGroceryStoreOutlinedIcon fontSize={"large"} />
      </Button>
    </div>
  );
};

export default ShoppingBasketButton;
