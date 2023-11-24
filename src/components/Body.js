import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  let filteredResult = [];
  let restaurantList = useRestaurantList();
  let [searchResut, setSearchResult] = useState([]);

  // const RestaurantCardPromoterd = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    setSearchResult(restaurantList);
  }, [restaurantList]);

  // const fetchData = async () => {
  //   const data = await fetch(RESTAURANT_API);

  //   const json = await data.json()

  //   setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants)
  //   setSearchResult(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants)
  // }

  const{setUserName, loggedInUser}= useContext(UserContext)

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks Like you are offline, please check your internet</h1>;
  }

  return restaurantList?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            onChange={(e) => {
              let inputValue = e.target.value.toLocaleLowerCase();
              filteredList = restaurantList.filter((restautant) =>
                restautant.info.name.toLocaleLowerCase().includes(inputValue)
              );
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              setSearchResult(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button className="filter-btn px-4 py-1 bg-green-100 m-4 rounded-lg">
            Top Rated Restaurant
          </button>
        </div>

        <div className="flex items-center">
          <label htmlFor="">UserName </label>
            <input className="p-2 border border-black" type="text" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)} }/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {searchResut?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
            {/* {restaurant.data.promoted ? (
              <RestaurantCardPromoterd resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
