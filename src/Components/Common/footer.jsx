import React from "react";
import logo from "../Common/Logo_Food_yellow.svg"
import logoReact from "../Common/react.svg"
import { Link } from "react-router-dom";
import CookieConsent, { Cookies } from "react-cookie-consent";

function Footer() {
  return(

    <div className="container-fluid bg-black">
        <div className="container">
        <footer className="py-1 text-center">
        <img src={logo} className="d-block mx-auto" width='100'></img>
            <ul className="nav justify-content-center border-bottom">
                <li className="nav-item mx-2">
                  <Link to="https://github.com/Andrea-vicari/food-rout" target="_blank" className="nav-link px-2 text-white small">
                    <i className="fab fa-github mx-1"></i>
                    GitHub
                  </Link>
                </li>
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link px-2 text-white small">Home</Link>
                </li>
              <li className="nav-item mx-2">
                <Link to="/Credits" className="nav-link px-2 text-warning small">Credits</Link>
              </li>
            </ul>
      <small className="col-md-4 mb-0 mt-3 text-white text-center">© 2023 World Food || <img src={logoReact} width='20'></img> project by
      <Link className="text-decoration-none mx-1" to="https://cv-react-vite-phi.vercel.app/" target="_blank">A.V.</Link></small>
      <CookieConsent
        location="bottom"
        buttonText="Ok, Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        >
        This website uses cookies to enhance the user experience. Only functional cookies are used, no adv cookies or any user data will be collected.
        </CookieConsent>
          </footer>

    </div>
  </div>


)
}

export default Footer;
