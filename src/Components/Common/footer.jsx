import React from "react";
import logo from "../Common/Logo_Food_yellow.svg"
function Footer() {
  return(

    <div className="container-fluid bg-dark">
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
<p className="fs-5 col-md-4 mb-0 text-white">© 2023 World Food | A project by theMealDB</p>

<a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
  <img src={logo} width='200'></img>
</a>

<ul className="nav col-md-4 justify-content-end">
  <li className="nav-item"><a href="#" className="nav-link px-2 text-white fs-5">Home</a></li>
  <li className="nav-item"><a href="#" className="nav-link px-2 text-white fs-5">Features</a></li>
  <li className="nav-item"><a href="#" className="nav-link px-2 text-white fs-5">Pricing</a></li>
  <li className="nav-item"><a href="#" className="nav-link px-2 text-white fs-5">FAQs</a></li>
  <li className="nav-item"><a href="#" className="nav-link px-2 text-white fs-5">About</a></li>
</ul>
</footer>
    </div>
  </div>


)
}

export default Footer;
