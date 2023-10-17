import './App.css';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { Card } from "./components/card";
import { Layout } from "./components/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Women } from './components/Women';
import { Men } from './components/Men';

function App() {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data=>setItems(data))
  }, [])

  return(
    <>
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/women' element={<Women />} />
      <Route path='/men' element={<Men />} />
    </Routes>

    <Layout />
      <div className='grid gap-10 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
    <Layout />
    </BrowserRouter>

   
    </>
  )
}

export default App
