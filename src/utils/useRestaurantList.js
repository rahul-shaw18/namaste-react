import { useState, useEffect } from 'react'
import { RESTAURANT_API } from './constants'


const useRestaurantList = () => {

    const [restaurantList, setRestaurantList] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API)
        const json = await data.json()
        setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    return restaurantList
}

export default useRestaurantList