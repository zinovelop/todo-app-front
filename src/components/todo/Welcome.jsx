import {Link, useParams} from "react-router-dom";
import React, {useState} from "react";
import { retrieveHelloWorldPathVariable} from "./api/HelloWorldApiService";

function Welcome() {

    const {username} = useParams();

    const [message, setMessage] = useState()

    function callHelloWorldAPI() {

        retrieveHelloWorldPathVariable(username)
            .then((response) => successful(response))
            .catch((error) => printError(error))
            .finally(() => console.log("clean-up"))
    }
    function successful(response) {
        setMessage(response.data.message)
        console.log(response)
    }
    function printError(error) {
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your Todos.
                <Link to="/todos">Go Here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldAPI}>
                    Call Hello World API
                </button>
            </div>
            <div className="text-info">
                {message}
            </div>
        </div>
    )
}

export default Welcome