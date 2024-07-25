import {createContext, useContext, useState} from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export default function AuthProvider({ children }) {


    const num = useState(0)[0];
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // setInterval(() => setNum(num+1), 10000)

    return (
        <AuthContext.Provider value={ {num, isAuthenticated, setIsAuthenticated} }>
            {children}
        </AuthContext.Provider>
    );
}