import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import '../../styles/AdminDems.css';

function AdminDemandes ()  {

    const [listOfDems, setListOfDems] = useState ([]);

    useEffect(() => {

        axios.get("http://localhost:3001/dems").then((response) => {
            setListOfDems(response.data);
        });
      }, []);

    return (
        <div className="wrapper">
            {listOfDems.map((value, key) => {
                return (
                    <>
                    <div className="dem">

                    <div className="subject2">Demande {key+1}</div>
                    <div className="subject">Prénom : {value.firstname}</div>
                    <div className="subject">Nom : {value.lastname}</div>
                    <div className="subject">E-mail : {value.email}</div>
                    <div className="subject">Nom de l'entreprise : {value.companyname}</div>
                    <div className="subject">site Web d'entreprise : {value.companywebsite}</div>
                    <div className="subject">Titre dans l'entreprise : {value.companytitle}</div>
                    <div className="subject">Numéro de téléphone : {value.phonenumber}</div>
                    <div className="subject">Revenu annuel estimé de l'entreprise  : {value.revenue}</div>
                    <div className="subject">Nombre d'employés de l'entreprise  : {value.employees}</div>
                    <div className="subject">Fréquence des produits liquidés : {value.products}</div>
                    <div className="subject">Description des produits potentiellement répertoriés : {value.description}</div>
                    <div className="subject">Créé à : {value.createdAt.substring(0, 10)}</div>






                    </div>



                    </>

                )

            })}
            
        </div>
    )
}

export default AdminDemandes
