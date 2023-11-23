import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
            
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/rahul-shaw18")
        const json = await data.json()
        console.log(json)

        this.setState({userInfo:json})
    }
    componentDidUpdate() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({
              seconds: prevState.seconds + 1,
            }));
          }, 1000);
     }
    componentWillUnmount(){}
    render() {
        const { name, login, url } = this.state.userInfo
        return (
            <div className="user-card">
                {/* <h1 >Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count increment</button> */}
                <h2>Name: {name}</h2>
                <h3>login: {login}</h3>
                <h4>URL: {url}</h4>
            </div>
        )
    }
}

export default UserClass