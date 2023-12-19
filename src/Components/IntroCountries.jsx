import { useEffect, useState} from 'react';
const countriesURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
import areaDescription from './Areas.json'
import { Link } from 'react-router-dom';


var excerpt;
// Function to short down a long description and generate an excerpt
const shorter = (phrase) =>{
  let arrayPh = phrase.split(' ');
  //console.log(arrayPh);
  arrayPh.length = 12;
  excerpt = arrayPh.join(' ');
}

var cloneCountry;

const IntroCountries = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(countriesURL)
    .then(res => res.json())
    .then((json) => setData(json.meals))
    .then(console.log(data))
    .catch(err => console.log(err));
  },[]);


  cloneCountry = [...data]


  for(let i=0;i<cloneCountry.length;i++){


    switch (cloneCountry[i].strArea){
      case "American": cloneCountry[i].flag = "fs-1 fi fi-us fi mb-2";
      cloneCountry[i].description = areaDescription.American;
      shorter(areaDescription.American);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "British": cloneCountry[i].flag = "fs-1 fi fi-gb fi mb-2";
      cloneCountry[i].description = areaDescription.British;
      shorter(areaDescription.British);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Canadian": cloneCountry[i].flag = "fs-1 fi fi-ca fi mb-2";
      cloneCountry[i].description = areaDescription.Canadian;
      shorter(areaDescription.Canadian);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Chinese": cloneCountry[i].flag = "fs-1 fi fi-cn fi mb-2";
      cloneCountry[i].description = areaDescription.Chinese;
      shorter(areaDescription.Chinese);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Croatian": cloneCountry[i].flag = "fs-1 fi fi-hr fi mb-2";
      cloneCountry[i].description = areaDescription.Croatian;
      shorter(areaDescription.Croatian);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Dutch": cloneCountry[i].flag = "fs-1 fi fi-nl fi mb-2";
      cloneCountry[i].description = areaDescription.Dutch;
      shorter(areaDescription.Dutch);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Egyptian": cloneCountry[i].flag = "fs-1 fi fi-eg fi mb-2";
      cloneCountry[i].description = areaDescription.Egyptian;
      shorter(areaDescription.Egyptian);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Filipino": cloneCountry[i].flag = "fs-1 fi fi-ph fi mb-2";
      cloneCountry[i].description = areaDescription.Filipino;
      shorter(areaDescription.Filipino);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "French": cloneCountry[i].flag = "fs-1 fi fi-fr fi mb-2";
      cloneCountry[i].description = areaDescription.French;
      shorter(areaDescription.French);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Greek": cloneCountry[i].flag = "fs-1 fi fi-gr fi mb-2";
      cloneCountry[i].description = areaDescription.Greek;
      shorter(areaDescription.Greek);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Indian": cloneCountry[i].flag = "fs-1 fi fi-in fi mb-2";
      cloneCountry[i].description = areaDescription.Indian;
      shorter(areaDescription.Indian);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Irish":  cloneCountry[i].flag = "fs-1 fi fi-ie fi mb-2";
      cloneCountry[i].description = areaDescription.Irish;
      shorter(areaDescription.Irish);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Italian": cloneCountry[i].flag = "fs-1 fi fi-it fi mb-2";
      cloneCountry[i].description = areaDescription.Italian;
      shorter(areaDescription.Italian);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Jamaican": cloneCountry[i].flag = "fs-1 fi fi-jm fi mb-2";
      cloneCountry[i].description = areaDescription.Jamaican;
      shorter(areaDescription.Jamaican);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Japanese": cloneCountry[i].flag = "fs-1 fi fi-jp fi mb-2";
      cloneCountry[i].description = areaDescription.Japanese;
      shorter(areaDescription.Japanese);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Mexican": cloneCountry[i].flag = "fs-1 fi fi-mx fi mb-2";
      cloneCountry[i].description = areaDescription.Mexican;
      shorter(areaDescription.Mexican);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Moroccan": cloneCountry[i].flag = "fs-1 fi fi-ma fi mb-2";
      cloneCountry[i].description = areaDescription.Moroccan;
      shorter(areaDescription.Moroccan);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Portuguese": cloneCountry[i].flag = "fs-1 fi fi-pt fi mb-2";
      cloneCountry[i].description = areaDescription.Portuguese;
      shorter(areaDescription.Portuguese);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Russian": cloneCountry[i].flag = "fs-1 fi fi-ru fi mb-2";
      cloneCountry[i].description = areaDescription.Russian;
      shorter(areaDescription.Russian);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Spanish": cloneCountry[i].flag = "fs-1 fi fi-es fi mb-2";
      cloneCountry[i].description = areaDescription.Spanish;
      shorter(areaDescription.Spanish);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Thai": cloneCountry[i].flag = "fs-1 fi fi-th fi mb-2";
      cloneCountry[i].description = areaDescription.Thai;
      shorter(areaDescription.Thai);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Tunisian": cloneCountry[i].flag = "fs-1 fi fi-tn fi mb-2";
      cloneCountry[i].description = areaDescription.Tunisian;
      shorter(areaDescription.Tunisian);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Turkish": cloneCountry[i].flag = "fs-1 fi fi-tr fi mb-2";
      cloneCountry[i].description = areaDescription.Turkish;
      shorter(areaDescription.Turkish);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Vietnamese": cloneCountry[i].flag = "fs-1 fi fi-vn fi mb-2";
      cloneCountry[i].description = areaDescription.Vietnamese;
      shorter(areaDescription.Vietnamese);
      cloneCountry[i].shorteDesc = excerpt;
      break
      case "Kenyan": delete cloneCountry[i];
      break
      case "Malaysian": delete cloneCountry[i];
      break
      case "Unknown": delete cloneCountry[i];
      break
      case "Polish": delete cloneCountry[i];
      break
    }
  }



  return(
    cloneCountry.map((d, i) => (
      <div  key={d.id} className="col-sm-4">
          <div className="bg-white p-2">
          <span className={d.flag}></span>
            <h4>{d.strArea}</h4>
            <p>{d.shorteDesc} ...</p>
            <p>
            <Link to={`/SingleCountry?${d.strArea}`} type="button" state={{ clicked: d.strArea }} className="text-danger text-decoration-none icon-link gap-1 icon-link-hover">
          Read all
          <i className='fa fa-arrow-right'></i>
        </Link>
        </p>
          </div>
      </div>

    ))

  )
}
export {IntroCountries, cloneCountry};