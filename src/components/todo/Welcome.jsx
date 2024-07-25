import {Link, useParams} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "./security/AuthContext";

function Welcome() {

    const {username} = useParams();
    const num = useContext(AuthContext);
    console.log(num);
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