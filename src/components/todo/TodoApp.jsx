import './TodoApp.css'
import {useState} from 'react'
import { Route,Routes, BrowserRouter, useNavigate, useParams } from 'react-router-dom'
import React from 'react'

export default  function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/*' element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
           
            
        </div>
    )
}


export function LoginComponent() { 
    const [userName, setUserName] = useState ('jinho');
    const [password, setPassword] = useState ('');
    const [showSuccessMessage, setSuccessMessageState] = useState(false);
    const [showErrorssage, setErrorMessageState] = useState(false);
    const navigate = useNavigate();

    function checkAuth() {
        if(userName==='jinho' && password ==='asd123'){
            setSuccessMessageState(true)
            setErrorMessageState(false)
            navigate(`/welcome/${userName}`)
        }else {
            setSuccessMessageState(false)
            setErrorMessageState(true)
        }
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            {showSuccessMessage && <div className='successMessage' >Authenticatied Successfully.</div>}
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

function WelcomeComponent() {

    const {username} = useParams();
    console.log(username);

    return (
        <div>
            <h1>Welcome {username}</h1>
            <div className="WelcomeComponent" >
                WelcomeComponent
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div>
            <h1>Error</h1>
            <div className="ErrorComponent" >
                ErrorComponent
            </div>
        </div>
    )
}