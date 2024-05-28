import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Product from './page/Product'
import axios from 'axios'
import Cart from './page/Cart'

export const ItemStateContext = createContext();

function App() {  
  const [itemData, setItemData] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem('watched') === null) {
      localStorage.setItem('watched', JSON.stringify( [] ));
    }
    if(localStorage.getItem('item') === null) {
      localStorage.setItem('item', JSON.stringify( [] ));
    }
    axios.get(`https://JoSungHyeon.github.io/shop-data/data.json`)
    .then((result)=>{
      setItemData(result.data);
    });
  }, []);
  
  return (
    <>
      <ItemStateContext.Provider value={itemData}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/product/:id' element={<Product />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
      </ItemStateContext.Provider>
    </>
  )
}

export default App
