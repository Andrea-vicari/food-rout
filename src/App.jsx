import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "./Components/Common/header"
import Footer from "./Components/Common/footer"
import Home from "./Components/home"
import CategoriesPage from './Components/CategoriesPage';
import CountriesPage from './Components/CountriesPage';
import Credits from './Components/Credits';
import FavRecList from "./Components/FavRecList";
import ScrollToTop from './Components/ScrollToTop';
import {SingleRandom} from './Components/SingleRandom';
import {SingleRecCat} from './Components/SingleRecCat';
import {SingleCategory} from './Components/SingleCategory';
import {SingleCountry} from './Components/SingleCountry';
import {SingleRecCountry} from './Components/SingleRecCountry';
import CookieConsent, { Cookies } from "react-cookie-consent";


function App() {


  return (
    <React.Fragment>
     <Header />
     <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<CategoriesPage />} />
        <Route path="/Countries" element={<CountriesPage />} />
        <Route path="/SingleRandom" element={<SingleRandom />} />
        <Route path="/SingleCategory" element={<SingleCategory />} />
        <Route path="/SingleRecCat" element={<SingleRecCat />} />
        <Route path="/SingleCountry" element={<SingleCountry />} />
        <Route path="/SingleRecCountry" element={<SingleRecCountry />} />
        <Route path="/FavRecList" element={<FavRecList />} />
        <Route path="/Credits" element={<Credits />} />

      </Routes>
      </ScrollToTop>

     <Footer />
     <CookieConsent
        location="bottom"
        buttonText="Ok, Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        >
        This website uses cookies to enhance the user experience. Only functional cookies are used, no adv cookies or any user data will be collected.
        </CookieConsent>
     </React.Fragment>
  )
}

export default App