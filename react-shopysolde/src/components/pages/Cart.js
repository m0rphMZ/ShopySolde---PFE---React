import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core';
import CartItem from '../Comps/CartItem'; 
import {Link} from "react-router-dom";
import { ShoppingCart } from '@material-ui/icons';
import '../../styles/CartCss.css'; 
import Footer from '../Comps/Footer';
import Spinner from "../Comps/Spinner"
import {
  ProfileButton
} from '../Comps/ProductElements';

import {
  ProductsContainer,
  ProductWrapper,
  ProductButton,
  CartContainer,
  } from '../Comps/ProductElements.js';



const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
  


    
    
    const EmptyCart = () => (
      
      <>
      <div className="BigContainer">

      <h1>Votre panier est vide!</h1>
      

      <Grid className="brand" item xs={12} sm={6}>
            <ShoppingCart />
      </Grid>

      <p>Commencez à ajouter des produits ici!</p>

      <Link to="/Products">
        <ProfileButton>
        AJOUTER DES PRODUITS
        </ProfileButton>
        </Link>

      </div>
      

    
    </>

    );

    const FilledCart = () => (

        <>
        <ProductsContainer>
        <ProductWrapper>
                {cart.line_items.map ((item) => (
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                ))}
        </ProductWrapper>

            <CartContainer>
                <Typography variant="h4">
                        Total: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <Typography>
                    <ProductButton onClick={handleEmptyCart}>Vider le Panier</ProductButton>
                    <Link to="/checkout">
                    <ProductButton>Commander</ProductButton>
                    </Link>
                </Typography>

                </CartContainer>
                </ProductsContainer>

        </>



    );

    if (!cart.line_items) return <Spinner/>;

    return (
<div>



            
            { !cart.line_items.length ? <EmptyCart/> : // el : houma else //
            <FilledCart />}


        <Footer/>
        </div>


    )
}

export default Cart
