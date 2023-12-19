import React from "react";
import { sinRecIngListEXP } from "./SingleRecCat";

const IngredientsListCat = () => {

  console.log(sinRecIngListEXP);
  var ingredientArray = [];
  var measureArray = [];
  const ingreRegex = /strIngredi/;
  const measureRegex = /strMeasure/;

  for(let prop in sinRecIngListEXP){

      let tester_Ingredients = ingreRegex.test(prop);
      let tester_Measures = measureRegex.test(prop);

      if(tester_Ingredients==true && sinRecIngListEXP[prop] != "" && tester_Ingredients==true && sinRecIngListEXP[prop] != " " && sinRecIngListEXP[prop] != null){
        ingredientArray.push(sinRecIngListEXP[prop]);
      }
      else if(tester_Measures==true && sinRecIngListEXP[prop] != "" && tester_Measures==true && sinRecIngListEXP[prop] != " " && sinRecIngListEXP[prop] != null){
        measureArray.push(sinRecIngListEXP[prop]);
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
export {IngredientsListCat};