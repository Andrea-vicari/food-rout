import React from "react";
import {recipeToAdd} from "./AddToFav"
import logo from "./Common/Logo_Food_black.svg"
import { Link } from "react-router-dom";

const FavRecList = () => {

  console.log(recipeToAdd)
    return (
    <React.Fragment>
      <div className="container-fluid bg-food">
        <div className="container">
          <main className="col-lg-12 text-center mx-auto py-5">

              <img className="mb-4" src={logo} alt="" width="122"/>
              <h1 className="h3 mb-3 fw-normal">Favourite Recipes</h1>
              <p className="fs-5">Here are the recipes you have added to the favorites section. You can review them calmly and try your hand at the preparation.</p>
              <p className="fs-4">Bon Appetit!</p>
              <div className="row mb-2">
                {recipeToAdd.map((e)=>{
                  return (
                  <div className="col-md-3">

                    <div className="card mb-3">
                      <img src={e.strMealThumb} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{e.strMeal}</h5>

                        <Link to={`/SingleRecCat?${e.idMeal}`} state={{ clicked: e.idMeal }} className="icon-link gap-1 icon-link-hover">
                            Enjoy the recipe

                          </Link>
                      </div>
                    </div>

                  </div>
                );})}
              </div>
          </main>
        </div>
        </div>
    </React.Fragment>

    )
  };

export default FavRecList;