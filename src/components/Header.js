import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnStatus, setBtnStatus] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  let onlineStatus = useOnlineStatus();
  // console.log(useState())

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  return (
    <div className="flex justify-between item-center bg-pink-100 shadow-lg sm:bg">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">{onlineStatus ? "Online🟢" : "Offline  🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg"><Link to="/cart">Cart({cartItems.length} items)</Link></li>
          <li className="px-4">{loggedInUser}</li>
          <li className="px-4">
            <button
              onClick={() => {
                btnStatus = !btnStatus;
                setBtnStatus(btnStatus);
              }}
            >
              {btnStatus ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
