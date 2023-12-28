import React from "react";
import { Link } from "react-router-dom";
import { randomCloneExport } from "./Random";
import { IngredientsListRandom } from "./IngredientsListRandom";

const SingleRandom = () => {

    return (

    <React.Fragment>


      <div className="container">
        <div className="main col-md-12">
        <h1 className="page-title">{randomCloneExport.meals[0].strMeal}</h1>
          <div className="row border-2">
              <div className="col-lg-6 mb-2">
                <img src={randomCloneExport.meals[0].strMealThumb} className="d-block img-fluid" loading="lazy"/>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-1">
                  <h3>Ingredients</h3>
                </div>
                <div className="card-body">
                    <IngredientsListRandom />
                </div>

                <div className="bg-body-secondary py-3 px-3">
                            <div className="row">
                                <div className="col-sm-4 mb-2">
                                  <i className="fa fa-globe fs-4 text-warning display-1 px-1"></i>
                                    <span className="px-1">{randomCloneExport.meals[0].strArea}</span>
                                </div>
                                <div className="col-sm-4 mb-2">
                                  <i className="fa fa-lemon fs-4 text-warning display-1 px-1"></i>
                                    <span className="px-1">{randomCloneExport.meals[0].strCategory}</span>
                                </div>
                                <div className="col-sm-4 mb-2">
                                <Link className="icon-link text-decoration-none fs-6 text-dark" to={randomCloneExport.meals[0].strYoutube} target="_blank">
                                  <i className="fab fa-youtube fs-4 text-danger display-1 px-1"></i>
                                    Video
                                </Link>
                                  </div>
                            </div>

                </div>
                </div>
              </div>

              <h3>Directions</h3>
              <p>{randomCloneExport.meals[0].strInstructions}</p>


          </div>



        </div>
      </div>

    </React.Fragment>

    )
};

export {SingleRandom};