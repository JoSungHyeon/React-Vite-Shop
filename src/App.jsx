import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Product from './page/Product'
import SignUp from './page/SignUp'
import NotFound from './page/NotFound'
import axios from 'axios'


export const ItemStateContext = createContext();
export const ItemDispatchContext = createContext();


function App() {
  const [itemData, setItemData] = useState([]);

  useEffect(()=>{
    console.log(localStorage.getItem('watched'))
    localStorage.setItem('watched', JSON.stringify( [] ))
    axios.get(`https://JoSungHyeon.github.io/shop-data/data1.json`).then((result)=>{ setItemData(result.data)})
  }, []);

  const changeItemData = (value) => {
    setItemData(value);
  };

  return (
    <>
      <ItemStateContext.Provider value={itemData}>
        <ItemDispatchContext.Provider>
          <Routes>
            <Route path='/' element={<Home changeItemData={changeItemData} />}></Route>
            <Route path='/product/:id' element={<Product />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
          </Routes>
        </ItemDispatchContext.Provider>
      </ItemStateContext.Provider>
    </>
  )
}

export default App
