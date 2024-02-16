import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <h1>About page works!</h1>
            <Link to="/">Go to Homepage</Link> <br />
            <Link to="/contact">Go to contact Page</Link>
        </div>
    )
}
