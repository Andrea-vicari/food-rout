import React from "react";
import { BreadCumb } from "./BreadCumb";
import { catExpObj } from "./IntroCat";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";



var ok = false;

if(catExpObj == undefined){
  <Navigate replace to={"/"}/>
}


var cloneFiltered;

const SingleCategory = () => {


  let { state } = useLocation();
  let whatClickedFromHome = state.clicked; // example "Chicken"

  cloneFiltered = catExpObj.filter((element)=> element.strCategory == whatClickedFromHome);

  var SINGLE_CAT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='.concat(whatClickedFromHome);


  const [data, setData] = useState([]);

    useEffect(() => {
      fetch(SINGLE_CAT_URL)
      .then(res => res.json())
      .then((json) => setData(json.meals))
      .then(console.log(data))
      .catch(err => console.log(err));
    },[]);



return (

  <React.Fragment>
    <BreadCumb />

    <div className="container-fluid py-5 bg-food">
      <div className="main col-md-8 mx-auto py-5">
        <div className="px-4 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={cloneFiltered[0].strCategoryThumb} alt="" width="272"/>
            <h1 className="display-5 fw-bold text-body-emphasis">{cloneFiltered[0].strCategory}</h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-4 lead mb-4">{cloneFiltered[0].strCategoryDescription}</p>

               <button type="button" className="btn btn-outline-dark btn-lg px-4">Discover selected recipes</button>

            </div>
        </div>
      </div>
      </div>

  </React.Fragment>

  )

};

export {SingleCategory};