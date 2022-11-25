import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {createTheme, ThemeProvider} from "@mui/material";
import FilterBlock from "./components/FilterBlock/FilterBlock";
import ProductItem from "./components/ProductDesk/ProductItem/ProductItem";
import ProductDesk from "./components/ProductDesk/ProductDesk";

export const myTheme= createTheme({
    palette:{
        primary:{
            main:'#e3f2fd',
            dark:'#ddedfc',
        },
        secondary:{
            main:'#fca7c2',
            dark:'#ff4081',
            light:'#f571c8',
        },


    },

})

function App() {
  return (
      <ThemeProvider theme={myTheme}>
      <div>
          <Header/>
          <FilterBlock/>
          <ProductDesk/>
      </div>
      </ThemeProvider>
  );
}

export default App;
