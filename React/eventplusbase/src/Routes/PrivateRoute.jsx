import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children,redirectTo = "/"})=>{
    const isAuthenticated = localStorage.getItem("token") !== null;//se não é nulo está autenticado

    return isAuthenticated ? children : <Navigate to={redirectTo}/>
}