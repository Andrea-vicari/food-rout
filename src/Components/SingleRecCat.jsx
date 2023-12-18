import React from "react";
import { BreadCumb } from "./BreadCumb";
import { useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { SingleRecDesc } from "./SingleRecDesc";

var whatID;
var SingleRecExp;

var singleThumb;
var singleTitle;

const SingleRecCat = () => {

  let { state } = useLocation();
  whatID = state.clicked; // example "45678"
  console.log(whatID)

  var SINGLE_REC_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='.concat(whatID);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(SINGLE_REC_URL)
    .then(res => res.json())
    .then((json) => setData(json.meals))
    .then(console.log(data))
    .catch(err => console.log(err));
  },[]);

  SingleRecExp = [...data]

  console.log(SingleRecExp)


    return (

    <React.Fragment>
      <BreadCumb />

      <SingleRecDesc />

    </React.Fragment>

    )
};

export {SingleRecCat, SingleRecExp, whatID};