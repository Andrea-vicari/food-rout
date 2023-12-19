import React from "react";
import { IntroCat } from "./IntroCat";

const CategoriesPage = () => {
    return (
    <React.Fragment>
      <div className="container mx-auto">
            <div className="col-md-10 mx-auto text-center py-lg-2">
            <h1 className="text-center title py-2">Categories</h1>
            <div className="separator"></div>
            <h4 className="text-center">Our category section is filled with a variety of mouth-watering dishes that are sure to satisfy your cravings. From hearty main courses to sweet and satisfying desserts, we have something for everyone. So, take a look around and see what catches your eye</h4>
            </div>
        </div>
        <div id="categ_container" className="container mx-auto row g-3 py-2 row-cols-1 row-cols-lg-4">
          <IntroCat />
        </div>

    </React.Fragment>

    )
  };

export default CategoriesPage;