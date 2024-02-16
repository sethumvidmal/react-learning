import { Link } from "react-router-dom";

export default function Contact(){
    return (
        <div>
            <h1>Contact page works!</h1>
            <Link to="/">Go to Hompage</Link> <br />
            <Link to="/about">Go to About Page</Link>
        </div>
    )
}