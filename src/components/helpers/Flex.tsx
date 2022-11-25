import React from 'react';
import {Box, BoxProps} from "@mui/material";


const Flex = (props: BoxProps)=> {
    return(
        <Box display='flex'
             flexDirection={props.flexDirection}
             alignItems={props.alignItems}
             justifyContent={props.justifyContent}

        >
            {props.children}
        </Box>
    )
}


export default Flex;