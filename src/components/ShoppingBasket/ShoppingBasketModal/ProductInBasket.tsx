import React from "react";
import { Box, IconButton, Stack, Theme, Typography } from "@mui/material";
import Image from "mui-image";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { createStyles, makeStyles } from "@mui/styles";

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

const ProductInBasket = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.removeIcon}>
        <IconButton>
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
          src={
            "https://afisha.bigmir.net/i/54/53/42/7/5453427/gallery/9af66975d230fed429e27acdcdc5518d-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg"
          }
          showLoading={true}
          width={"120px"}
          height={"120px"}
        />
        <Typography variant={"h5"}> Product title </Typography>

        <Stack
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
        <Typography variant={"h5"}> 235$ </Typography>
      </Stack>
    </Box>
  );
};

export default ProductInBasket;
