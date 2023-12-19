import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "./Components/Common/header"
import Footer from "./Components/Common/footer"
import Home from "./Components/home"
import CategoriesPage from './Components/CategoriesPage';
import CountriesPage from './Components/CountriesPage';
import IngredientsPage from './Components/IngredientsPage';
import LoginPage from './Components/LoginPage';
import ScrollToTop from './Components/ScrollToTop';
import {SingleRandom} from './Components/SingleRandom';
import {SingleRecCat} from './Components/SingleRecCat';
import {SingleCategory} from './Components/SingleCategory';
import {SingleCountry} from './Components/SingleCountry';
import {SingleRecCountry} from './Components/SingleRecCountry';

function App() {


  return (
    <React.Fragment>
     <Header />
     <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<CategoriesPage />} />
        <Route path="/Countries" element={<CountriesPage />} />
        <Route path="/Ingredients" element={<IngredientsPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SingleRandom" element={<SingleRandom />} />
        <Route path="/SingleCategory" element={<SingleCategory />} />
        <Route path="/SingleRecCat" element={<SingleRecCat />} />
        <Route path="/SingleCountry" element={<SingleCountry />} />
        <Route path="/SingleRecCountry" element={<SingleRecCountry />} />
      </Routes>
      </ScrollToTop>

     <Footer />
     </React.Fragment>
  )
}

export default App