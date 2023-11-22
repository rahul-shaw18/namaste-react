import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

  // let [btnStatus, setBtnStatus] = useState(false)
  console.log(useState())

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          {/* <li><button onClick={() => {
            btnStatus = !btnStatus;
            setBtnStatus(btnStatus)
          }}>{btnStatus ? 'Login' : 'Logout'}</button></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header