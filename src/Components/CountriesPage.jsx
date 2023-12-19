import React from "react";
import { IntroCountries } from "./IntroCountries";

const CountriesPage = () => {
    return (
    <React.Fragment>

      <div className="container-fluid bg-body-secondary">
      <section className="py-5 text-center container-fluid bg-food">
              <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
              <h4 className="text-center">If you're looking for recipes from different countries, you've come to the right place! Our website features a variety of international cuisines, including Italian, Chinese, Indian, Mexican, and more. Each section is filled with delicious and authentic recipes that are sure to transport your taste buds around the world. Whether you're in the mood for spicy Indian curries or classic Italian pasta dishes, we've got you covered.</h4>
              </div>
              </div>
              </section>
            <div className="col-md-8 mx-auto text-center py-lg-2">
              <h1 className="text-center title py-2">Countries</h1>
              <div className="separator"></div>

            </div>

              <div id="countries" className="container mx-auto row g-3 pb-lg-5 row-cols-1 row-cols-lg-6">
                <IntroCountries />
              </div>
      </div>
    </React.Fragment>

    )
  };

export default CountriesPage;