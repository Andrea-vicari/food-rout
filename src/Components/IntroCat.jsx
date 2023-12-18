import { useEffect, useState} from 'react';
import { Link } from "react-router-dom";

var CAT_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

var catExpObj;
const IntroCat = () => {

  const [urlAPI, setURL] = useState("");


  var trimmedDescArr;
  var trimmedDesc;
  var totalTrim = [];

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(CAT_URL)
      .then(res => res.json())
      .then((json) => setData(json.categories))
      .then(console.log(data))
      .catch(err => console.log(err));
  },[]);



  catExpObj = [...data]

  for(let i=0;i<data.length;i++){


    // Get the descriprtion and split int an array
    trimmedDescArr = data[i].strCategoryDescription.split(' ');

    // Cut the array to max N length
    trimmedDescArr.length = 10;

    trimmedDesc = trimmedDescArr.join(' ');
    totalTrim.push(trimmedDesc);
  }

    return(

      data.map((d, i) => (

        <div key={d.id} className="col-sm-2" id={1+1000}>
          <div className="card mb-3" id={i}>
              <img src={d.strCategoryThumb} className="card-img-top"/>
              <div className="card-body" id={i+100}>
                <h5 className="card-title">{d.strCategory}</h5>
                <p className="card-text">{totalTrim[i]}..</p>

              <Link to={`/SingleCategory?${d.strCategory}`} type="button" state={{ clicked: d.strCategory }} className="btn btn-sm btn-outline-dark">
              <i className='fa fa-search m-1'></i>
              Explore Category</Link>
            </div>
          </div>
        </div>





      ))
    )
}
export {IntroCat, catExpObj};