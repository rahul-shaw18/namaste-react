import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo
    ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    : [];

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          resCat={category.card.card}
              showItems={index == showIndex ? true : false}
              setShowIndexParent={()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
