import './TodoApp.css'
import {useState} from 'react'
import { Route,Routes, BrowserRouter, useNavigate, useParams, Link } from 'react-router-dom'
import React from 'react'

export default  function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />

                    <Route path='/*' element={<ErrorComponent />} />

                </Routes>
                <FooterComponent/>
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

function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate());


    const todos = [
        {id:1, description: 'Learn AWS', done: false, targetDate: targetDate},
        {id:2, description: 'Learn Docker', done: false, targetDate: targetDate},
        {id:3, description: 'Learn Azul', done: false, targetDate: targetDate},
        {id:4, description: 'Learn SpringSecurity', done: false, targetDate: targetDate},
    ]

    return (
        <div className="container">
            <h1>ListComponent</h1>
            <div>
                <table className={'table'}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Is Done</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


function HeaderComponent() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black"
                       href="https://www.naver.com">Naver</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/jinho">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

function FooterComponent() {
    return (
        <footer className={'footer'}>
            <div className={'container'}>
                YourFooter
            </div>
        </footer>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>로그아웃 하셨습니다.</h1>
            <div>
                ㄱㅅㄱㅅ.
            </div>
        </div>
    )
}

