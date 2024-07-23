import './TodoApp.css'
import {useState} from 'react'
import React from 'react'

export default  function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}


export function LoginComponent() { 
    const [userName, setUserName] = useState ('jinho');
    const [password, setPassword] = useState ('');
    const [showSuccessMessage, setSuccessMessageState] = useState(false)
    const [showErrorssage, setErrorMessageState] = useState(false)

    function Success() {
        if (showSuccessMessage) {
            return (
            <div className='successMessage' >Authenticatied Successfully.</div>
        )
        }
        return null 
    }
    
    function Error() {
            if (showErrorssage) {
                return (
                <div className='errorMessage' >Authenticatied Failed.</div>
            )
        }
        return null
    }


    function checkAuth() {
        if(userName==='jinho' && password ==='asd123'){
            console.log('check')
            setSuccessMessageState(true)
            setErrorMessageState(false)
        }else {
            console.log('failed')
            setSuccessMessageState(false)
            setErrorMessageState(true)
        }
    }

    return (
        <div className="Login">
            <Success />
            <Error />
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

export  function WelcomeComponent() {
    return (
        <div className="Welcome" >WelcomeComponent</div>
    )
}
