import React from "react";
import { sinRecIngListEXPCountry } from "./SingleRecCountry";

const IngredientsListCountry = () => {

  console.log(sinRecIngListEXPCountry);
  var ingredientArray = [];
  var measureArray = [];
  const ingreRegex = /strIngredi/;
  const measureRegex = /strMeasure/;

  for(let prop in sinRecIngListEXPCountry){

      let tester_Ingredients = ingreRegex.test(prop);
      let tester_Measures = measureRegex.test(prop);

      if(tester_Ingredients==true && sinRecIngListEXPCountry[prop] != "" && tester_Ingredients==true && sinRecIngListEXPCountry[prop] != " " && sinRecIngListEXPCountry[prop] != null){
        ingredientArray.push(sinRecIngListEXPCountry[prop]);
      }
      else if(tester_Measures==true && sinRecIngListEXPCountry[prop] != "" && tester_Measures==true && sinRecIngListEXPCountry[prop] != " " && sinRecIngListEXPCountry[prop] != null){
        measureArray.push(sinRecIngListEXPCountry[prop]);
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
export {IngredientsListCountry};