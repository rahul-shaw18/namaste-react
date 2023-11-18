import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          onChange={(e) => {
            let inputValue = e.target.value.toLocaleLowerCase();
            let searchedList = resList.filter((res) =>
              res.resName.toLocaleLowerCase().includes(inputValue)
            );
            setRestaurantList(inputValue ? searchedList : resList);
          }}
        />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            restaurantList = restaurantList.filter((res) => res.rating > 4);
            setRestaurantList(restaurantList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
