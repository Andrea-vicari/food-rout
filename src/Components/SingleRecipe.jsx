import React from "react";
import { BreadCumb } from "./BreadCumb";
import { Link } from "react-router-dom";
import place from "./placeholder.jpg"
const SingleRecipe = () => {
    return (
    <React.Fragment>
      <BreadCumb />

      <div className="container col-xxl-8 px-4">
    <div className="row flex-lg-row align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={place} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
      <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal display-5">Shawarma</h4>
          </div>
          <div className="card-body">

            <ul className="list-unstyled mt-3 mb-4">
              <li className="mb-3">
              <Link class="icon-link text-decoration-none fs-3 text-dark" to="/CategoriesPage">
                <i className="fa fa-globe fs-1 text-warning display-1"></i>
                Moroccan
              </Link>

              </li>
              <li className="mb-3">
              <Link class="icon-link text-decoration-none fs-3 text-dark" to="/CategoriesPage">
                <i className="fa fa-globe fs-1 text-warning display-1"></i>
                Moroccan
              </Link>

              </li>

            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </React.Fragment>

    )
  };

export default SingleRecipe;