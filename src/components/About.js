import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            {/* <User name={"Rahul Shaw (function)"} location={"Kolkata"} contact={"rahul.shaw505@gmail.com"} /> */}
            <UserClass name={"Rahul Shaw (class)"} location={"Kolkata"} contact={"rahul.shaw505@gmail.com"}  />
        </div>
    )
}
export default About