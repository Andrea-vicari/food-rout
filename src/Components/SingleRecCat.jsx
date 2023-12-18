import React from "react";
import { BreadCumb } from "./BreadCumb";
import { useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { SingleRecDesc } from "./SingleRecDesc";
import { Link } from "react-router-dom";



// try to get the recipe and pass it yo the full desc component
// Assign to currentURl the current window url (Example ?British, ?American)
let currentURL = window.location.search;

// Split the URl into an Array
let splittedURL = currentURL.split('');
// Remove the first char => ?
splittedURL.shift();
// Re join without ? and assign to trimmedURL (EX. French)
const trimmedURL = splittedURL.join('');
console.log(trimmedURL)
// Address to fetch data random.php data
var API_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='.concat(trimmedURL);
console.log(API_URL);

var responseAPI;
var singleJSON;
var SingleRecExp;


async function getDatafromTheAPI(){
  try{
      responseAPI = await fetch(API_URL);
      singleJSON = await responseAPI.json();
      console.log(singleJSON);

      console.log(SingleRecExp);
  }
  catch(e){
      alert(`Error: ${e}`);
    }
}

SingleRecExp = {...singleJSON};

var whatID;

const SingleRecCat = () => {

getDatafromTheAPI();

  let { state } = useLocation();
  whatID = state.clicked; // example "45678"
  console.log(whatID)

  var SINGLE_REC_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='.concat(whatID);

  console.log(SINGLE_REC_URL)

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(SINGLE_REC_URL)
    .then(res => res.json())
    .then((json) => setData(json.meals))
    .then(console.log(data))
    .catch(err => console.log(err));
  },[]);


  const reload = ()=>{
    location.reload();
    }


    return (

    <React.Fragment>
      <BreadCumb />
      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>reload()}>RELOAD</button>
      <Link type="button" reloadDocument to={`/SingleRecDesc?${whatID}`} state={{ clicked:whatID }} className="btn btn-sm btn-outline-secondary">Enjoy the recipe</Link>

      <SingleRecDesc />

    </React.Fragment>

    )
};

export {SingleRecCat, SingleRecExp};