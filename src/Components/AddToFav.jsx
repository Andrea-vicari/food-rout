import React from "react";
import {sinRecIngListEXP} from "./SingleRecCat";
import { Link } from "react-router-dom";

var recipeToAdd = [];

console.log(recipeToAdd);

const AddToFav = () => {

const insertFav = () =>{
    recipeToAdd.push(sinRecIngListEXP);
    console.log(recipeToAdd)

}


return(
    <div className="container">
        <p className="my-0 fs-5">Add to Favorites</p>
        <i className="fs-2 fa fa-heart text-danger" onClick={()=>insertFav()}></i>

    </div>
)
}

export {AddToFav,recipeToAdd};