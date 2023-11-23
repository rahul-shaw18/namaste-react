import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  let filteredResult = []
  let restaurantList = useRestaurantList();
  let [searchResut, setSearchResult] = useState([])

  useEffect(() => {
    setSearchResult(restaurantList)
  }, [restaurantList])

  // const fetchData = async () => {
  //   const data = await fetch(RESTAURANT_API);

  //   const json = await data.json()

  //   setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants)
  //   setSearchResult(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants)
  // }

  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false) {
    return ( 
      <h1>Looks Like you are offline, please check your internet</h1>
    )
  }

  return restaurantList?.length == 0 ? <Shimmer /> : (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          onChange={(e) => {
            let inputValue = e.target.value.toLocaleLowerCase();
            filteredList = restaurantList.filter((restautant) => restautant.info.name.toLocaleLowerCase().includes(inputValue))

          }}
        />
        <button onClick={() => {
          setSearchResult(filteredList)
        }}
        >Search</button>
      </div>
      <div className="filter">
        <button className="filter-btn" >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {searchResut?.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard resData={restaurant} /></Link>
          
        ))}
      </div>
    </div>
  )
};

export default Body;
