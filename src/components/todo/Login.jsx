import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./security/AuthContext";

export function Login() {
    const [userName, setUserName] = useState ('jinho');
    const [password, setPassword] = useState ('');
    const [showErrorssage, setErrorMessageState] = useState(false);
    const navigate = useNavigate();

    const context = useAuth();

    function checkAuth() {
        if(context.login(userName, password)){
            setErrorMessageState(false)
            navigate(`/welcome/${userName}`)
        }else {
            setErrorMessageState(true)
        }
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            {showErrorssage && <div className='errorMessage' >Authenticatied Failed.</div>}

            <div className="loginForm">
                <div>
                    <label>UserName</label>
                    <input type="text" name="userName" value={userName} onChange={(event)=> setUserName(event.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(event)=> setPassword(event.target.value)}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={checkAuth}>login</button>
                </div>
            </div>
        </div>
    )

}

export default Login