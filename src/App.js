
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainLayout from './components/MainLayout';
import Home from './container/Home';
import RestaurantEdit from './container/RestaurantEdit';
import RestaurantListContainer from './container/RestaurantListContainer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="restaruant/edit" element={<RestaurantEdit/>} />
        <Route path="restaruant/list" element={<RestaurantListContainer/>} />
      </Route>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App