import React from "react";
import {useAuth} from "./security/AuthContext";



function Logout() {
    useAuth().setIsAuthenticated(false);
    return (
        <div className="LogoutComponent">
            <h1>로그아웃 하셨습니다.</h1>
            <div>
                ㄱㅅㄱㅅ.
            </div>
        </div>
    )
}

export default Logout