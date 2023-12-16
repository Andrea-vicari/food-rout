import React from "react";
import { SingleCatLoopExp, whatClickedFromHome } from "./SingleCategory";


const SingleCategoryLoop = () => {


console.log(SingleCatLoopExp)

return (

  SingleCatLoopExp.map((d, i) => (



            <div className="col" id={i} key={i}>
              <div className="card shadow-sm">
                <img src={d.strMealThumb} className="bd-placeholder-img card-img-top"/>
                <div className="card-body">
                  <h4 className="card-text">{d.strMeal}</h4>
                  <div className="d-flex justify-content-between align-items-center">

                      <button type="button" className="btn btn-sm btn-outline-secondary">Enjoy the recipe</button>


                    <small className="text-danger">{whatClickedFromHome}</small>
                  </div>
                </div>
              </div>
            </div>






  ))

  )

};

export {SingleCategoryLoop};