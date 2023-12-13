import { useEffect, useState} from 'react';
const countriesURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
import areaDescription from './Areas.json'
import { Link } from 'react-router-dom';


var excerpt;
// Function to short down a long description and generate an excerpt
const shorter = (phrase) =>{
  let arrayPh = phrase.split(' ');
  console.log(arrayPh);
  arrayPh.length = 12;
  excerpt = arrayPh.join(' ');
}


const IntroCountries = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(countriesURL)
    .then(res => res.json())
    .then((json) => setData(json.meals))
    .then(console.log(data))
    .catch(err => console.log(err));
  },[]);


  // !! Important: ES6 clone of data, to delete countries with empty flag from the
  //  Clone, otherwise it will crash, can't loop through empty props in the object
  const cloneData = [...data]


  for(let i=0;i<cloneData.length;i++){


    switch (cloneData[i].strArea){
      case "American": cloneData[i].flag = "fs-1 fi fi-us fi mb-2";
      cloneData[i].description = areaDescription.American;
      shorter(areaDescription.American);
      cloneData[i].shorteDesc = excerpt;
      break
      case "British": cloneData[i].flag = "fs-1 fi fi-gb fi mb-2";
      cloneData[i].description = areaDescription.British;
      shorter(areaDescription.British);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Canadian": cloneData[i].flag = "fs-1 fi fi-ca fi mb-2";
      cloneData[i].description = areaDescription.Canadian;
      shorter(areaDescription.Canadian);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Chinese": cloneData[i].flag = "fs-1 fi fi-cn fi mb-2";
      cloneData[i].description = areaDescription.Chinese;
      shorter(areaDescription.Chinese);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Croatian": cloneData[i].flag = "fs-1 fi fi-hr fi mb-2";
      cloneData[i].description = areaDescription.Croatian;
      shorter(areaDescription.Croatian);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Dutch": cloneData[i].flag = "fs-1 fi fi-nl fi mb-2";
      cloneData[i].description = areaDescription.Dutch;
      shorter(areaDescription.Dutch);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Egyptian": cloneData[i].flag = "fs-1 fi fi-eg fi mb-2";
      cloneData[i].description = areaDescription.Egyptian;
      shorter(areaDescription.Egyptian);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Filipino": cloneData[i].flag = "fs-1 fi fi-ph fi mb-2";
      cloneData[i].description = areaDescription.Filipino;
      shorter(areaDescription.Filipino);
      cloneData[i].shorteDesc = excerpt;
      break
      case "French": cloneData[i].flag = "fs-1 fi fi-fr fi mb-2";
      cloneData[i].description = areaDescription.French;
      shorter(areaDescription.French);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Greek": cloneData[i].flag = "fs-1 fi fi-gr fi mb-2";
      cloneData[i].description = areaDescription.Greek;
      shorter(areaDescription.Greek);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Indian": cloneData[i].flag = "fs-1 fi fi-in fi mb-2";
      cloneData[i].description = areaDescription.Indian;
      shorter(areaDescription.Indian);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Irish":  cloneData[i].flag = "fs-1 fi fi-ie fi mb-2";
      cloneData[i].description = areaDescription.Irish;
      shorter(areaDescription.Irish);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Italian": cloneData[i].flag = "fs-1 fi fi-it fi mb-2";
      cloneData[i].description = areaDescription.Italian;
      shorter(areaDescription.Italian);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Jamaican": cloneData[i].flag = "fs-1 fi fi-jm fi mb-2";
      cloneData[i].description = areaDescription.Jamaican;
      shorter(areaDescription.Jamaican);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Japanese": cloneData[i].flag = "fs-1 fi fi-jp fi mb-2";
      cloneData[i].description = areaDescription.Japanese;
      shorter(areaDescription.Japanese);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Mexican": cloneData[i].flag = "fs-1 fi fi-mx fi mb-2";
      cloneData[i].description = areaDescription.Mexican;
      shorter(areaDescription.Mexican);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Moroccan": cloneData[i].flag = "fs-1 fi fi-ma fi mb-2";
      cloneData[i].description = areaDescription.Moroccan;
      shorter(areaDescription.Moroccan);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Portuguese": cloneData[i].flag = "fs-1 fi fi-pt fi mb-2";
      cloneData[i].description = areaDescription.Portuguese;
      shorter(areaDescription.Portuguese);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Russian": cloneData[i].flag = "fs-1 fi fi-ru fi mb-2";
      cloneData[i].description = areaDescription.Russian;
      shorter(areaDescription.Russian);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Spanish": cloneData[i].flag = "fs-1 fi fi-es fi mb-2";
      cloneData[i].description = areaDescription.Spanish;
      shorter(areaDescription.Spanish);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Thai": cloneData[i].flag = "fs-1 fi fi-th fi mb-2";
      cloneData[i].description = areaDescription.Thai;
      shorter(areaDescription.Thai);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Tunisian": cloneData[i].flag = "fs-1 fi fi-tn fi mb-2";
      cloneData[i].description = areaDescription.Tunisian;
      shorter(areaDescription.Tunisian);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Turkish": cloneData[i].flag = "fs-1 fi fi-tr fi mb-2";
      cloneData[i].description = areaDescription.Turkish;
      shorter(areaDescription.Turkish);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Vietnamese": cloneData[i].flag = "fs-1 fi fi-vn fi mb-2";
      cloneData[i].description = areaDescription.Vietnamese;
      shorter(areaDescription.Vietnamese);
      cloneData[i].shorteDesc = excerpt;
      break
      case "Kenyan": delete cloneData[i];
      break
      case "Malaysian": delete cloneData[i];
      break
      case "Unknown": delete cloneData[i];
      break
      case "Polish": delete cloneData[i];
      break
    }
  }



  return(
    cloneData.map((d, i) => (
      <div  key={d.id} className="col-sm-4">
          <div className="bg-white p-2">
          <span className={d.flag}></span>
            <h4>{d.strArea}</h4>
            <p>{d.shorteDesc} ...</p>
            <p>
            <Link to="/SingleRecipe" className="text-danger text-decoration-none icon-link gap-1 icon-link-hover stretched-link">
          Read all
          <i className='fa fa-arrow-right'></i>
        </Link>
        </p>
          </div>
      </div>

    ))

  )
}
export {IntroCountries};