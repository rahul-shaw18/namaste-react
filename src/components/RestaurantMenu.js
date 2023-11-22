import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import { MENU_API } from "../utils/constants"

const RestaurantMenu = () => {
    const {resId} = useParams()

    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)

        const json = await data.json()

        console.log(json)
        setResInfo(json.data)
    }

    if (resInfo == null) {
        return (<Shimmer />)
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    

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