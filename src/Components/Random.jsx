import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
const RandomRecipeURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

var responseRandom;
var randomJSON;
var randomCloneExport;

var randomThumb;
var randomTitle;
var randomID;
var randomDirections;
var directionsArray;
var trimmedDirections;

async function getDatafromTheAPI(){
    try{
        responseRandom = await fetch(RandomRecipeURL);
        randomJSON = await responseRandom.json();

    }
    catch(e){
        alert(`Error: ${e}`);
      }
}

getDatafromTheAPI();

const RandomRecipe = () => {
    console.log(randomJSON);

    randomCloneExport = {...randomJSON}

    console.log(randomCloneExport)

    for(let prop in randomJSON){
        randomTitle = randomJSON[prop][0].strMeal;
        randomID = randomJSON[prop][0].idMeal;
        randomThumb = randomJSON[prop][0].strMealThumb;
        randomDirections = randomJSON[prop][0].strInstructions;
        directionsArray = randomDirections.split(' ');
        directionsArray.length = 52;
        trimmedDirections = directionsArray.join(' ');
    }

    console.log(randomDirections);

    console.log(directionsArray);

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(RandomRecipeURL)
      .then(res => res.json())
      .then((json) => setData(json.meals))
      .then(console.log(data))
      .catch(err => console.log(err));
    },[]);



    return(



        <div className="px-4 py-3 text-center bg-random">
            <h2 className="fw-bold">Recipe of the day</h2>
            <div className="separator"></div>
            <img className="rounded-circle d-block mx-auto my-4" src={randomThumb} alt="" width="250"/>
            <h3 className="fw-bold text-warning">{randomTitle}</h3>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{trimmedDirections}...</p>

                <Link type="button" className="btn btn-outline-dark btn-lg px-4 gap-3" to={`/SingleRandom?${randomTitle}`}>
                    <i className='fa fa-smile m-2'></i>
                    Enjoy the recipe</Link>
            </div>
     </div>



    )
}


export {RandomRecipe,randomCloneExport};