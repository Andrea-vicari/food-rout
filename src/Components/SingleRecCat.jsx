import React from "react";
import { BreadCumb } from "./BreadCumb";
import { SingleCatLoopExp } from "./SingleCategoryLoop";
import { useLocation} from "react-router-dom";
import place from "../Components/placeholder.jpg"


var filterRec;
var whatRecipe;

const SingleRecCat = () => {

  let { state } = useLocation();
  whatRecipe = state.clicked; // example "Chicken"


  filterRec = SingleCatLoopExp.filter((element)=> element.idMeal == whatRecipe);
  console.log(filterRec)

    return (

    <React.Fragment>
      <BreadCumb />

      <div className="container">
        <div className="main col-md-12">
        <h1 className="page-title">titolo</h1>
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

                  {/** <IngredientsListRandom /> */}

                </div>

                </div>
              </div>

              <h3>Directions</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero harum aut commodi eos natus. Officia beatae aperiam, esse delectus aliquam praesentium rerum distinctio magnam necessitatibus, dolorum quo et nihil consectetur.</p>


          </div>



        </div>
        </div>

    </React.Fragment>

    )
};

export {SingleRecCat};