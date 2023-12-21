import { Link } from "react-router-dom";
import slide2 from "../Components/slider/slide2.jpg"
import slide3 from "../Components/slider/slide3.jpg"
const Carousel = () => {

    return(
        <div id="myCarousel" className="carousel slide mb-6 d-none d-lg-block" data-bs-ride="carousel" data-bs-theme="light">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide2} className="img-fluid"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>Explore by Countries</h1>
                <p className="fs-4">If you're looking for recipes from different countries, you've come to the right place! WorldFood features a variety of international cuisines, including Italian, Chinese, Indian, Mexican, and more.</p>
                <p><Link className="btn btn-lg btn-warning" to="/Countries">Take a look</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <img src={slide3} className="img-fluid"/>
            <div className="container">
              <div className="carousel-caption">
              <h1>Explore by Categories</h1>
                <p className="fs-4">Our category section is filled with a variety of mouth-watering dishes that are sure to satisfy your cravings.</p>
                <p><Link className="btn btn-lg btn-warning" to="/Categories">Take a look</Link></p>
              </div>
            </div>
          </div>

        </div>

      </div>

    )
}
export {Carousel};