import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory,Link } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import { FormH2, FormLogin} from '../Comps/RegElements';
import Footer from '../Comps/Footer';
import '../../styles/AdminLogin.css'
import {
  RegButton,
  LoginButton,
  } from '../Comps/ProductElements';

function Login() {
  const [emailadmin, setEmailAdmin] = useState("");
  const [passwordadmin, setPasswordAdmin] = useState("");
  const { setAdminAuthState } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = { emailadmin: emailadmin, passwordadmin: passwordadmin };
    axios.post("http://localhost:3001/admin/adminlogin", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
        window.location.reload(false);
      } else {
        localStorage.setItem("adminAccessToken", response.data.admintoken);
        setAdminAuthState({
          emailadmin: response.data.emailadmin,
          idadmin: response.data.idadmin,
          status: true,
        });
        alert('Connexion réussie, redirection vers la page daccueil ...');
        history.push("/");
        window.location.reload(false);
      }
    });
  };




  return (

    <>
    <div className="AdminContainer">
      <div className="FormWrap">
        <div className="FormContent">
          <div className="Form">
          <FormLogin>INTERFACE DE CONNEXION ADMINISTRATEUR.</FormLogin>
          <FormH2>CONNECTEZ-VOUS</FormH2>
      <label className="FormLabel">E-mail Administrateur :</label>
      <input className="FormInput"
        type="email"
        onChange={(event) => {
          setEmailAdmin(event.target.value);
        }}
      />
      <label className="FormLabel">Mot de passe Administrateur:</label>
      <input className="FormInput"
        type="password"
        onChange={(event) => {
          setPasswordAdmin(event.target.value);
        }}
      />

<LoginButton onClick={login}> Connexion </LoginButton>




      </div>
    </div>
    </div>

    </div>
  
    <Footer />
    </>
  );
}

export default Login;