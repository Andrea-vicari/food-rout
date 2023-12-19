import React from "react";
import {recipeToAdd} from "./AddToFav"
import logo from "./Common/Logo_Food_black.svg"

const FavRecList = () => {

  console.log(recipeToAdd)
    return (
    <React.Fragment>
      <div className="container-fluid bg-food">
        <div className="container">
          <main className="col-lg-10 text-center mx-auto py-5">

              <img className="mb-4" src={logo} alt="" width="122"/>
              <h1 className="h3 mb-3 fw-normal">Favourite Recipes</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident recusandae amet sunt odit, mollitia nemo aliquid quos inventore minus. Molestias quisquam nemo facere recusandae dolorum placeat, soluta officiis iusto modi?</p>
              <div className="row mb-2">
                  <div className="col-md-6">


                    <div className="card mb-3">
                      <img src={logo} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                            Continue reading

                          </a>
                      </div>
                    </div>
                  </div>

              </div>
          </main>
        </div>
        </div>
    </React.Fragment>

    )
  };

export default FavRecList;