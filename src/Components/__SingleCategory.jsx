import React from "react";
import { BreadCumb } from "./BreadCumb";
import { catExpObj } from "./IntroCat";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import {UserContext} from "./IntroCat";

var SingleCatLoopExp;
var whatClickedFromHome
var cloneFiltered;

const SingleCategory = () => {

  console.log(catExpObj)

  let { state } = useLocation();
  whatClickedFromHome = state.clicked; // example "Chicken"

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

    SingleCatLoopExp = [...data]

return (

    <main>
  <section className="py-5 text-center container bg-food">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">{cloneFiltered[0].strCategory}</h1>
        <p className="lead text-body-secondary">{cloneFiltered[0].strCategoryDescription}</p>
        <p>
          <Link to={`/SingleCategoryLoop?${whatClickedFromHome}`} preventScrollReset={true} className="btn btn-secondary my-2">See all the recipes</Link>
        </p>
      </div>
    </div>
  </section>

  <div className="album py-5 bg-body-tertiary">
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

export {SingleCategory, SingleCatLoopExp, whatClickedFromHome};