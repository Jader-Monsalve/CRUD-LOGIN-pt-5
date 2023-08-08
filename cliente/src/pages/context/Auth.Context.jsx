import { createContext, useState, useContext } from "react";

import { registerRequest } from "../../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const contex = useContext(AuthContext);
    if(!contex){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return contex;

}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticathed, setIsAuthentid] = useState(false);
    const [errors, setErrors] = useState([]);



    const signup = async (user) = {
        try {
            const res = await registerRequest(user)
            console.log(res);
            setUser(res.data);
            serIsAuthenticated(true);

        } catch (error) {
            setErrors(error.response.data);
            console.log(error);

        }
    }


    return(
        <AuthContext.Provider value={{ 
            signup,
            user,
            isAuthenticathed,
            errors 
        }}>
            {children}
        </AuthContext.Provider>
    
        )
}