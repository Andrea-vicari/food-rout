import React from "react";
import { SingleCatLoopExp, whatClickedFromHome } from "./SingleCategory";
import { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";


const SingleCategoryLoop = () => {



return (
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

)

};

export {SingleCategoryLoop,SingleCatLoopExp};