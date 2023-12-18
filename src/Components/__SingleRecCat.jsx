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
console.log(trimmedURL)

const printFu =()=>{
  SingleCatLoopExp.forEach(element => {
      if(element.idMeal == trimmedURL){
        alert(element.strMeal)
        return
      }
  });
}


var SingleRecExp;


var whatID;
var API_URL;

const SingleRecCat = () => {
  printFu()
  let { state } = useLocation();
  whatID = state.clicked; // example "45678"
  console.log(whatID)

  let dbURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  console.log(typeof dbURL)

  API_URL = `${dbURL}${whatID}`


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then((json) => setData(json.meals))
    .then(console.log(data))
    .catch(err => console.log(err));
  },[]);
SingleRecExp = {...data};
    return (

    <React.Fragment>
      <BreadCumb />


      <h1>TUUCA</h1>

    </React.Fragment>

    )
};

export {SingleRecCat, SingleRecExp};