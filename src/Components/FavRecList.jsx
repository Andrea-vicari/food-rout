import React from "react";

import logo from "./Common/Logo_Food_black.svg"

const FavRecList = () => {
    return (
    <React.Fragment>
      <div className="container-fluid bg-food">
        <div className="container">
          <main className="col-lg-10 text-center mx-auto py-5">

              <img className="mb-4" src={logo} alt="" width="72"/>
              <h1 className="h3 mb-3 fw-normal">Favourite Recipes</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident recusandae amet sunt odit, mollitia nemo aliquid quos inventore minus. Molestias quisquam nemo facere recusandae dolorum placeat, soluta officiis iusto modi?</p>
              <div className="row mb-2">
                  <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
                        <h3 className="mb-0">Featured post</h3>
                        <div className="mb-1 text-body-secondary">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                          Continue reading
                          <svg className="bi"><use xlink:href="#chevron-right"></use></svg>
                        </a>
                      </div>
                      <div className="col-auto d-none d-lg-block">
                        <img src={logo}></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                        <h3 className="mb-0">Post title</h3>
                        <div className="mb-1 text-body-secondary">Nov 11</div>
                        <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                          Continue reading
                          <svg className="bi"><use xlink:href="#chevron-right"></use></svg>
                        </a>
                      </div>
                      <div className="col-auto d-none d-lg-block">
                      <img src={logo}></img>
                      </div>
                    </div>
                  </div>
              </div>
          </main>
        </div>
        </div>
    </React.Fragment>

    )
  };

export default FavRecList;