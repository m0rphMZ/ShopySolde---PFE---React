import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import '../../styles/reglogcss.css';
import {FormH1,FormH2 } from '../Comps/RegElements';
import { useHistory,Link } from "react-router-dom";
import {
  RegButton,
  } from '../Comps/ProductElements';
import Footer from '../Comps/Footer';

function Register() {
  const initialValues = {
    id: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    id: Yup.string().min(3, "Le nom d'utilisateur doit comporter au moins 4 caractères").max(25).required('Le nom dutilisateur est un champ obligatoire'),
    email: Yup.string().min(3).max(50).email().required('Lemail est un champ obligatoire'),
    password: Yup.string().min(8, "Mot de passe doit être d'au moins 8 caractères").max(40).required('Le mot de passe est un champ obligatoire'),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Veuillez faire correspondre les deux champs de mot de passe')
  });

  let history = useHistory();

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/reg", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
        window.location.reload(false);
      } else {
        alert('Inscription réussie, veuillez vous connecter');
        history.push("/Login");
      }
    });
  };

  return (
    <>
    <div>
    <div className="BigContainer">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
        <FormH1>REJOIGNEZ NOTRE PLATEFORME MAINTENANT!</FormH1>
        <FormH2>INSCRIVEZ-VOUS</FormH2>
          <label>Nom d'utilisateur: </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="id" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="id"
            placeholder="(Ex. Utilisateur123...)"
          />
          <label>E-Mail: </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="email"  />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="email"
          />

          <label>Mot de passe: </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="password" />
          </div>
          <Field
            autocomplete="off"
            type="password"
            id="inputCreateUser"
            name="password"
          />
          <label>Confirmez le mot de passe </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="passwordConfirmation"  />
          </div>
          <Field
            autocomplete="off"
            type="password"
            id="inputCreateUser"
            name="passwordConfirmation"
          />

          <button type="submit"> S'inscrire</button>
        </Form>
      </Formik>
    </div>
    </div>

    <Footer />
    </>

    
    
  );
}

export default Register;