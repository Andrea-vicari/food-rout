import React from "react";
import {sinRecIngListEXP} from "./SingleRecCat";
import {sinRecIngListEXPCountry} from "./SingleRecCountry";

var recipeType;
var recipeToAdd = [];
var typeToAdd = [];
console.log(recipeToAdd);

const AddToFav = () => {

let currentURL = window.location.pathname;
console.log(currentURL)

let toBeClicked;


currentURL == "/SingleRecCat" ? toBeClicked = sinRecIngListEXP : toBeClicked = sinRecIngListEXPCountry;
currentURL == "/SingleRecCat" ? recipeType = "/SingleRecCat?" : recipeType = "/SingleRecCountry?";
console.log(toBeClicked)



const insertFav = (toexp) =>{
    toexp.type = recipeType;
    recipeToAdd.push(toexp);
    console.log(recipeToAdd);
    document.getElementById("staticBackdrop").classList.add('d-block');
}

const closeModal = () => {
    document.getElementById("staticBackdrop").classList.remove('d-block');
}

return(
    <React.Fragment>
        <a>
        <i className="fs-2 fa fa-heart text-danger px-1" onClick={()=>insertFav(toBeClicked)}></i>Add to Favorites
        </a>

        <div className="modal modal-sheet bg-body-tertiary" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Recipe Added</h1>
                    <button type="button" onClick={()=>closeModal()} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    You can find this recipe in the Favourite ❤️ section
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={()=>closeModal()} data-bs-dismiss="modal">Ok, Close</button>

                </div>
                </div>
            </div>
        </div>
    </React.Fragment>

)
}

export {AddToFav,recipeToAdd};