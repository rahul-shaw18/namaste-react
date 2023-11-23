import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

    if (resInfo == null) {
        return (<Shimmer />)
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info
    const { itemCards } = resInfo ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card : []
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h1></h1>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} -{" RS."} {(item?.card?.info?.price) / 100 || (item?.card?.info?.defaultPrice) / 100 }</li>
                )}

            </ul>
        </div>
    )
}

export default RestaurantMenu