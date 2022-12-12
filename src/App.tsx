import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {createTheme, ThemeProvider} from "@mui/material";
import ProductDesk from "./components/ProductDesk/ProductDesk";
import {Routes , Route} from  'react-router-dom'
import ProductInfo from "./components/ProductInfo/ProductInfo";


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
          <Routes>
              <Route path={'/product/:id/'} element={<ProductInfo/>} />
              <Route path={'/'} element={<ProductDesk/>} />

          </Routes>
      </div>
      </ThemeProvider>
  );
}

export default App;
