import React from "react";
import { BreadCumb } from "./BreadCumb";
import { catExpObj } from "./IntroCat";
import { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";




var SingleCatLoopExp;
var whatClickedFromHome
var cloneFiltered;

const SingleCategory = () => {



  console.log(catExpObj)

  let { state } = useLocation();
  whatClickedFromHome = state.clicked; // example "Chicken"

  cloneFiltered = catExpObj.filter((element)=> element.strCategory == whatClickedFromHome);

  var SINGLE_CAT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='.concat(whatClickedFromHome);


  const [data, setData] = useState([]);

    useEffect(() => {
      fetch(SINGLE_CAT_URL)
      .then(res => res.json())
      .then((json) => setData(json.meals))
      .then(console.log(data))
      .catch(err => console.log(err));
    },[]);

    SingleCatLoopExp = [...data]

return (




    <main>
  <section className="py-5 text-center container bg-food">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">{cloneFiltered[0].strCategory}</h1>
        <p className="lead text-body-secondary">{cloneFiltered[0].strCategoryDescription}</p>
        <p>
          <Link to={`/SingleCategoryLoop?${whatClickedFromHome}`} className="btn btn-secondary my-2">Secondary action</Link>
        </p>
      </div>
    </div>
  </section>



</main>






  )

};

export {SingleCategory, SingleCatLoopExp, whatClickedFromHome};