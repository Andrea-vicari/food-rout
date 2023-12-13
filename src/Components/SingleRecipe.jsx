import React from "react";
import { useEffect, useState} from 'react';
import { BreadCumb } from "./BreadCumb";
import { Link } from "react-router-dom";
import place from "./placeholder.jpg";

  var currentURL = window.location.search;

  console.log(currentURL); // ?52XXX

  var splittedURL = currentURL.split('');
  console.log(splittedURL);
  splittedURL.shift();
  console.log(splittedURL);
  var trimmedURL = splittedURL.join('');
  console.log(trimmedURL);

  // Address to fetch data random.php data
  var API_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='.concat(trimmedURL);

  var responseRandom;
  var randomJSON;
  var singleTitle;
  var singleCategory;
  var singleArea;


  async function getDatafromTheAPI(){
    try{
        responseRandom = await fetch(API_URL);
        randomJSON = await responseRandom.json();
        console.log(randomJSON)
        singleTitle = randomJSON.meals[0].strMeal;
        singleCategory = randomJSON.meals[0].strCategory;
        singleArea = randomJSON.meals[0].strArea;

        getRecipe(singleTitle);

    }
    catch(e){
        alert(`Error: ${e}`);
      }
  }
  getDatafromTheAPI();


const SingleRecipe = (cazzo) => {
    console.log(cazzo)
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
            <h4 className="my-0 fw-normal display-6">{singleTitle}</h4>
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