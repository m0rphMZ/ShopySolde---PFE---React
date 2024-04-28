import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory,Link } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import '../../styles/reglogcss.css';
import {FormH1, FormH2,FormH3} from '../Comps/RegElements';
import Footer from '../Comps/Footer';
import {
  RegButton,
  LoginButton,
  } from '../Comps/ProductElements';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
        window.location.reload(false);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          email: response.data.email,
          id: response.data.id,
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
    <div className="BigContainer">
      <div className="frmwrap">
        <div className="frmcnt">
          <div className="frm">
          <FormH1>CONTENT DE TE REVOIR!</FormH1>
          <FormH2>CONNECTEZ-VOUS</FormH2>
      <label className="FormLabel">E-mail:</label>
      <input className="FormInput"
        type="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label className="FormLabel">Mot de passe:</label>
      <input className="FormInput"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

<LoginButton onClick={login}> Connexion </LoginButton>
<Link to='/ForgotPass'>
  <div className="FormLabel">
Mot de passe oublié?
</div>
</Link>



<FormH3>NOUVEAU SUR SHOPYSOLDE?
  <Link to='/register'>
<RegButton>Créez votre compte ShopySolde</RegButton>
</Link>
</FormH3>



      </div>
    </div>
    </div>

    </div>
  
    <Footer />
    </>
  );
}

export default Login;