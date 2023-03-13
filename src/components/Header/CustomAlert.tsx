import React, { useEffect } from "react";
import { Alert } from "@mui/material";

type alertProps = {
  setOpenAlert: (bool: boolean) => void;
};

const CustomAlert: React.FC<alertProps> = ({ setOpenAlert }) => {
  useEffect(() => {
    setTimeout(() => setOpenAlert(false), 5000);
  }, []);

  return (
    <Alert
      sx={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "320px",
      }}
      variant="filled"
      severity="success"
    >
      The product has been added to the basket
    </Alert>
  );
};

export default CustomAlert;
