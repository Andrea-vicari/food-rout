import React from "react";
import { BreadCumb } from "./BreadCumb";
import { useEffect, useState} from 'react';
import place from "../Components/placeholder.jpg"
import { json } from "react-router-dom";

let currentURL = window.location.search;

console.log(currentURL); // ?52XXX
let splittedURL = currentURL.split(''); // ?,C,h,i,c,k,e,n
splittedURL.shift(); // C,h,i,c,k,e,n
var trimmedURL = splittedURL.join(''); // Chicken

var SINGLE_CAT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='.concat(trimmedURL);

var cloneArra;
const SingleCategory = () => {


  const [advice, setAdvice] = useState([]);

  useEffect(() => {
      const url = SINGLE_CAT_URL;

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json);
              cloneArra = {...json} ;
              console.log(cloneArra);
              setAdvice(advice.meals);

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
      <div className="container mx-auto">
            <div className="col-md-10 mx-auto text-center py-lg-2">
            <h1 className="text-center title py-2">{trimmedURL}</h1>
            <div className="separator"></div>
            <p className="text-center">Our category section is filled with a variety of mouth-watering dishes that are sure to satisfy your cravings. From hearty main courses to sweet and satisfying desserts, we have something for everyone. So, take a look around and see what catches your eye</p>
            </div>
        </div>

        <div className="col-sm-4">
            <div className="card mb-3" width='540'>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={place} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>

    </React.Fragment>

    )

};

export {SingleCategory};