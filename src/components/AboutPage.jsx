import { Link } from "react-router-dom";
import Task from "./Task";

function AboutPage() {
    return (
        <Task>
            <Link
                to={{
                    pathname: "/",
                }}
                style={{ color: "white", textDecoration: "none" }}
            >
                Back to home
            </Link>
        </Task>
    );
}

export default AboutPage;
