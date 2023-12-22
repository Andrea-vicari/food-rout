import React from "react";
import { Link } from "react-router-dom";
import logo from "../Common/Logo_Food_black.svg"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container">
    <Link className="navbar-brand" to="/">
    <img src={logo} width='120'></img>
    </Link>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
        <i className='fa fa-bars fs-3 text-black'></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav col-lg-10  d-flex justify-content-around align-content-end">
        <li className="nav-item fs-5 d-flex align-items-center">
          <i className='fa fa-home d-none d-sm-block'></i>
            <Link className="nav-link" to="/" data-bs-toggle="collapse">Home</Link>
        </li>
        <li className="nav-item fs-5 d-flex align-items-center">
          <i className='fa fa-book d-none d-sm-block'></i>
          <Link className="nav-link" to="/Categories" data-bs-toggle="collapse">Categories</Link>
        </li>
        <li className="nav-item fs-5 d-flex align-items-center">
          <i className='fa fa-globe d-none d-sm-block'></i>
          <Link className="nav-link" to="/Countries" data-bs-toggle="collapse">Countries</Link>
        </li>

      </ul>
      <Link to="/FavRecList" className="text-decoration-none" data-bs-toggle="collapse">
      <i className="px-2 text-black fa fa-heart fs-5"></i>
      </Link>
    </div>
  </div>
</nav>
  );
}
export default Header