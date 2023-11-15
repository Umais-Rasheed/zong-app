import React from 'react';
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg m-2"  >
      <div className="container-fluid">
        <div >
          <Link to="home">
            <img src="assits/zong_logo.svg " alt="Logo"
              width="120"
              height="50"
              className="d-inline-block align-top" />
          </Link>
        </div>
        <div>
          <img src="assits/cm_logo.svg " alt="Logo-2"
            width="80"
            height="30"
            className="d-inline-block align-top" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-flex">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Prepaid">Prepaid</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Postpad">Postpaid</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Devices">Devices</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/interzong">International</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Onlineform">Online Booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Paymax</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Consumer Complaints</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Payment Methods</Link>
            </li>
          </ul>
          <div>
            <i className="fa-solid fa-language mx-2">اردو</i>
            <i className="fa-solid fa-magnifying-glass fa-rotate-90 mx-2" ></i>
            <i className="fa-solid fa-user mx-2"></i>
          </div>
        </div>
      </div>
    </nav>
  )
};
export default navbar
