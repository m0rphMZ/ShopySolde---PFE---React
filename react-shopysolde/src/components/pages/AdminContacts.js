import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import '../../styles/AdminContacts.css'

function AdminContacts () {
    const [listOfContacts, setListOfContacts] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:3001/conts").then((response) => {
        setListOfContacts(response.data);
    });
  }, []);


    return (
        <div className="wrapper">
            {listOfContacts.map((value, key) => {
                return (
                    <>
                <div className="contact">

                <div className="subject2"> Contact {key+1} </div>

                <div className="subject">Sujet : {value.subject} </div>
                <div className="subject">Créé à : {value.createdAt.substring(0, 10)}</div>
                <div className="content">{value.content}</div>

                </div>
 

                </>


                );
            })}
            
        </div>
    )
}

export default AdminContacts
