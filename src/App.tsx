import React from 'react';
import Header from "./components/Header/Header";
import {createTheme, ThemeProvider} from "@mui/material";
import ProductDesk from "./components/ProductDesk/ProductDesk";
import {Routes , Route} from  'react-router-dom'
import ProductInfo from "./components/ProductInfo/ProductInfo";


export const myTheme= createTheme({
    palette:{
        primary:{
            main:'#fca7c2',
            dark:'#fc588c',
            light:'#ffbcee',
        },
        secondary:{
            main:'#ffccf2',
            dark:'#ffccf2',
        },


    },

})

function App() {
  return (
      <ThemeProvider theme={myTheme}>
      <div>
          <Header/>
          <Routes>
              <Route path={'/'} element={<ProductDesk/>} />
              <Route path={'/product/:id/'} element={<ProductInfo/>} />
              <Route path={'/a'} element={<div>weqwe</div>} />
          </Routes>
      </div>
      </ThemeProvider>
  );
}

export default App;
