import React from 'react';
import useStyles from '../../styles/CartItemStyles'; 

import {
    ProductWrapper,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductPrice,
    ProductButton,
    ProdNumberQuantity,
    ProductButtonQuantity,
    } from '../Comps/ProductElements.js';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <ProductWrapper>
        <ProductCard>
                <ProductImg src={item.media.source} />
                <ProductInfo>

                <ProductTitle>{item.name}</ProductTitle>
                <ProductPrice>{item.line_total.formatted_with_symbol}</ProductPrice>
                
                    <div className={classes.buttons}>
                    <ProductButtonQuantity onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</ProductButtonQuantity>
                    <ProdNumberQuantity>{item.quantity}</ProdNumberQuantity>
                    <ProductButtonQuantity onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</ProductButtonQuantity>
                    </div>
                    <ProductButton onClick={()=> handleRemoveFromCart(item.id)}>Supprimer </ProductButton>

        </ProductInfo>
        </ProductCard>  
        </ProductWrapper>
    )
}

export default CartItem
