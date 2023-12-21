import React from "react";
import {sinRecIngListEXPCountry} from "./SingleRecCountry";


var recipeToAdd = [];

console.log(recipeToAdd);

const AddToFavCountry = () => {

const insertFav = () =>{
    recipeToAdd.push(sinRecIngListEXPCountry);
    console.log(recipeToAdd)

}

return(
    <div className="container">
        <p className="my-0 fs-5">Add to Favorites</p>
        <i className="fs-2 fa fa-heart text-danger" onClick={()=>insertFav()}></i>

    </div>
)
}

export {AddToFavCountry,recipeToAdd};