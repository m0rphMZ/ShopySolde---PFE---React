import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import '../../styles/Sell.css';
import Footer from '../Comps/Footer';


function Sell() {
  let history = useHistory();
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    companyname: "",
    companywebsite: "",
    companytitle: "",
    phonenumber: "",
    revenue: "",
    employees: "",
    products: "",
    description: "",

  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Veuillez remplir ce champ obligatoire."),
    lastname: Yup.string().required("Veuillez remplir ce champ obligatoire."),
    email: Yup.string().min(3).max(30).required("Veuillez remplir ce champ obligatoire.").email("Email invalide"),
    companyname: Yup.string().required("Veuillez remplir ce champ obligatoire."),
    companywebsite: Yup.string().required("Veuillez remplir ce champ obligatoire."),
    companytitle: Yup.string().required("Veuillez remplir ce champ obligatoire."),
    phonenumber: Yup.string().required("Veuillez remplir ce champ obligatoire."),
    revenue: Yup.string().required("Veuillez remplir ce champ obligatoire."),
    employees: Yup.string().required("Veuillez remplir ce champ obligatoire."),
    products: Yup.string().required("Veuillez remplir ce champ obligatoire."),
    description: Yup.string().required("Veuillez remplir ce champ obligatoire."),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/dems/dem", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert('Demande soumise avec succès');
      history.push("/");
    }
    });
  };

  return (

    <>

<div className='sell-container'>
      

        
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer2">


        <section className='sell-subscription'>
        <p className='sell-subscription-text'>
        Vendre sur <p className='sell-subscription-heading'> SHOPYSOLDE </p>
        </p>
        <p className='sell-subscription-text'>
        Pour postuler et devenir partenaire ou pour obtenir plus d'informations sur la vente avec SHOPYSOLDE
         veuillez répondre à ces questions rapides sur la société et les produits et un responsable l'examinera et vous contactera sous peu.
        </p>
        </section>



          <label>Prénom : </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="firstname" component="span" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateDem"
            name="firstname"

          />


          <label>Nom : </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="lastname" component="span" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateDem"
            name="lastname"

          />

          
          <label>E-mail : </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="email" component="span" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateDem"
            name="email"

          />

<label>Nom de l'entreprise : </label>
<div style={{ color: 'red'}}>
          <ErrorMessage name="companyname" component="span" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateDem"
            name="companyname"

          />
  
  <label>Titre dans l'entreprise : </label>
  <div style={{ color: 'red'}}>
          <ErrorMessage name="companytitle" component="span" />
          </div>
          <Field component="select" name="companytitle" id="inputCreateDem" >
          <option value="" label="Veuillez sélectionner" />
          <option value="Propriétaire / Partenaire">Propriétaire / Partenaire</option>
          <option value="PDG / Président">PDG / Président</option>
          <option value="Directeur financier / vice-président des finances">Directeur financier / vice-président des finances</option>
          <option value="Vice-président marketing">Vice-président marketing</option>
          <option value="Vice-président Opérations">Vice-président Opérations</option>
          <option value="Directeur d'entrepôt">Directeur d'entrepôt</option>
          <option value="Autre">Autre</option>
          </Field>
 
<label>Site Web d'entreprise : </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="companywebsite" component="span" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateDem"
            name="companywebsite"

          />

<label>Numéro de téléphone : </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="phonenumber" component="span" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateDem"
            name="phonenumber"

          />

<label>Revenu annuel estimé de l'entreprise  : </label>
<div style={{ color: 'red'}}>
          <ErrorMessage name="revenue" component="span" />
          </div>
          <Field component="select" name="revenue" id="inputCreateDem" >
          <option value="" label="Veuillez sélectionner" />
          <option value="Moins de $1 million">Moins de $1 million</option>
          <option value="$1 million à $10 millions">$1 million à $10 millions</option>
          </Field>


<label>Nombre d'employés de l'entreprise  : </label>
<div style={{ color: 'red'}}>
          <ErrorMessage name="employees" component="span" />
          </div>
          <Field component="select" name="employees" id="inputCreateDem" >
          <option value="" label="Veuillez sélectionner" />
          <option value="Moins de 10 employés">Moins de 10 employés</option>
          <option value="10 à 100 employés">10 à 100 employés</option>
          <option value="Plus de 100 employés">Plus de 100 employés</option>



          </Field>

<label>À quelle fréquence aurez-vous des produits à liquider?  : </label>
<div style={{ color: 'red'}}>
          <ErrorMessage name="products" component="span" />
          </div>
          <Field component="select" name="products" id="inputCreateDem" >
          <option value="" label="Veuillez sélectionner" />
          <option value="Une seule liquidation (une seule fois)">Une seule liquidation (une seule fois)</option>
          <option value="Liquidations quotidiennes / hebdomadaires.">Liquidations quotidiennes / hebdomadaires.</option>
          <option value="Liquidations mensuelles">Liquidations mensuelles</option>
          <option value="Liquidations trimestrielles / annuelles.">Liquidations trimestrielles / annuelles.</option>

          </Field>

<label>Décrivez brièvement les marques / types de produit (s) dont vous avez besoin pour liquider : </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="description" component="span" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateDem"
            name="description"
            placeholder="20 caractères minimum. 200 caractères maximum"

          />



          <button type="submit">SOUMETTRE UNE DEMANDE</button>
        </Form>
      </Formik>
    </div>
    <Footer />
  </>
  );
}


export default Sell;