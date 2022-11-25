import React from 'react';
import {
    AppBar,
    Box,
    InputBase,
    Theme,
    Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {createStyles, makeStyles} from "@mui/styles";
import Flex from "../helpers/Flex";


const useStyles = makeStyles((myTheme: Theme) => createStyles({
    header: {
        borderBottom: `3px solid ${myTheme.palette.secondary.dark}`,
        backgroundColor:`${myTheme.palette.secondary.main}`,
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
    return (
        <AppBar elevation={0}  position="fixed">
            <Box className={classes.header}  padding='0 200px' display='flex' alignItems="center" justifyContent="space-between">
                <Typography className={classes.title}  variant="h4" noWrap>
                    Big Baza Shop
                </Typography>
                <div className={classes.input} >
                <Flex className={classes.input} alignItems='center' flexDirection='row' >
                    <div>
                        <SearchIcon />
                    </div>
                    <InputBase
                        fullWidth
                        placeholder="Find what you are looking for"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Flex>
                </div>
            </Box>
        </AppBar>
    );
};

export default Header;


