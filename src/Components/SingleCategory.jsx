import React from "react";
import { BreadCumb } from "./BreadCumb";
import place from "../Components/placeholder.jpg"
import { Link } from "react-router-dom";

import { useEffect, useState} from 'react';

let currentURL = window.location.search;

console.log(currentURL); // ?52XXX
let splittedURL = currentURL.split(''); // ?,C,h,i,c,k,e,n
splittedURL.shift(); // C,h,i,c,k,e,n
const trimmedURL = splittedURL.join(''); // Chicken



var SINGLE_CAT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='.concat(trimmedURL);

console.log(SINGLE_CAT_URL)

const SingleCategory = () => {

  const [advice, setAdvice] = useState("");

  useEffect(() => {
      const url = SINGLE_CAT_URL;

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json);
              setAdvice(advice);
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);

    return (

    <React.Fragment>
      <BreadCumb />

      <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 col-lg-6">
    <img src={place} className="d-block mx-lg-auto img-fluid" alt=".." width="700" loading="lazy"/>
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Category title</h1>
    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
      <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
    </div>
  </div>
</div>

      </div>

    </React.Fragment>

    )
};

export {SingleCategory};