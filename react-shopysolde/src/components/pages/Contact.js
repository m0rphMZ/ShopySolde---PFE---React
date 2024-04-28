import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../../styles/Contact.css';
import * as Yup from "yup";
import axios from "axios";
import Footer from '../Comps/Footer';
import { 
Container,
 InfoSec,
 InfoRow,
 InfoColumn,
 TextWrapper,
 Subtitle2,
 Subtitle3,
 ImgWrapper,
 TopLine,
 Subtitle,
} from '../Comps/Contact.elements';


function Contact() {

  let history = useHistory();
  const initialValues = {
    subject: "",
    content: "",
  };


  const validationSchema = Yup.object().shape({
    subject: Yup.string().required("Veuillez remplir ce champ obligatoire."),
    content: Yup.string().required("Veuillez remplir ce champ obligatoire."),
  });


  const onSubmit = (data) => {
    axios.post("http://localhost:3001/conts/cont", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert('Formulaire soumis avec succès, vous serez maintenant redirigé vers la page daccueil.');
      history.push("/");
    }
    });
  };





  return (
    <>
      <InfoSec >
        <Container>
          <InfoRow >
            <InfoColumn>
              <TextWrapper>
                <TopLine> Entrez en contact avec SHOPYSOLDE: </TopLine>
                <Subtitle >Coordonnées:</Subtitle>
                <Subtitle2>Service client:</Subtitle2>
                <Subtitle3>Email: support@shopysolde.com</Subtitle3>
                <Subtitle2>Opportunités d'emploi:</Subtitle2>
                <Subtitle3>Email: job@shopysolde.com</Subtitle3>
                <Subtitle2>Téléphone:</Subtitle2>
                <Subtitle3>+216 29 916 488</Subtitle3>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>


      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="contactContainer">


        <section className='contact-sub'>
        <p className='contact-sub-text'>
        Si vous avez des commentaires, des questions ou des demandes, veuillez remplir et soumettre le formulaire ci-dessous.
        </p>
        </section>



          <label>Sujet : </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="subject" component="span" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateContact"
            name="subject"

          />


          <label>Contenu  : </label>
          <div style={{ color: 'red'}}>
          <ErrorMessage name="content" component="span" />
          </div>
          <Field
            autocomplete="off"
            id="inputCreateContactBig"
            name="content"

          />



          <button type="submit">SOUMETTEZ VOS COMMENTAIRES.</button>
        </Form>
      </Formik>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      <Footer />
    </>
  );
}

export default Contact;