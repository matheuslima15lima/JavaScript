import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children,redirectTo = "/"})=>{ //children refere-se aos elementos que serao envolvidos pela tag PrivateRoute lá no routes.js

    const isAuthenticated = localStorage.getItem("token") !== null;//se não é nulo está autenticado

    return isAuthenticated ? children : <Navigate to={redirectTo}/>
}