import React from 'react';
import Header from "./Components/Common/header"
import Footer from "./Components/Common/footer"
import Home from "./Components/home"
import CategoriesPage from './Components/CategoriesPage';
import CountriesPage from './Components/CountriesPage';
import IngredientsPage from './Components/IngredientsPage';
import LoginPage from './Components/LoginPage';
import {SingleRandom} from './Components/SingleRandom';
import {SingleCategory} from './Components/SingleCategory';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <React.Fragment>
     <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<CategoriesPage />} />
        <Route path="/Countries" element={<CountriesPage />} />
        <Route path="/Ingredients" element={<IngredientsPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SingleRandom" element={<SingleRandom />} />
        <Route path="/SingleCategory" element={<SingleCategory />} />
      </Routes>

     <Footer />
     </React.Fragment>
  )
}

export default App
