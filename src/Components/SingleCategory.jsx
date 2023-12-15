import React from "react";
import { BreadCumb } from "./BreadCumb";
import { useEffect, useState} from 'react';
import { SingleCategoryLoop } from "./SingleCategoryLoop";


let currentURL = window.location.search;

console.log(currentURL); // ?52XXX
let splittedURL = currentURL.split(''); // ?,C,h,i,c,k,e,n
splittedURL.shift(); // C,h,i,c,k,e,n
var trimmedURL = splittedURL.join(''); // Chicken

var SINGLE_CAT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='.concat(trimmedURL);

var catToExp;

const SingleCategory = () => {



const [data, setData] = useState([]);


useEffect(() => {
  fetchData();
}, []);

    const fetchData = async () => {
      try {
        const response = await fetch(SINGLE_CAT_URL);
        const result = await response.json();
        setData(result);
        console.log(result);

        //catToExp = [...result];

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

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

        <SingleCategoryLoop />

      </div>

    </React.Fragment>

    )

};

export {SingleCategory, catToExp};