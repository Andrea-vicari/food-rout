import React from "react";
import { BreadCumb } from "./BreadCumb";
import { Link } from "react-router-dom";
import place from "./placeholder.jpg";

const SingleRecipe = () => {


  //console.log(data)

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
            <h4 className="my-0 fw-normal display-6">Shawarma</h4>
          </div>
          <div className="card-body">
            <ul className="list-unstyled">
              <li>
              <Link className="icon-link text-decoration-none fs-4 text-dark" to="/CategoriesPage">
                <i className="fa fa-globe fs-4 text-warning display-1"></i>
                Country
              </Link>

              </li>
              <li>
                <Link className="icon-link text-decoration-none fs-4 text-dark" to="/CategoriesPage">
                  <i className="fa fa-lemon fs-4 text-warning display-1"></i>
                  Category
                </Link>

              </li>
              <li>
              <Link className="icon-link text-decoration-none fs-4 text-dark" to="/CategoriesPage">
                <i className="fab fa-youtube fs-4 text-danger display-1"></i>
                Video
              </Link>


              </li>
            </ul>
                <h3 className="my-3 fw-normal">Ingredients</h3>
                <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <i></i>
          </div>
          <div className="card-header py-3">
          <div className="container">
            <p className="my-0 fs-5">Add to Favorites</p>
            <i className="fs-2 fa fa-heart"></i>

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

export default SingleRecipe;