import React from 'react';

import Image from "mui-image";
import {createStyles, makeStyles} from "@mui/styles";
import {Box} from "@mui/material";

const useStyles = makeStyles(() => createStyles({
    preloader: {
        position:'fixed',
        left:'50%' ,
        top:'50%',
        transform: 'translate(-50%, -50%)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
}));

const Preloader = () => {

    const classes = useStyles()

    return (
        <Box className={classes.preloader} >
            <Image className={classes.preloader}
                   src ='https://dsps.univ-paris13.fr/wp-content/uploads/lg.earth-globe-map-spinner.gif '
                width={'700px'}
                height={'700px'}

            />
        </Box>
    );
};

export default Preloader;