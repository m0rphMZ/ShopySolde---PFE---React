import React, { useState, useContext } from "react";
import Footer from '../Comps/Footer';
import '../../styles/ForgotPass.css'
import {FormH1, FormH2,FormH3} from '../Comps/RegElements';
import axios from "axios";
import {
    LoginButton,
    } from '../Comps/ProductElements';


    

function  ForgotPass () {
    const [email, setEmail] = useState("");


    const sendReset = () => {
        const data = { email: email };
        axios.post("http://localhost:3001/auth/forgot", data).then((response) => {
          if (response.data.error) {
            alert(response.data.error);
            window.location.reload(false);
          } else {
            alert(response.data.success);
            window.location.reload(false);
          }
        });
      };



    return (
        <>
        <div className="LogContainer">
            <div className="FormWrap">
                <div className="FormContent">
                    <div className="Form">
                        <FormH1>Assistance mot de passe</FormH1>
                        <FormH2>Saisissez l'adresse e-mail associée à votre compte ShopySolde</FormH2>
                    <label className="FormLabel">E-mail :</label>
                    <input className="FormInput"
                    type="email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                    <LoginButton onClick={sendReset}>Soumettre</LoginButton>
                    </div>
                </div>
            </div>

        </div>

        <Footer />
            
        </>
    )
}

export default ForgotPass
