import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {FormH1,FormH2 } from '../Comps/RegElements';
import { useHistory,Link } from "react-router-dom";
import {
  RegButton,
  } from '../Comps/ProductElements';
import Footer from '../Comps/Footer';

function Admin() {
  const initialValues = {
    idadmin: "",
    emailadmin:"",
    passwordadmin: "",
  };

  const validationSchema = Yup.object().shape({
    idadmin: Yup.string().min(3).max(25).required('Le nom dutilisateur est un champ obligatoire'),
    emailadmin: Yup.string().min(3).max(50).email().required('Lemail est un champ obligatoire'),
    passwordadmin: Yup.string().min(4).max(40).required('Le mot de passe est un champ obligatoire'),
    passwordadminConfirmation: Yup.string()
     .oneOf([Yup.ref('passwordadmin'), null], 'Veuillez faire correspondre les deux champs de mot de passe')
  });

  let history = useHistory();

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/admin", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
        window.location.reload(false);
      } else {
        alert('Admin ajouté');
        history.push("/");
      }
    });
  };

  return (
    <>
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="forjmContainer">
        <FormH1>REJOIGNEZ NOTRE PLATEFORME MAINTENANT!</FormH1>
        <FormH2>INSCRIVEZ-VOUS</FormH2>
          <label>Nom d'utilisateur: </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="idadmin" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="idadmin"
            placeholder="(Ex. Utilisateur123...)"
          />
          <label>E-Mail: </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="emailadmin"  />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateUser"
            name="emailadmin"
          />

          <label>Mot de passe: </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="passwordadmin" />
          </div>
          <Field
            autocomplete="off"
            type="password"
            id="inputCreateUser"
            name="passwordadmin"
          />
          <label>Confirmez le mot de passe </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="passwordadminConfirmation"  />
          </div>
          <Field
            autocomplete="off"
            type="password"
            id="inputCreateUser"
            name="passwordadminConfirmation"
          />

          <button type="submit"> S'inscrire</button>
        </Form>
      </Formik>

    </div>

    <Footer />
    </>

    
    
  );
}

export default Admin;