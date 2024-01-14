import React from "react";

import { useState, useEffect} from "react";
import { Link, useLocation} from "react-router-dom";


var SingleCatLoopExp;
var whatClickedFromHome
// var cloneFiltered;

var arrayofID = [];
var idAPI = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const SingleCategory = () => {


  let { state } = useLocation();
  whatClickedFromHome = state.clicked; // example "Chicken"

  console.log(whatClickedFromHome)


  var SINGLE_CAT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='.concat(whatClickedFromHome);


  const [data, setData] = useState([]);

    useEffect(() => {
      fetch(SINGLE_CAT_URL)
      .then(res => res.json())
      .then((json) => setData(json.meals))
      .then(SingleCatLoopExp = [...data])
      .then(console.log(data))
      .catch(err => console.log(err));
    },[]);

    SingleCatLoopExp = [...data]

    console.log(SingleCatLoopExp)


    SingleCatLoopExp.forEach(element => {
      arrayofID.push([idAPI.concat(element.idMeal), element.idMeal, element.strMeal])

    });

console.log(arrayofID)
return (

    <main>
  <section className="py-5 text-center container-fluid bg-food">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">{whatClickedFromHome}</h1>

      </div>
    </div>
  </section>

  <div className="album py-5">
  <div className="container">
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
     {SingleCatLoopExp.map((e)=>{
       return (
        <div className="col">
        <div className="card shadow-sm">
          <img src={e.strMealThumb} className="bd-placeholder-img card-img-top"/>
          <div className="card-body">
            <h4>{e.strMeal}</h4>
            <div className="d-flex justify-content-between align-items-center">

                <Link type="button" to={`/SingleRecCat?${e.idMeal}`} state={{ clicked: e.idMeal }} className="btn btn-sm btn-outline-secondary">Enjoy the recipe</Link>

              <small className="text-body-secondary">{whatClickedFromHome}</small>
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

export {SingleCategory, arrayofID};