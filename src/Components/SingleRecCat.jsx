import React from "react";
import { BreadCumb } from "./BreadCumb";
import { useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { arrayofID } from "./SingleCategory";
import { Link } from "react-router-dom";


let currentURL = window.location.search;

// Split the URl into an Array
let splittedURL = currentURL.split('');
// Remove the first char => ?
splittedURL.shift();
// Re join without ? and assign to trimmedURL (EX. French)
var trimmedURL = splittedURL.join('');
console.log(trimmedURL);

var whatID;
var toCall;
var titleRe;
var thumbRe;
var directions;
var area;
var category;
var videoLink;

const SingleRecCat = (props) => {


  let { state } = useLocation();
  whatID = state.clicked; // example "45678"
  console.log(whatID)


  arrayofID.forEach(element => {

      if(element[1] == whatID){

        toCall = element[0]
        titleRe = element[2]
      }


  });


  console.log(toCall)

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(toCall);
      const newData = await response.json();
      setData(newData);
      console.log(newData)
      titleRe = newData.meals[0].idMeal;
      thumbRe = newData.meals[0].strMealThumb;
      directions = newData.meals[0].strInstructions;
      area = newData.meals[0].strArea;
      category = newData.meals[0].strCategory;
      videoLink = newData.meals[0].strYoutube;
    };

    fetchData();
  }, [props.meals]);

    if(data){

    return (

    <React.Fragment>
      <BreadCumb />


      <div className="container">
        <div className="main col-md-12">
        <h1 className="page-title">{titleRe}</h1>
          <div className="row border-2">
              <div className="col-lg-6 mb-2">
                <img src={thumbRe} className="d-block img-fluid" loading="lazy"/>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-1">
                  <h3>Ingredients</h3>
                </div>
                <div className="card-body">
                 {/* <IngredientsListRandom /> */ }
                </div>

                </div>
              </div>

              <h3>Directions</h3>
              <p>{directions}</p>
              <div className="bg-body-secondary py-3">
                            <Link className="icon-link text-decoration-none fs-6 text-dark mx-2" to="/CategoriesPage">
                                <i className="fa fa-globe fs-4 text-warning display-1"></i>
                                {area}

                              </Link>


                            <Link className="icon-link text-decoration-none fs-6 text-dark mx-2" to="/CategoriesPage">
                                <i className="fa fa-lemon fs-4 text-warning display-1"></i>
                                {category}

                              </Link>


                            <Link className="icon-link text-decoration-none fs-6 text-dark mx-2" to={videoLink} target="_blank">
                                <i className="fab fa-youtube fs-4 text-danger display-1"></i>
                                Video
                              </Link>
              </div>
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


    </React.Fragment>

    )
  }
  else{
    return null;
  }
};

export {SingleRecCat};