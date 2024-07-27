import {Link} from "react-router-dom";
import React from "react";
import {useAuth} from "./security/AuthContext";

function Header() {

    const authContext = useAuth();
    const isLoggedIn = authContext.isAuthenticated;

    const logout = authContext.logout;


    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black"
                       href="https://www.naver.com">Naver</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            {isLoggedIn &&<li className="nav-item fs-5"><Link className="nav-link" to="/welcome/jinho">Home</Link></li>}
                            {isLoggedIn &&<li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>}
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        {!isLoggedIn && <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>}
                        {isLoggedIn && <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
