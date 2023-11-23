import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

  let [btnStatus, setBtnStatus] = useState(false)
  let onlineStatus = useOnlineStatus()
  // console.log(useState())

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li className={onlineStatus ? "online":"offline"}>{ onlineStatus ? "online":"offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
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