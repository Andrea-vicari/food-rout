import React from "react";
import { Carousel } from "./Carousel";
import { IntroCat } from "./IntroCat";
import { RandomRecipe } from './Random';
import { IntroCountries } from './IntroCountries';

function Home() {
  return (
    <React.Fragment>
        <Carousel />
        <div className="container mx-auto">
            <div className="col-md-10 mx-auto text-center py-lg-2">
            <h1 className="text-center title py-2">Categories</h1>
            <div className="separator"></div>
            <p className="text-center">Our category section is filled with a variety of mouth-watering dishes that are sure to satisfy your cravings. From hearty main courses to sweet and satisfying desserts, we have something for everyone. So, take a look around and see what catches your eye</p>
            </div>
        </div>
        <div id="categ_container" className="container mx-auto row g-3 py-2 row-cols-1 row-cols-lg-4">
          <IntroCat />
        </div>
        <RandomRecipe />

      <div className="col-md-8 mx-auto text-center py-lg-2">
        <h1 className="text-center title py-2">Countries</h1>
        <div className="separator"></div>
        <p className="text-center">If you're looking for recipes from different countries, you've come to the right place! Our website features a variety of international cuisines, including Italian, Chinese, Indian, Mexican, and more. Each section is filled with delicious and authentic recipes that are sure to transport your taste buds around the world. Whether you're in the mood for spicy Indian curries or classic Italian pasta dishes, we've got you covered.</p>
      </div>

        <div id="countries" className="container mx-auto row g-3 pb-lg-5 row-cols-1 row-cols-lg-6">
          <IntroCountries />
        </div>



    </React.Fragment>
  );
}
export default Home