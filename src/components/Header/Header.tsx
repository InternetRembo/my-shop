import React from 'react';

import {
    AppBar,
    Box,
    InputBase, Stack,
    Theme,
    Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {createStyles, makeStyles} from "@mui/styles";
import {useNavigate} from "react-router-dom";



const useStyles = makeStyles((myTheme: Theme) => createStyles({
    header: {
        borderBottom: `3px solid ${myTheme.palette.primary.dark}`,
        backgroundColor:`${myTheme.palette.primary.main}`,
        height:'50px'
    },
    input:{
        width:'400px',
        backgroundColor: 'white',
        borderRadius: "4px"
    },
    title : {

        WebkitTextFillColor : 'white',
        WebkitTextStroke: '1px black',
    }

}));

const Header = () => {

    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <AppBar elevation={0}  position="fixed">
            <Box onClick={()=>{navigate(`/`)}} className={classes.header}  padding='0 200px' display='flex' alignItems="center" justifyContent="space-between">
                <Typography  className={classes.title}  variant="h4" noWrap>
                    Big Baza Shop
                </Typography>
                <div className={classes.input} >
                <Stack className={classes.input} alignItems='center' flexDirection='row' >
                    <div>
                        <SearchIcon />
                    </div>
                    <InputBase
                        fullWidth
                        placeholder="Find what you are looking for"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Stack>
                </div>
            </Box>
        </AppBar>
    );
};

export default Header;


