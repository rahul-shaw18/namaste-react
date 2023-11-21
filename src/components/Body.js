import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  let filteredResult = []
  let [restaurantList, setRestaurantList] = useState([]);
  let [searchResut, setSearchResult] = useState([])

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json()

    setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)
    setSearchResult(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)
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
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
};

export default Body;
