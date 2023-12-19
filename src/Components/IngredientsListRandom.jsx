import React from "react";
import { randomCloneExport } from "./Random";

const IngredientsListRandom = () => {

  var ingredientArray = [];
  var measureArray = [];
  const ingreRegex = /strIngredi/;
  const measureRegex = /strMeasure/;

  for(let prop in randomCloneExport.meals[0]){

      let tester_Ingredients = ingreRegex.test(prop);
      let tester_Measures = measureRegex.test(prop);

      if(tester_Ingredients==true && randomCloneExport.meals[0][prop] != "" && tester_Ingredients==true && randomCloneExport.meals[0][prop] != " " && randomCloneExport.meals[0][prop] != null){
        ingredientArray.push(randomCloneExport.meals[0][prop]);
      }
      else if(tester_Measures==true && randomCloneExport.meals[0][prop] != "" && tester_Measures==true && randomCloneExport.meals[0][prop] != " " && randomCloneExport.meals[0][prop] != null){
        measureArray.push(randomCloneExport.meals[0][prop]);
      }
      else{
        // Do nothing
      }

  }



  var combinedArray = [];

    measureArray.forEach(function callback(value, index) {
      combinedArray.push([ingredientArray[index],": ", measureArray[index]])
    });



    return(

      combinedArray.map((d, i) => (
      <ul key={d} className="list-unstyled">
        <li className="list-group-item">
          <i className="fa fa-check mx-1"></i>
          {d}</li>
      </ul>
      ))
    )
}
export {IngredientsListRandom};