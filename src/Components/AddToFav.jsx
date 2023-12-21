import React from "react";
import {sinRecIngListEXP} from "./SingleRecCat";
import {sinRecIngListEXPCountry} from "./SingleRecCountry";


var recipeToAdd = [];

console.log(recipeToAdd);

const AddToFav = () => {

let currentURL = window.location.pathname;
console.log(currentURL)

let toBeClicked;

currentURL == "/SingleRecCat" ? toBeClicked = sinRecIngListEXP : toBeClicked = sinRecIngListEXPCountry

console.log(toBeClicked)



const insertFav = (toexp) =>{
    recipeToAdd.push(toexp);
    console.log(recipeToAdd);
}

return(
    <div className="container">
        <p className="my-0 fs-5">Add to Favorites</p>

        <i className="fs-2 fa fa-heart text-danger" onClick={()=>insertFav(toBeClicked)}></i>

    </div>
)
}

export {AddToFav,recipeToAdd};