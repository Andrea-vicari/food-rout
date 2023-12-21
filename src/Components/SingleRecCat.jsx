import React from "react";
import { useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { arrayofID } from "./SingleCategory";
import { Link } from "react-router-dom";
import { IngredientsListCat } from "./IngredientsListCat";
import { AddToFav } from "./AddToFav";



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
var sinRecIngListEXP;

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
      sinRecIngListEXP = newData.meals[0];
    };

    fetchData();
  }, [props.meals]);



    if(data){

    return (

    <React.Fragment>

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
                          <IngredientsListCat />
                          </div>
                          <div className="bg-body-secondary py-3 px-3">
                            <div className="row">
                                <div className="col-4">
                                  <i className="fa fa-globe fs-4 text-warning display-1 px-1"></i>
                                    <span className="px-1">{area}</span>
                                </div>
                                <div className="col-4">
                                  <i className="fa fa-lemon fs-4 text-warning display-1 px-1"></i>
                                    <span className="px-1">{category}</span>
                                </div>
                                <div className="col-4">
                                <Link className="icon-link text-decoration-none fs-6 text-dark" to={videoLink} target="_blank">
                                  <i className="fab fa-youtube fs-4 text-danger display-1 px-1"></i>
                                    Video
                                </Link>
                                  </div>
                            </div>

                          </div>
                          <div className="card-header py-3">
                            <AddToFav />
                          </div>
                      </div>
              </div>

              <h3>Directions</h3>
              <p>{directions}</p>


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

export {SingleRecCat, sinRecIngListEXP};