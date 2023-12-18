import React from "react";
//import { SingleRecExp } from "./SingleRecCat";
import place from "../Components/placeholder.jpg";

//console.log(SingleRecExp)


const SingleRecDesc = () => {



    return(

      <div className="container">
        <div className="main col-md-12">
        <h1 className="page-title">AIUTOOO</h1>
          <div className="row border-2">
              <div className="col-lg-6 mb-2">
                <img src={place} className="d-block img-fluid" loading="lazy"/>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-1">
                  <h3>Ingredients</h3>
                </div>
                <div className="card-body">

                  {/*<IngredientsListCategory /> */}

                </div>

                </div>
              </div>

              <h3>Directions</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero harum aut commodi eos natus. Officia beatae aperiam, esse delectus aliquam praesentium rerum distinctio magnam necessitatibus, dolorum quo et nihil consectetur.</p>


          </div>



        </div>
        </div>

    )
}
export {SingleRecDesc};