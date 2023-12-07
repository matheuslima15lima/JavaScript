import { jwtDecode } from "jwt-decode";
import { createContext } from "react";


export const UserContext = createContext(null);


export const userDecodeToken = (theToken) =>{ //funcao que recebe o token e pega o que nos quisermos dele
    const decoded = jwtDecode(theToken); //aqui retorna o payLoad
    return {
            role: decoded.role,
            name:decoded.name,
            userId: decoded.jti,
            token:theToken
        }
}