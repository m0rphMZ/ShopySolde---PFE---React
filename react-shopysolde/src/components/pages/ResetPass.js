import React, { useState, useContext, useEffect } from "react";
import '../../styles/ForgotPass.css'
import {FormH1, FormH2,FormH3} from '../Comps/RegElements';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import {
    LoginButton,
    } from '../Comps/ProductElements';


    

function  ResetPass () {


    const [em, SetEm] = useState ([]);


    let history = useHistory();

    const initialValues = {
        password: "",

    };

    

    const validationSchema = Yup.object().shape({
        password: Yup.string().required("Veuillez remplir ce champ obligatoire."),
        passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Veuillez faire correspondre les deux champs de mot de passe')
    });





    useEffect(() => {
        axios.get("http://localhost:3001/auth/ResetPass").then((response) => {
            console.log(response)
        });
    }, []);




    return (
        <>
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        >
            <Form>

                <label> Password : </label>
                <div style={{color :'red'}}>
                <ErrorMessage name="password" component="span"/>
                </div>
                <Field
                    autocomplete="off"
                    type="password"
                    id="inputCreatePw"
                    name="password"
                />

                <label> Confirm Password : </label>
                <div style={{color :'red'}}>
                <ErrorMessage name="passwordConfirmation" component="span"/>
                </div>
                <Field
                    autocomplete="off"
                    type="password"
                    id="inputCreatePw"
                    name="passwordConfirmation"
                />

                <button type="submit"> Reset pw </button>






            </Form>
        </Formik>
        </>
    )
}

export default ResetPass
