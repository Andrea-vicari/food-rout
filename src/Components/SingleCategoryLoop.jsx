import React from "react";
import { useEffect, useState} from 'react';
import { catToExp } from "./SingleCategory";

const SingleCategoryLoop = () => {



    return (

    <React.Fragment>


        <div className="col-sm-4">
            <div className="card mb-3" width='540'>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
        </div>



    </React.Fragment>

    )

};

export {SingleCategoryLoop};