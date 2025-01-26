import { useState } from 'react'
import './App.css'
import Mainpage from './Components/Mainpage'
import { Route,Routes } from 'react-router-dom';
import Mealinfo from './Component/Mealinfo';
import Food from "./Components/Food"
import Recipe from './Components/Recipe';
 

function App() {

  return (
    <>
     <Mainpage/>
     <Routes>
      <Route path='/' element={<Food/>}/>
      <Route path='/:mealid' element={<Recipe/>}/>
     </Routes>
      
      
    </>
  )
}

export default App
