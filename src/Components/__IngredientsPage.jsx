import React from "react";
import { useEffect, useState} from 'react';


var INGREDIENTS_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';


const IngredientsPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(INGREDIENTS_URL)
      .then(res => res.json())
      .then((json) => setData(json.meals))
      .then(console.log(data))
      .catch(err => console.log(err));
  },[]);



    console.log(data)

    return (
    <React.Fragment>

      <div className="container-fluid bg-body-secondary">
        <section className="py-5 text-center container-fluid bg-food">
          <div className="container">
            <div className="col-md-10 mx-auto py-lg-2">
                  <h1 className="text-center title py-2">Ingredients</h1>
                  <div className="separator"></div>
                  <div className="row mb-3">
                    {data.map((e)=>{
                    return (
                      <div className="col-sm-3 themed-grid-col">
                        <ul class="list-group">
                        <li class="list-group-item">
                          <i className="fa fa-check mx-2"></i>
                          {e.strIngredient}</li>
                        </ul>

                      </div>
                    );})}
                  </div>

            </div>
          </div>
        </section>
      </div>


    </React.Fragment>

    )
  };

export default IngredientsPage;