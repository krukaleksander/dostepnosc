import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Law from "../pages/Law";
import Requirements from "../pages/Requirements";
import Materials from "../pages/Materials";
import Contact from "../pages/Contact";
import Logo from "../components/Logo";

function Menu() {
  return (
    <Router>
      <div>
        <div className="navigation-wrapper">
          <Logo />
          <ul className="navigation">
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/prawo">Prawo</Link>
            </li>
            <li>
              <Link to="/wymogi">Wymogi</Link>
            </li>
            <li>
              <Link to="/materialy">Materiały</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/prawo" element={<Law />} />
          <Route exact path="/wymogi" element={<Requirements />} />
          <Route exact path="/materialy" element={<Materials />} />
          <Route exact path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Menu;
