// Les dépendances sont des composants réutilisables publiés par d'autres développeurs REACT sur NPM que je peux utiliser dans mon projet. //

// importer les pages que je vais utiliser et les composants de mon dossier pages et comps //

import React, {useState, useEffect} from 'react';
/* Axios est une bibliothèque Js exporté depuis NPM fonctionnant comme un client HTTP
Elle permet de communiquer avec notre API REST en utilisant des requêtes */
import axios from "axios";
import Navbar from './components/Comps/Navbar';
import './styles/App.css';
import Home from './components/pages/Home';

/*
REACT ROUTER nous permet d'avoir un routage intégré à l'application.
Il permet aussi de synchroniser (d'associer) des composants graphiques React à des urls.*/

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Account from './components/pages/Account';
import Cart from './components/pages/Cart';
import Sell from './components/pages/Sell';
import Offers from './components/pages/Offers';

/* importation de notre API CommerceJS */
import {commerce} from './lib/commerce';

import { AuthContext } from "./helpers/AuthContext";
import Checkout from './components/Comps/Checkout';
import Cards from './components/Comps/Cards';
import PageNotFound from "./components/pages/PageNotFound";
import Contact from './components/pages/Contact';
import Admin from './components/pages/Admin';
import AdminLog from './components/pages/AdminLog';
import AdminContacts from './components/pages/AdminContacts';
import AdminUsers from './components/pages/AdminUsers';
import AdminProd from './components/pages/AdminProd'
import AdminDemandes from './components/pages/AdminDemandes';
import ForgotPass from './components/pages/ForgotPass';
import ResetPass from './components/pages/ResetPass';
import UpdateUser from './components/pages/UpdateUser';
import ScrollIntoView  from "./components/Comps/scrollView"



function App() {


  /*initialisation de l'état de l'authentification administrateur*/

  const [adminAuthState, setAdminAuthState] = useState ({
    emailadmin: "",
    idadmin: 0,
    status: false,
  })


  /*UseEffect permet de déclencher une fonction de manière asynchnone lorsque l'état de notre composant (AuthState) change */

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/admin", {
        headers: {
          /*vérifier si le jeton existe depuis notre stockage local (LocalStorage) */
          adminAccessToken: localStorage.getItem("adminAccessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          /*si le jeton n'existe pas, l'état ne change pas et reste faux*/
          setAdminAuthState({ ...adminAuthState, status: false });
        } else {
          /*si un jeton a été trouvé dans notre stockage local,
          l'état de l'administrateur est maintenant authentifié et notre jeton
          d'identification est remplies avec les informations appropriées*/
          setAdminAuthState({
            emailadmin: response.data.emailadmin,
            idadmin: response.data.idadmin,
            status: true,
          });
        }
      });
  }, []);


/*initialisation de l'état de l'authentification du client*/

  const [authState, setAuthState] = useState({
    email: "",
    id: 0,
    status: false,
  });

  /*le même processus de méthode d'authentification que celui de l'administrateur*/

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

  /* chercher les produits */ const  [products, setProducts] = useState([]);
  /* chercher les categories */ const [categories, setCategories] = useState([]);
  /* chercher les objets "panier" */ const [cart, setCart] = useState({});
  /* chercher les ordres */ const [order, setOrder] = useState({});
 /* chercher les erreur s'ils existent */  const [errorMessage, setErrorMessage] = useState('');


  /*les fonctions qui récupère la liste des produits et de catégories de notre api commercejs*/
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    const { data: products } = await commerce.products.list();
    const { data: categoriesData } = await commerce.categories.list();
    
    console.log({products}); 

    const productsPerCategory = categoriesData.reduce ((acc, category) => {
     return [
       ...acc,
    {
      ...category,
    productsData: products.filter((product) =>
    product.categories.find((cat) => cat.id === category.id)
    ),
    },
     ];
    }, []);
    setCategories(productsPerCategory);
    setProducts(data);
  };



  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    
  };


  /*les fonctions qui gèrent la manipulation de notre panier*/
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };



  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response.cart);
  };



  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };



  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };



  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };


/*la fonction qui capture notre identifiant de jeton lorsque nous traitons une nouvelle commande*/
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };


 /*useEffect est déclenché une fois notre page principale chargée, il récupère nos produits et notre panier*/
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);





  /*les fonctions qui interdisent le chargement de pages en situation non autorisée, selon l'état de nos acteurs (Client/Admin) */
  function PrivateLoginRoute ({ children, ...rest}) {

    return (
      <Route {...rest} render={()=> {
        return authState.status===false
        ? children
        :<Redirect to='/' />
  
    }} />
  
    )
  
    }
  
    function PrivateRegRoute ({ children, ...rest}) {
  
      return (
        <Route {...rest} render={()=> {
          return authState.status===false
          ? children
          :<Redirect to='/' />
    
      }} />
    
      )
    
      }
      function PrivateProfileRoute ({ children, ...rest}) {
  
        return (
          <Route {...rest} render={()=> {
            return authState.status===true
            ? children
            :<Redirect to='/Login' />
      
        }} />
      
        )
      
        }
        function PrivateCheckoutRoute ({ children, ...rest}) {
  
          return (
            <Route {...rest} render={()=> {
              return authState.status===true
              ? children
              :<Redirect to='/Login' />
        
          }} />
        
          )
        
          }


            function PrivateSellRoute ({ children, ...rest}) {
  
              return (
                <Route {...rest} render={()=> {
                  return authState.status===true
                  ? children
                  :<Redirect to='/Login' />
            
              }} />
            
              )
            
              }

              function PrivateAdminRoute ({ children, ...rest}) {
  
              return (
                <Route {...rest} render={()=> {
                  return adminAuthState.status===true
                  ? children
                  :<Redirect to='/' />
            
              }} />
            
              )
            
              }




              /*le retour de notre fonction App */

  return (
    <>
      {/*fournit le contexte de nos deux états d'authentification, afin de manipuler le rendu conditionnel de nos composants*/}
      <AuthContext.Provider value={{ authState, setAuthState , adminAuthState, setAdminAuthState}}>
      
      {/*La balise Router nous permet de relier nos composants avec l'url approprié dans notre application*/}
      <Router>

      {/*fonction qui défile vers le haut lors de la charge des composants*/}
      <ScrollIntoView>
        
        {/*notre NavBar n'est pas dans notre balise Switch car elle est toujours chargée,
        ce qui signifie qu'elle est toujours visible dans le rendu*/}
        <Navbar totalItems={cart.total_items} />

        {/*la balise Switch basculera entre nos chemins et leurs composants en fonction de la demande*/}
        <Switch>

        <Route path='/' exact component={() => <Home products={products} /> } />
        <Route path='/Cards' component={() => <Cards products={products} /> } />
        <Route path='/About' component={About} />
        <Route path='/AdminLog'  component={AdminLog}/>

          {/*Ce sont les routes protégées, dans lesquelles une authentification est requise avant d'y accéder*/}
          <PrivateAdminRoute path='/Admin'><Admin/></PrivateAdminRoute>
          <PrivateAdminRoute path='/AdminContacts' > <AdminContacts/></PrivateAdminRoute>
          <PrivateAdminRoute path='/AdminUsers' > <AdminUsers/></PrivateAdminRoute>
          <PrivateAdminRoute path='/AdminDemandes' > <AdminDemandes/></PrivateAdminRoute> 
          <PrivateAdminRoute path='/AdminProd' ><AdminProd /></PrivateAdminRoute>
          <PrivateRegRoute path='/Register' ><Register/></PrivateRegRoute>
          <PrivateLoginRoute path='/Login'><Login/></PrivateLoginRoute>
          <PrivateLoginRoute path='/ForgotPass'><ForgotPass/></PrivateLoginRoute>
          <PrivateProfileRoute path='/Account' ><Account/></PrivateProfileRoute>
          <PrivateSellRoute path='/Sell'><Sell/></PrivateSellRoute> 
          <PrivateCheckoutRoute path='/Checkout'> <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} /> </PrivateCheckoutRoute>

          <Route path='/ResetPass'><ResetPass/></Route>
          <Route path='/UpdateUser/:id'><UpdateUser/></Route>

          {/*Les produits et les Routes de paniers nécessitent la mise en place de certains accessoires de composants (Props),
           ce sont ceux de la manipulation des paniers.*/}
          <Route path='/products' render={() => <Products categories= {categories} onAddToCart={handleAddToCart} handleUpdateCartQty />} />
          <Route path ='/Cart' render={() => <Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty}
                                                                handleRemoveFromCart={handleRemoveFromCart}
                                                                handleEmptyCart={handleEmptyCart} />} />
          <Route path='/Offers' component={() => <Offers products={products} /> } />
          <Route path='/Contact'><Contact /></Route> 

          {/*le composant PageNotFound est rendu une fois qu'aucun des chemins précédemment déclarés n'est demandé*/}
          <Route path="*" exact component={PageNotFound} />
        </Switch>
        </ScrollIntoView>
      </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
