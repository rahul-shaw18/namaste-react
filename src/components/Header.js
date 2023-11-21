import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  let [btnStatus, setBtnStatus] = useState(false)

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button onClick={() => {
            btnStatus = !btnStatus;
            setBtnStatus(btnStatus)
          }}>{btnStatus ? 'Login' : 'Logout'}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header