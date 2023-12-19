import React from "react";
import { BreadCumb } from "./BreadCumb";
import { cloneCountry } from "./IntroCountries";
import { useState, useEffect} from "react";
import { Link, useLocation} from "react-router-dom";


var SingleCountryLoopExp;
var whatClickedFromHome
var cloneFiltered;

var arrayofID = [];
var idAPI = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const SingleCountry = () => {



  let { state } = useLocation();
  whatClickedFromHome = state.clicked; // example "Chicken"

  console.log(whatClickedFromHome)

  cloneFiltered = cloneCountry.filter((element)=> element.strArea == whatClickedFromHome);
  console.log(cloneFiltered);


  var SINGLE_COUNTRY_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a='.concat(whatClickedFromHome);


  const [data, setData] = useState([]);

    useEffect(() => {
      fetch(SINGLE_COUNTRY_URL)
      .then(res => res.json())
      .then((json) => setData(json.meals))
      .then(SingleCountryLoopExp = [...data])
      .then(console.log(data))
      .catch(err => console.log(err));
    },[]);

    SingleCountryLoopExp = [...data]

    console.log(SingleCountryLoopExp)


    SingleCountryLoopExp.forEach(element => {
      arrayofID.push([idAPI.concat(element.idMeal), element.idMeal, element.strMeal])

    });

console.log(arrayofID)
return (

    <main>
  <section className="py-5 text-center container-fluid bg-food">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">{cloneFiltered[0].strArea}</h1>
        <div className="separator"></div>
        <p className="lead text-body-secondary">{cloneFiltered[0].description}</p>
      </div>
    </div>
  </section>

  <div className="album py-5">
  <div className="container">
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
     {SingleCountryLoopExp.map((e)=>{
       return (
        <div className="col">
        <div className="card shadow-sm">
          <img src={e.strMealThumb} className="bd-placeholder-img card-img-top"/>
          <div className="card-body">
            <h4>{e.strMeal}</h4>
            <div className="d-flex justify-content-between align-items-center">

                <Link type="button" to={`/SingleRecCountry?${e.idMeal}`} state={{ clicked: e.idMeal }} className="btn btn-sm btn-outline-secondary">Enjoy the recipe</Link>

              <i className={cloneFiltered[0].flag}></i>
            </div>
          </div>
        </div>
      </div>
     );})}

    </div>
  </div>
  </div>


</main>
  )

};

export {SingleCountry, arrayofID};