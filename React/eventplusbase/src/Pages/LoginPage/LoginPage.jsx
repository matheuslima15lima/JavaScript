import React, { useContext, useEffect } from "react";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import logo from "../../Assets/images/images/logo-pink.svg";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import { useState } from "react";
import api from "../../Services/Services";
import { useNavigate } from "react-router-dom";
import loginImage from "../../Assets/images/images/login.svg"

import "./LoginPage.css";

import { UserContext, userDecodeToken } from "../../context/AuthContext";

const LoginPage = () => {
  
const [user, setUser] = useState({email:"comum@comum.com", senha:"12345"});

//dados globais do usuario
const {userData, setUserData} = useContext(UserContext);//PROBLEMA AQUI!!!!!!!! useContext 
//RESOLVENDO O PROBLEMA:tinha que colocar chaves ao inves de colchetes porque eu estou importando essa variavel acima

const navigate = useNavigate();
useEffect(()=>{
  if(userData.name) navigate("/");
}, [userData])
    async function handleSubmit(e){
        e.preventDefault();
       
         
        //validacao de caracteres
        if (user.email.length >= 3 && user.senha > 3) {
            //chamar a api

            try {

                const promise = await api.post("/Login", {
                    email: user.email,
                    senha: user.senha

                })
                console.log(promise.data.token);
                const userFullToken= userDecodeToken(promise.data.token);
                setUserData(userFullToken)//guarda os dados decodificados
                localStorage.setItem("token", JSON.stringify( userFullToken)) //transforma o objeto inteiro em string(Json)
                navigate("/");//manda o usuario para home
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