import React from "react";
import { BreadCumb } from "./BreadCumb";
import { Link } from "react-router-dom";
import { randomCloneExport } from "./Random";
import { IngredientsList } from "./IngredientsList";


const SingleRecipe = () => {

  // randomCloneExport comes from the Homepage
  // it is the complete (clone)of the random recipe

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

          <ul className="list-unstyled">
              <li>
              <Link className="icon-link text-decoration-none fs-4 text-dark" to="/CategoriesPage">
                <i className="fa fa-globe fs-4 text-warning display-1"></i>
                {randomCloneExport.meals[0].strArea}
              </Link>

              </li>
              <li>
                <Link className="icon-link text-decoration-none fs-4 text-dark" to="/CategoriesPage">
                  <i className="fa fa-lemon fs-4 text-warning display-1"></i>
                  {randomCloneExport.meals[0].strCategory}
                </Link>

              </li>
              <li>
              <Link className="icon-link text-decoration-none fs-4 text-dark" to={randomCloneExport.meals[0].strYoutube} target="_blank">
                <i className="fab fa-youtube fs-4 text-danger display-1"></i>
                Video
              </Link>


              </li>
          </ul>
          <h3 className="my-3 fw-normal">Ingredients</h3>
                <IngredientsList />
                <div className="card-header py-3">
          <div className="container">
            <p className="my-0 fs-5">Add to Favorites</p>
            <i className="fs-2 fa fa-heart text-danger"></i>

          </div>
          <div className="container">
            <p className="my-0 fs-5">Share</p>
            <i className="fs-2 fab fa-instagram"></i>
            <i className="fs-2 fab fa-facebook mx-3"></i>
          </div>

          </div>
          </div>




          </div>



        </div>
        </div>

    </React.Fragment>

    )
};

export {SingleRecipe};