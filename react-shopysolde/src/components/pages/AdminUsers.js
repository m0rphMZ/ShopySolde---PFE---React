import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import '../../styles/AdminUsers.css'

function AdminUsers  ()  {

    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3001/auth").then((response) => {
            setListOfUsers(response.data);
        });
      }, []);

    return (
        <div className="wrapper">
            {listOfUsers.map((value,key) => {
                return (
                    <>
                    <div className="user">

                    <div className="subject2"> Utilisateur {key+1} </div>

                    <div className="subject">Identifiant d'utilisateur : {value.id}</div>
                    <div className="subject">E-mail : {value.email}</div>
                    <div className="subject">Créé à : {value.createdAt.substring(0, 10)}</div>

                    </div>
                    </>
                )


            })}
            
        </div>
    )
}

export default AdminUsers
