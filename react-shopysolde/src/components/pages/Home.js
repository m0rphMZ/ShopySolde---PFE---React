import React, { useState, useEffect } from 'react';
import '../../styles/App.css';
import Cards from '../Comps/Cards';
import HeroSection from '../Comps/HeroSection';
import Footer from '../Comps/Footer';
import Spinner from "../Comps/Spinner"
import { Link,useLocation,useHistory } from 'react-router-dom';
import { AuthContext } from "../../helpers/AuthContext";
import axios from "axios";
import "../../styles/adminHome.css"

import { Button } from '../Comps/Button';


const Home=({products}) => {

  const [adminAuthState, setAdminAuthState] = useState ({
    emailadmin: "",
    idadmin: 0,
    status: false,
  })
  
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/admin", {
        headers: {
          adminAccessToken: localStorage.getItem("adminAccessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAdminAuthState({ ...adminAuthState, status: false });
        } else {
          setAdminAuthState({
            emailadmin: response.data.emailadmin,
            idadmin: response.data.idadmin,
            status: true,
          });
        }
      });
  }, []);

  if (!products.length) return <Spinner/>;

  return (
    <>
      <AuthContext.Provider value={{ adminAuthState, setAdminAuthState}}>
      {!adminAuthState.status && (
        <div>
      <HeroSection />
      <Cards products={products}/>
      <Footer />
      </div>
      )}

    {adminAuthState.status && (

      <div className='hero-container'>
      <video src='react-shopysolde/public/videos/servers.mp4' autoPlay loop muted />
      <h1>TABLEAU DE BORD SHOPYSOLDE</h1>
      <p>Choisissez l'une des options ci-dessus</p>
    </div>

      
)}
      



      </AuthContext.Provider>

    </>
  );
}

export default Home;
