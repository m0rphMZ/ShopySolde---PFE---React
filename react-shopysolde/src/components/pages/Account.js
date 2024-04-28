
// Les dépendances sont des composants réutilisables publiés par d'autres développeurs REACT sur NPM que je peux utiliser dans mon projet. //


import React, { useState, useEffect } from 'react';
import Footer from '../Comps/Footer';
import '../../styles/Account.css';
import axios from "axios";
import { AuthContext } from "../../helpers/AuthContext";
import {FormH1} from '../Comps/RegElements';
import { useHistory } from "react-router-dom";
import {
  LoginButton}
  from '../Comps/ProductElements.js';
import { 
    Container,
     InfoSec,
     InfoRow,
     InfoColumn,
     TextWrapper,
     Subtitle2,
     ImgWrapper,
     TopLine,
     Subtitle,
    } from '../Comps/Account.elements';

    // // 


function Account () {

  /* "useState" m'aide à insérer un état dans mes variables,
  dans cette page de compte par exemple,
  je vais insérer la variable saisie par l'utilisateur dans la variable "setOldPassword"
*/

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [newEmail, setnewEmail] = useState("");

  /*
  "Let" me permet de réaffecter le hook "useHistory" de React Dom à simplement "history", cela m'aide à écrire du code plus efficacement.
aussi, useHistory est une dépendance React-Router-Dom qui me permet de gérer l'historique de session.
*/

  let history = useHistory();



/*
Ici, j'écris une fonction à déclencher lorsque le bouton de mise à jour est enfoncé,
aussi, axios est mon interface entre mon API REST et mon Front-End,
c'est un service HTTP léger qui intercepte les données envoyées.
*/

  const changeEmail = () => {
    axios
      .put(
        "http://localhost:3001/auth/changeemail",
        {
          newEmail: newEmail,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        }
        else {
          alert('E-mail changé avec succès, veuillez vous reconnecter.');
          localStorage.removeItem("accessToken");
          setAuthState({ email: "", id: 0, status: false });
          window.location.reload(false);
          history.push("/Login");
        }
      });
  };



  const changePassword = () => {
    axios
      .put(
        "http://localhost:3001/auth/changepassword",
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        }
        else {
          alert('Mot de passe changé avec succès, veuillez vous reconnecter.');
          localStorage.removeItem("accessToken");
          setAuthState({ email: "", id: 0, status: false });
          window.location.reload(false);
          history.push("/Login");

        }
      });
  };





    const [authState, setAuthState] = useState({
        email: "",
        id: 0,
        status: false,
      });


      useEffect(() => {
        axios
          .get("http://localhost:3001/auth/auth", {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          })
          .then((response) => {
            if (response.data.error) {
              setAuthState({ ...authState, status: false });
            } else {
              setAuthState({
                email: response.data.email,
                id: response.data.id,
                status: true,
              });
            }
          });
      }, []);







    return (

        <>
        <AuthContext.Provider value={{ authState, setAuthState }}>
        <InfoSec >
        <Container>
          <InfoRow >
            <InfoColumn>
              <TextWrapper>
                <TopLine> Content de te revoir {authState.id} </TopLine>
                <Subtitle >E-mail</Subtitle>
                <Subtitle2>{authState.email}</Subtitle2>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
              <div className="frm">
                <FormH1>Mettre à jour les informations personnelles</FormH1>
      <label className="frmlbl">Changez votre mot de passe</label>
      <input className="FormInput"
        type="password"
        placeholder="Ancien mot de passe..."
        onChange={(event) => {
          setOldPassword(event.target.value);
        }}
      />
      <input className="FormInput"
        type="password"
        placeholder="Nouveau mot de passe..."
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />
      <LoginButton onClick={changePassword}> Modifier</LoginButton>

      <label className="frmlbl">Changer votre email</label>

      <input className="FormInput"
        type="text"
        placeholder="Nouveau email..."
        onChange={(event) => {
          setnewEmail(event.target.value);
        }}
      />
      <LoginButton onClick={changeEmail}> Modifier</LoginButton>
    </div>

              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      <Footer />
            


        </AuthContext.Provider>  
        </>
    )
}

export default Account
