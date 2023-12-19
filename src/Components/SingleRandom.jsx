import React from "react";
import { BreadCumb } from "./BreadCumb";
import { Link } from "react-router-dom";
import { randomCloneExport } from "./Random";
import { IngredientsListRandom } from "./IngredientsListRandom";

const SingleRandom = () => {

    return (

    <React.Fragment>
      <BreadCumb />

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
                <div className="bg-body-secondary py-3">
                            <Link className="icon-link text-decoration-none fs-6 text-dark mx-2" to="/CategoriesPage">
                                <i className="fa fa-globe fs-4 text-warning display-1"></i>
                                {randomCloneExport.meals[0].strArea}
                              </Link>


                            <Link className="icon-link text-decoration-none fs-6 text-dark mx-2" to="/CategoriesPage">
                                <i className="fa fa-lemon fs-4 text-warning display-1"></i>
                                {randomCloneExport.meals[0].strCategory}
                              </Link>


                            <Link className="icon-link text-decoration-none fs-6 text-dark mx-2" to={randomCloneExport.meals[0].strYoutube} target="_blank">
                                <i className="fab fa-youtube fs-4 text-danger display-1"></i>
                                Video
                              </Link>
              </div>
                    <div className="card-header py-3">
                        <div className="container">
                          <p className="my-0 fs-5">Add to Favorites</p>
                          <i className="fs-2 fa fa-heart text-danger"></i>

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