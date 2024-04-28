import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link,useLocation,useHistory } from 'react-router-dom';
import '../../styles/Navbar.css';
import {IconButton, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from "axios";
import { AuthContext } from "../../helpers/AuthContext";
import {
  ProfileButton
} from '../Comps/ProductElements';

function Navbar({totalItems}) {


  // hethi authstate mta3 el user 3adi //

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

  let history = useHistory();

  const logout = () => {
    
    localStorage.removeItem("accessToken");
    setAuthState({ email: "", id: 0, status: false });
    history.push("/");
    window.location.reload(false);

  };

// toufa lenna //

// hethi authstate mta3 el admin //


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

const Adminlogout = () => {
    
  localStorage.removeItem("adminAccessToken");
  setAdminAuthState({ emailadmin: "", idadmin: 0, status: false });
  history.push("/");
  window.location.reload(false);

};


// toufa lenna //


  const location = useLocation();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <AuthContext.Provider value={{ authState, setAuthState ,adminAuthState, setAdminAuthState}}>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>


          {!adminAuthState.status && (
            <div>
            SHOPYSOLDE &nbsp;
            <i class= 'fas fa-dolly-flatbed'  />
            </div>
          )}


            {adminAuthState.status && (
            <div className="navbar-admin">
            TABLEAU DE BORD &nbsp;
            <i class= 'fas fa-dolly-flatbed'  />
            </div>
            )}


          </Link>


          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Accueil
              </Link>
            </li>
            
            {!adminAuthState.status && (
            <li className='nav-item'>
              <Link
                to='/Products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Catalogues
              </Link>
            </li>
            )}

            {adminAuthState.status && (
            <li className='nav-item'>
              <Link
                to='/AdminContacts'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Voir Les Contacts
              </Link>
            </li>
            )}

            {!adminAuthState.status && (
            <li className='nav-item'>
              <Link
                to='/Sell'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Vendre
              </Link>
            </li>
            )}

            {adminAuthState.status && (
            <li className='nav-item'>
              <Link
                to='/AdminUsers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Voir Les Utilisateurs
              </Link>
            </li>
            )}



            {!adminAuthState.status && (
            <li className='nav-item'>
              <Link
                to='/Offers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Offres Exceptionnelles
              </Link>
            </li>
            )}

            {adminAuthState.status && (
            <li className='nav-item'>
              <Link
                to='/AdminDemandes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Voir Les Demandes De Vente
              </Link>
            </li>
            )}

            {adminAuthState.status && (
            <li className='nav-item'>
              <Link
                to='/AdminProd'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gérer Les Produits
              </Link>
            </li>
            )}


            <li>
              
              {(location.pathname !== '/cart' && !adminAuthState.status)  && (
                <div className='nav-links'>
                  <IconButton component={Link} to="/cart" aria-label= "cart" color="inherit">
                   <Badge badgeContent={totalItems} color="secondary" >
                  <ShoppingCart />
                  </Badge>
                  </IconButton>
                </div> ) }
            </li>
            <li>
                {(authState.status && !adminAuthState.status) && (
                <div className='nav-links'>
                  <IconButton aria-label= "logout" color="inherit">
                  <ExitToAppIcon onClick={logout}/>
                  </IconButton>
                </div>
                )}
            </li>

            <li>
                { adminAuthState.status && (
                <div className='nav-links'>
                  <IconButton aria-label= "Adminlogout" color="inherit">
                  <ExitToAppIcon onClick={Adminlogout}/>
                  </IconButton>
                </div>
                )}
            </li>


            {(authState.status && !adminAuthState.status) && (
            <li>
              <Link
                to='/Account'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                VOTRE COMPTE
              </Link>
            </li>

            )}
            {(!authState.status && !adminAuthState.status) && (
            <li>
              <Link
                to='/Login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                CONNECTEZ VOUS 
              </Link>
            </li>
            )}
          </ul>
          {(!authState.status && button && !adminAuthState.status) && (
          <Button buttonStyle='btn--outline'>CONNECTEZ VOUS </Button>
          )}
          {(authState.status && button && !adminAuthState.status) && (
            <Link to="/Account">
          <ProfileButton> VOTRE COMPTE </ProfileButton>
          </Link>
          )}

        </div>
      </nav>
      </AuthContext.Provider>
    </>
  );
}

export default Navbar;
