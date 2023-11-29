import React, { useContext } from "react";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import logo from "../../Assets/images/images/logo-pink.svg";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import { useState } from "react";
import api from "../../Services/Services";

import loginImage from "../../Assets/images/images/login.svg"

import "./LoginPage.css";
import { UserContext, userDecodeToken } from "../../context/AuthContext";

const LoginPage = () => {
  
const [user, setUser] = useState({email:"comum@comum.com", senha:"12345"});

const [userData, setUserData] = useState(UserContext);

    async function handleSubmit(e){
        e.preventDefault();
       
         

        if (user.email.length >= 3 && user.senha > 3) {
            //chamar a api

            try {

                const promise = await api.post("/Login", {
                    email: user.email,
                    senha: user.senha

                })
                console.log(promise.data.token);
                const userFullToken= userDecodeToken(promise.data.token);
                setUserData(userFullToken)
                localStorage.setItem("token", JSON.stringify( userFullToken))
                console.log("DADOS DO USUARIO");
                console.log(userData);
            } catch (error) {
                alert("nao funcionou")
            }
        }
        else{
            alert("preencha os campos corretamente")
        }
        console.log(user);
    }

  return (
    <div className="layout-grid-login">
      <div className="login">
        <div className="login__illustration">
          <div className="login__illustration-rotate"></div>
          <ImageIllustrator
            imageRender={loginImage}
            altText="Imagem de um homem em frente de uma porta de entrada"
            additionalClass="login-illustrator "
          />
        </div>

        <div className="frm-login">
          <img src={logo} className="frm-login__logo" alt="" />

          <form className="frm-login__formbox" onSubmit={handleSubmit}>
            <Input
              additionalClass="frm-login__entry"
              type="email"
              id="login"
              name="login"
              required={true}
              value={user.email}
              manipulationFunction={(e) => {
                    setUser({...user, email: e.target.value.trim()})
              }}
              placeholder="Username"
            />
            <Input
              additionalClass="frm-login__entry"
              type="password"
              id="senha"
              name="senha"
              required={true}
              value={user.senha}
              manipulationFunction={(e) => {
                setUser({...user, senha: e.target.value.trim()})

               
              }}
              
              placeholder="****"
            />

            <a href="" className="frm-login__link">
              Esqueceu a senha?
            </a>

            <Button
              textButton="Login"
              id="btn-login"
              name="btn-login"
              type="submit"
              additionalClass="frm-login__button"
              
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;