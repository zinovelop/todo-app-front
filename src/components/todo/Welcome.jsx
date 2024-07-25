import {Link, useParams} from "react-router-dom";
import React from "react";

function Welcome() {

    const {username} = useParams();
    return (
        <div>
            <h1>Welcome {username}</h1>
            <div className="WelcomeComponent" >
                Your Todos.
                <Link to="/todos">Go Here</Link>
            </div>
        </div>
    )
}

export default Welcome