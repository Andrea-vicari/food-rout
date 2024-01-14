import React from "react";
import  pixabay  from "./slider/logo_pixabay.svg";
import meal  from "./slider/logo-TheMealDB.png";
import logoReact from "./slider/react.svg"

const Credits = () => {


    return (
    <React.Fragment>
      <div className="container-fluid bg-food">
        <div className="container">
          <main className="col-lg-12 text-center mx-auto py-5">
              <h1 className="mb-3 fw-normal">Credits</h1>

              <img src={meal} width="300"></img>
              <p className="fs-5">An open, crowd-sourced database of Recipes with free API.</p>

              <h2>ICON-FLAG</h2>
              <p className="fs-5">A curated collection of all country flags in SVG</p>
              <img src={pixabay} width="300"></img>

              <p className="fs-5">Royalty-free images, videos, audio and other media.</p>
              <p className="fs-3 mt3">Technology</p>
              <img src={logoReact} width="50" className="mb-2"></img>
              <p className="fs-5">Application coded using React</p>

          </main>
        </div>
        </div>
    </React.Fragment>

    )
  };

export default Credits;