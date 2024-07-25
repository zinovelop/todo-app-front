import {Link} from "react-router-dom";
import React from "react";
import {useAuth} from "./security/AuthContext";

function Header() {

    // const num = useContext(AuthProvider);
    const authContext = useAuth();
    const isLoggedIn = authContext.isAuthenticated;


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
                        {!isLoggedIn && <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>}
                        {isLoggedIn && <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
