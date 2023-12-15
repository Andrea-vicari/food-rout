import React from "react";
import { BreadCumb } from "./BreadCumb";
import { useEffect, useState} from 'react';


let currentURL = window.location.search;

console.log(currentURL); // ?52XXX
let splittedURL = currentURL.split(''); // ?,C,h,i,c,k,e,n
splittedURL.shift(); // C,h,i,c,k,e,n
var trimmedURL = splittedURL.join(''); // Chicken

var SINGLE_CAT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='.concat(trimmedURL);




var toLoop;


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
        console.log(result)



      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };



    return (


    <React.Fragment>
      <BreadCumb />

      <div className="container">

        <div className="col-sm-4">
            <div className="card mb-3" width='540'>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="" className="img-fluid rounded-start" alt="..."/>
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