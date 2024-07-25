import {createContext, useState} from "react";

export const AuthContext = createContext();


export default function AuthProvider({ children }) {
    const [num, setNum] = useState(0);

    return (
        <AuthContext.Provider value={{num}}>
            {children}
        </AuthContext.Provider>
    );
}