import { useState, useEffect } from 'react'

const User = ({ name, location, contact }) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() => {
        const data = await fetch("https://api.github.com/users/rahul-shaw18")
        const json = await data.json()

        console.log(json)
    }
    return (
        <div className="user-card">
            <h1 onClick={() => {
                setCount(count+1);
            }}>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
        </div>
    )
}

export default User 